"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Edit,
  Trash2,
  Code,
  ImageIcon,
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Loader2,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Fuse from "fuse.js";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const AddBlog = dynamic(() => import("../../components/AddBlogs"), {
  ssr: false,
});

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  datePublished: string;
  slug: string;
  coverImage: string;
}

type ToastType = "success" | "error" | "warning";
interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

/* ─────────────────────────────────────────────
   SAFE HTML FORMATTER
   Handles malformed HTML / broken tables gracefully.
   Never throws — always returns a string.
───────────────────────────────────────────── */

function safeFormatHtml(raw: string): string {
  if (!raw || typeof raw !== "string") return "";
  try {
    // Use DOMParser to parse + re-serialize, which auto-closes broken tags
    const parser = new DOMParser();
    const doc = parser.parseFromString(raw, "text/html");

    // Strip <html><head><body> wrappers, keep inner content
    const bodyHtml = doc.body?.innerHTML ?? raw;

    // Pretty-print with 2-space indentation
    return prettyPrint(bodyHtml);
  } catch {
    // If anything fails, return the raw string as-is
    return raw;
  }
}

function prettyPrint(html: string): string {
  try {
    let indent = 0;
    const tab = "  ";
    const lines: string[] = [];

    // Tokenise into tags and text
    const tokens = html.split(/(<[^>]+>)/g);

    for (const token of tokens) {
      const trimmed = token.trim();
      if (!trimmed) continue;

      const isClosing = /^<\//.test(trimmed);
      const isSelfClosing = /\/>$/.test(trimmed) || /^<(br|hr|img|input|meta|link)/i.test(trimmed);
      const isOpening = trimmed.startsWith("<") && !isClosing && !isSelfClosing;

      if (isClosing) indent = Math.max(0, indent - 1);
      lines.push(tab.repeat(indent) + trimmed);
      if (isOpening) indent++;
    }

    return lines.join("\n");
  } catch {
    return html;
  }
}

/* ─────────────────────────────────────────────
   TOAST SYSTEM
───────────────────────────────────────────── */

let toastCounter = 0;

function ToastContainer({ toasts, dismiss }: { toasts: Toast[]; dismiss: (id: number) => void }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        maxWidth: "360px",
        width: "calc(100vw - 3rem)",
      }}
    >
      {toasts.map((t) => {
        const colors: Record<ToastType, { bg: string; border: string; text: string; icon: React.ReactNode }> = {
          success: {
            bg: "#f0fdf4",
            border: "#86efac",
            text: "#15803d",
            icon: <CheckCircle size={16} />,
          },
          error: {
            bg: "#fef2f2",
            border: "#fca5a5",
            text: "#dc2626",
            icon: <XCircle size={16} />,
          },
          warning: {
            bg: "#fffbeb",
            border: "#fcd34d",
            text: "#d97706",
            icon: <AlertTriangle size={16} />,
          },
        };
        const c = colors[t.type];
        return (
          <div
            key={t.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: c.bg,
              border: `1px solid ${c.border}`,
              borderRadius: "10px",
              padding: "0.75rem 1rem",
              color: c.text,
              fontSize: "0.875rem",
              fontWeight: 500,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              animation: "slideIn 0.2s ease",
            }}
          >
            {c.icon}
            <span style={{ flex: 1 }}>{t.message}</span>
            <button
              onClick={() => dismiss(t.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: c.text,
                opacity: 0.6,
                padding: 0,
                display: "flex",
              }}
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   HTML EDITOR MODAL
   Bug fixes:
   - safeFormatHtml never throws
   - textarea preserves scroll position on update
   - line numbers sync with scroll
   - save handles network errors
───────────────────────────────────────────── */

function HtmlEditorModal({
  slug,
  initialContent,
  onClose,
  onSaved,
  addToast,
}: {
  slug: string;
  initialContent: string;
  onClose: () => void;
  onSaved: () => void;
  addToast: (type: ToastType, message: string) => void;
}) {
  const [content, setContent] = useState(initialContent);
  const [saving, setSaving] = useState(false);
  const [lineCount, setLineCount] = useState(1);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Sync line count
  useEffect(() => {
    const lines = content.split("\n").length;
    setLineCount(lines);
  }, [content]);

  // Sync line number scroll with textarea scroll
  const handleScroll = () => {
    if (lineRef.current && textareaRef.current) {
      lineRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/blog/${slug}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content }),
        }
      );
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      addToast("success", "HTML content saved successfully.");
      onSaved();
      onClose();
    } catch (err) {
      addToast("error", "Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // Tab key inserts 2 spaces instead of defocusing
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const el = e.currentTarget;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const newVal = content.substring(0, start) + "  " + content.substring(end);
      setContent(newVal);
      // Restore cursor
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = start + 2;
      });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "14px",
          width: "100%",
          maxWidth: "820px",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.25rem",
            borderBottom: "1px solid #e5e7eb",
            background: "#fafafa",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Code size={18} color="#d97706" />
            <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "#111" }}>
              HTML Editor
            </span>
            <span
              style={{
                background: "#fef3c7",
                color: "#92400e",
                fontSize: "0.7rem",
                fontWeight: 600,
                padding: "2px 8px",
                borderRadius: "999px",
                letterSpacing: "0.04em",
              }}
            >
              {slug}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#6b7280",
              display: "flex",
              padding: "4px",
              borderRadius: "6px",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Warning banner for potentially malformed HTML */}
        {(content.includes("<table") || content.includes("<td") || content.includes("<tr")) && (
          <div
            style={{
              background: "#fffbeb",
              borderBottom: "1px solid #fde68a",
              padding: "0.5rem 1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8rem",
              color: "#92400e",
            }}
          >
            <AlertTriangle size={14} />
            Table HTML detected — verify structure carefully before saving.
          </div>
        )}

        {/* Editor area */}
        <div style={{ display: "flex", flex: 1, overflow: "hidden", fontFamily: "monospace" }}>
          {/* Line numbers */}
          <div
            ref={lineRef}
            style={{
              width: "48px",
              background: "#f3f4f6",
              borderRight: "1px solid #e5e7eb",
              overflowY: "hidden",
              padding: "0.75rem 0",
              userSelect: "none",
              flexShrink: 0,
            }}
          >
            {Array.from({ length: lineCount }, (_, i) => (
              <div
                key={i}
                style={{
                  height: "21px",
                  lineHeight: "21px",
                  textAlign: "right",
                  paddingRight: "10px",
                  fontSize: "12px",
                  color: "#9ca3af",
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onScroll={handleScroll}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            style={{
              flex: 1,
              padding: "0.75rem",
              fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace",
              fontSize: "13px",
              lineHeight: "21px",
              border: "none",
              outline: "none",
              resize: "none",
              background: "#fff",
              color: "#1f2937",
              overflowY: "auto",
            }}
          />
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.875rem 1.25rem",
            borderTop: "1px solid #e5e7eb",
            background: "#fafafa",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
            {lineCount} lines · {content.length} chars
          </span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={onClose}
              style={{
                padding: "0.5rem 1rem",
                background: "#f3f4f6",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: "0.875rem",
                color: "#374151",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              style={{
                padding: "0.5rem 1.25rem",
                background: saving ? "#93c5fd" : "#2563eb",
                border: "none",
                borderRadius: "8px",
                cursor: saving ? "not-allowed" : "pointer",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "background 0.15s",
              }}
            >
              {saving && <Loader2 size={14} className="animate-spin" />}
              {saving ? "Saving…" : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   IMAGE MODAL
───────────────────────────────────────────── */

function ImageModal({
  slug,
  onClose,
  onSaved,
  addToast,
}: {
  slug: string;
  onClose: () => void;
  onSaved: () => void;
  addToast: (type: ToastType, message: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFile = (f: File) => {
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  };

  const handleUpdate = async () => {
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("coverImage", file);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/blog/${slug}/image`,
        { method: "PATCH", body: formData }
      );
      if (!res.ok) throw new Error();
      addToast("success", "Cover image updated.");
      onSaved();
      onClose();
    } catch {
      addToast("error", "Image upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "1rem",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "14px",
          width: "100%",
          maxWidth: "440px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.25rem",
            borderBottom: "1px solid #e5e7eb",
            background: "#fafafa",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ImageIcon size={18} color="#16a34a" />
            <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>Update Cover Image</span>
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", display: "flex" }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: "1.25rem" }}>
          {/* Drop zone */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById("img-upload-input")?.click()}
            style={{
              border: "2px dashed #d1d5db",
              borderRadius: "10px",
              padding: "2rem",
              textAlign: "center",
              cursor: "pointer",
              background: "#f9fafb",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2563eb")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#d1d5db")}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                style={{ maxHeight: "160px", maxWidth: "100%", borderRadius: "8px", objectFit: "contain" }}
              />
            ) : (
              <>
                <ImageIcon size={32} color="#9ca3af" style={{ margin: "0 auto 0.5rem" }} />
                <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: 0 }}>
                  Drag & drop or <span style={{ color: "#2563eb" }}>browse</span>
                </p>
                <p style={{ fontSize: "0.75rem", color: "#9ca3af", margin: "0.25rem 0 0" }}>
                  PNG, JPG, WEBP up to 10MB
                </p>
              </>
            )}
          </div>

          <input
            id="img-upload-input"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.5rem",
            padding: "0.875rem 1.25rem",
            borderTop: "1px solid #e5e7eb",
            background: "#fafafa",
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "0.5rem 1rem",
              background: "#f3f4f6",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: "0.875rem",
              color: "#374151",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={!file || uploading}
            style={{
              padding: "0.5rem 1.25rem",
              background: !file || uploading ? "#86efac" : "#16a34a",
              border: "none",
              borderRadius: "8px",
              cursor: !file || uploading ? "not-allowed" : "pointer",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            {uploading && <Loader2 size={14} className="animate-spin" />}
            {uploading ? "Uploading…" : "Update Image"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DELETE CONFIRM MODAL
   Prevents accidental deletes
───────────────────────────────────────────── */

function DeleteConfirmModal({
  title,
  onConfirm,
  onCancel,
  deleting,
}: {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  deleting: boolean;
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 60,
        padding: "1rem",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "14px",
          width: "100%",
          maxWidth: "400px",
          padding: "1.5rem",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "#fef2f2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <Trash2 size={20} color="#dc2626" />
        </div>
        <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: "0 0 0.5rem", color: "#111" }}>
          Delete Blog Post
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: "0 0 1.25rem", lineHeight: 1.6 }}>
          Are you sure you want to delete{" "}
          <strong style={{ color: "#111" }}>"{title}"</strong>? This action cannot be undone.
        </p>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
          <button
            onClick={onCancel}
            style={{
              padding: "0.5rem 1rem",
              background: "#f3f4f6",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: "0.875rem",
              color: "#374151",
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={deleting}
            style={{
              padding: "0.5rem 1.25rem",
              background: deleting ? "#fca5a5" : "#dc2626",
              border: "none",
              borderRadius: "8px",
              cursor: deleting ? "not-allowed" : "pointer",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            {deleting && <Loader2 size={14} className="animate-spin" />}
            {deleting ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGINATION
───────────────────────────────────────────── */

function Pagination({
  currentPage,
  totalPages,
  onChange,
}: {
  currentPage: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages: (number | "…")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("…");
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("…");
    pages.push(totalPages);
  }

  const btn = (
    label: React.ReactNode,
    page: number | null,
    active = false,
    disabled = false
  ) => (
    <button
      key={String(label)}
      onClick={() => page !== null && onChange(page)}
      disabled={disabled}
      style={{
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        border: active ? "none" : "1px solid #e5e7eb",
        background: active ? "#2563eb" : disabled ? "#f9fafb" : "#fff",
        color: active ? "#fff" : disabled ? "#d1d5db" : "#374151",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: active ? 600 : 400,
        fontSize: "0.875rem",
        transition: "all 0.15s",
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", justifyContent: "center", padding: "1.25rem 0 0" }}>
      {btn(<ChevronLeft size={16} />, currentPage - 1, false, currentPage === 1)}
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} style={{ width: 36, textAlign: "center", color: "#9ca3af" }}>
            …
          </span>
        ) : (
          btn(p, p, p === currentPage)
        )
      )}
      {btn(<ChevronRight size={16} />, currentPage + 1, false, currentPage === totalPages)}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */

export default function AdminBlogsPage() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);

  // HTML editor state
  const [htmlEditorSlug, setHtmlEditorSlug] = useState<string | null>(null);
  const [htmlEditorContent, setHtmlEditorContent] = useState<string>("");

  // Image modal state
  const [imageModalSlug, setImageModalSlug] = useState<string | null>(null);

  // Delete confirm state
  const [deleteTarget, setDeleteTarget] = useState<BlogPost | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Toast state
  const [toasts, setToasts] = useState<Toast[]>([]);

  /* ── Toast helpers ── */

  const addToast = useCallback((type: ToastType, message: string) => {
    const id = ++toastCounter;
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000);
  }, []);

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  /* ── Fetch ── */

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    setFetchError(false);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch {
      setFetchError(true);
      addToast("error", "Failed to load blogs. Check your connection.");
    } finally {
      setLoading(false);
    }
  }, [addToast]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  /* ── Search / filter (memoised Fuse to avoid re-init on every render) ── */

  const fuse = useMemo(
    () =>
      new Fuse(blogs, {
        keys: ["title", "author"],
        threshold: 0.3,
      }),
    [blogs]
  );

  const filteredBlogs = useMemo(
    () => (searchQuery.trim() === "" ? blogs : fuse.search(searchQuery).map((r) => r.item)),
    [blogs, fuse, searchQuery]
  );

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  // Clamp currentPage when filteredBlogs shrinks (edge case: search reduces pages)
  const safePage = Math.min(currentPage, Math.max(1, totalPages));

  const paginatedBlogs = filteredBlogs.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  /* ── Actions ── */

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/blog/${deleteTarget.slug}`,
        { method: "DELETE" }
      );
      if (!res.ok) throw new Error();
      addToast("success", `"${deleteTarget.title}" deleted.`);
      setDeleteTarget(null);
      fetchBlogs();
    } catch {
      addToast("error", "Delete failed. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  const handleEdit = (slug: string) => {
    const blog = blogs.find((b) => b.slug === slug);
    if (blog) {
      setEditingBlog(blog);
      setShowAddModal(true);
    }
  };

  const openHtmlEditor = (blog: BlogPost) => {
    // safeFormatHtml never throws — handles broken tables, malformed HTML
    const formatted = safeFormatHtml(blog.content);
    setHtmlEditorContent(formatted);
    setHtmlEditorSlug(blog.slug);
  };

  /* ─────────────────────────────────────────────
     RENDER
  ───────────────────────────────────────────── */

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin { animation: spin 0.8s linear infinite; }
        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 10px;
          border-radius: 7px;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          transition: background 0.12s, color 0.12s;
        }
        .action-btn:hover { filter: brightness(0.94); }
        .action-btn-edit { color: #2563eb; background: #eff6ff; }
        .action-btn-delete { color: #dc2626; background: #fef2f2; }
        .action-btn-html { color: #d97706; background: #fffbeb; }
        .action-btn-image { color: #16a34a; background: #f0fdf4; }
        .row-hover:hover { background: #f8fafc !important; }
      `}</style>

      <div
        style={{
          padding: "1.5rem",
          minHeight: "100vh",
          background: "#f1f5f9",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: "#0f172a" }}>
              Blog Posts
            </h1>
            <p style={{ fontSize: "0.875rem", color: "#64748b", margin: "0.25rem 0 0" }}>
              {loading ? "Loading…" : `${filteredBlogs.length} post${filteredBlogs.length !== 1 ? "s" : ""}`}
            </p>
          </div>
          <button
            onClick={() => {
              setEditingBlog(null);
              setShowAddModal(true);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "0.6rem 1.25rem",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.01em",
              boxShadow: "0 1px 3px rgba(37,99,235,0.3)",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1d4ed8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563eb")}
          >
            + New Post
          </button>
        </div>

        {/* ── Search bar ── */}
        <div style={{ position: "relative", marginBottom: "1.25rem" }}>
          <Search
            size={16}
            color="#9ca3af"
            style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }}
          />
          <input
            type="text"
            placeholder="Search by title or author…"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            style={{
              width: "100%",
              padding: "0.65rem 1rem 0.65rem 2.5rem",
              border: "1px solid #e2e8f0",
              borderRadius: "10px",
              fontSize: "0.875rem",
              background: "#fff",
              outline: "none",
              boxSizing: "border-box",
              color: "#0f172a",
              transition: "border-color 0.15s, box-shadow 0.15s",
            }}
            onFocus={(e) => {
              (e.target as HTMLElement).style.borderColor = "#2563eb";
              (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
            }}
            onBlur={(e) => {
              (e.target as HTMLElement).style.borderColor = "#e2e8f0";
              (e.target as HTMLElement).style.boxShadow = "none";
            }}
          />
          {searchQuery && (
            <button
              onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#9ca3af",
                display: "flex",
                padding: "2px",
              }}
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* ── Loading skeleton ── */}
        {loading && (
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "2rem",
              textAlign: "center",
              color: "#64748b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <Loader2 size={20} className="animate-spin" color="#2563eb" />
            Loading blog posts…
          </div>
        )}

        {/* ── Fetch error ── */}
        {!loading && fetchError && (
          <div
            style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "12px",
              padding: "1.5rem",
              textAlign: "center",
              color: "#dc2626",
            }}
          >
            <XCircle size={32} style={{ margin: "0 auto 0.5rem" }} />
            <p style={{ margin: 0, fontWeight: 600 }}>Failed to load posts</p>
            <p style={{ margin: "0.25rem 0 1rem", fontSize: "0.875rem", opacity: 0.8 }}>
              Please check your connection and try again.
            </p>
            <button
              onClick={fetchBlogs}
              style={{
                padding: "0.5rem 1rem",
                background: "#dc2626",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.875rem",
              }}
            >
              Retry
            </button>
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && !fetchError && filteredBlogs.length === 0 && (
          <div
            style={{
              background: "#fff",
              borderRadius: "14px",
              padding: "3rem 1rem",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem",
              }}
            >
              <FileText size={26} color="#94a3b8" />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: "0 0 0.4rem", color: "#0f172a" }}>
              {searchQuery ? "No results found" : "No blog posts yet"}
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#64748b", margin: "0 0 1.25rem" }}>
              {searchQuery
                ? `No posts match "${searchQuery}". Try a different search.`
                : 'Click "New Post" to publish your first article.'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  padding: "0.5rem 1rem",
                  background: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: "#374151",
                }}
              >
                Clear search
              </button>
            )}
          </div>
        )}

        {/* ── Desktop table ── */}
        {!loading && !fetchError && filteredBlogs.length > 0 && (
          <>
            <div
              className="hidden-mobile"
              style={{
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                overflow: "hidden",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.875rem",
                }}
              >
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                    <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600, color: "#475569", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Title
                    </th>
                    <th style={{ padding: "0.875rem 1rem", textAlign: "left", fontWeight: 600, color: "#475569", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Author
                    </th>
                    <th style={{ padding: "0.875rem 1rem", textAlign: "center", fontWeight: 600, color: "#475569", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Published
                    </th>
                    <th style={{ padding: "0.875rem 1rem", textAlign: "center", fontWeight: 600, color: "#475569", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedBlogs.map((blog, idx) => (
                    <tr
                      key={blog._id}
                      className="row-hover"
                      style={{
                        borderTop: idx > 0 ? "1px solid #f1f5f9" : undefined,
                        background: "#fff",
                        transition: "background 0.12s",
                      }}
                    >
                      <td style={{ padding: "0.875rem 1rem", fontWeight: 600, color: "#0f172a", maxWidth: "320px" }}>
                        <span
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {blog.title || <span style={{ color: "#94a3b8" }}>Untitled</span>}
                        </span>
                      </td>
                      <td style={{ padding: "0.875rem 1rem", color: "#475569" }}>
                        {blog.author || "—"}
                      </td>
                      <td style={{ padding: "0.875rem 1rem", textAlign: "center", color: "#64748b", whiteSpace: "nowrap" }}>
                        {blog.datePublished
                          ? new Date(blog.datePublished).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                          : "—"}
                      </td>
                      <td style={{ padding: "0.875rem 1rem" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.35rem" }}>
                          <button
                            className="action-btn action-btn-edit"
                            onClick={() => handleEdit(blog.slug)}
                            title="Edit post"
                          >
                            <Edit size={14} />
                            Edit
                          </button>
                          <button
                            className="action-btn action-btn-html"
                            onClick={() => openHtmlEditor(blog)}
                            title="Edit HTML content"
                          >
                            <Code size={14} />
                            HTML
                          </button>
                          <button
                            className="action-btn action-btn-image"
                            onClick={() => setImageModalSlug(blog.slug)}
                            title="Update cover image"
                          >
                            <ImageIcon size={14} />
                            Image
                          </button>
                          <button
                            className="action-btn action-btn-delete"
                            onClick={() => setDeleteTarget(blog)}
                            title="Delete post"
                          >
                            <Trash2 size={14} />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Mobile cards ── */}
            <div
              style={{ display: "none" }}
              className="mobile-cards"
            >
              {paginatedBlogs.map((blog) => (
                <div
                  key={blog._id}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    marginBottom: "0.75rem",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  }}
                >
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", margin: "0 0 0.25rem", color: "#0f172a" }}>
                    {blog.title || "Untitled"}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 0.125rem" }}>
                    {blog.author || "Unknown author"}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#94a3b8", margin: "0 0 0.75rem" }}>
                    {blog.datePublished
                      ? new Date(blog.datePublished).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
                      : "—"}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", borderTop: "1px solid #f1f5f9", paddingTop: "0.75rem" }}>
                    <button className="action-btn action-btn-edit" onClick={() => handleEdit(blog.slug)}>
                      <Edit size={13} /> Edit
                    </button>
                    <button className="action-btn action-btn-html" onClick={() => openHtmlEditor(blog)}>
                      <Code size={13} /> HTML
                    </button>
                    <button className="action-btn action-btn-image" onClick={() => setImageModalSlug(blog.slug)}>
                      <ImageIcon size={13} /> Image
                    </button>
                    <button className="action-btn action-btn-delete" onClick={() => setDeleteTarget(blog)}>
                      <Trash2 size={13} /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive style override */}
            <style>{`
              @media (max-width: 767px) {
                .hidden-mobile { display: none !important; }
                .mobile-cards { display: block !important; }
              }
            `}</style>

            {/* Pagination */}
            <Pagination
              currentPage={safePage}
              totalPages={totalPages}
              onChange={setCurrentPage}
            />
          </>
        )}
      </div>

      {/* ── Modals ── */}

      {showAddModal && (
        <AddBlog
          onClose={() => setShowAddModal(false)}
          onSuccess={() => {
            fetchBlogs();
            addToast("success", editingBlog ? "Post updated." : "Post created.");
          }}
          existingBlog={editingBlog}
        />
      )}

      {htmlEditorSlug && (
        <HtmlEditorModal
          slug={htmlEditorSlug}
          initialContent={htmlEditorContent}
          onClose={() => setHtmlEditorSlug(null)}
          onSaved={fetchBlogs}
          addToast={addToast}
        />
      )}

      {imageModalSlug && (
        <ImageModal
          slug={imageModalSlug}
          onClose={() => setImageModalSlug(null)}
          onSaved={fetchBlogs}
          addToast={addToast}
        />
      )}

      {deleteTarget && (
        <DeleteConfirmModal
          title={deleteTarget.title}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
          deleting={deleting}
        />
      )}

      <ToastContainer toasts={toasts} dismiss={dismissToast} />
    </>
  );
}