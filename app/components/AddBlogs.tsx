"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  lazy,
  Suspense,
} from "react";
import dynamic from "next/dynamic";
import {
  X,
  Loader2,
  ImageIcon,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle,
  Code2,
  FileText,
  HelpCircle,
  Upload,
  Eye,
  EyeOff,
} from "lucide-react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags?: string;
  coverImage?: string;
  schemaMarkup?: string[];
  faqs?: { question: string; answer: string }[];
}

interface FormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string;
  coverImage: File | null;
  schemaMarkup: string[];
  faqs: { question: string; answer: string }[];
}

interface FieldError {
  [key: string]: string;
}

/* ─────────────────────────────────────────────
   LAZY LOAD TIPTAP — zero bundle cost until modal opens
   TipTap is MIT licensed and completely free.
   We lazy-import the entire editor bundle so it
   doesn't bloat the initial page load.
───────────────────────────────────────────── */

// Dynamic import of the editor wrapper — only loads when AddBlog mounts
const RichEditor = dynamic(() => import("../components/Editor/RichEditor"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "320px",
        background: "#f8fafc",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        color: "#94a3b8",
        fontSize: "0.875rem",
      }}
    >
      <Loader2 size={16} style={{ animation: "spin 0.8s linear infinite" }} />
      Loading editor…
    </div>
  ),
});

/* ─────────────────────────────────────────────
   FORM VALIDATION
───────────────────────────────────────────── */

function validate(data: FormData, isEdit: boolean): FieldError {
  const errors: FieldError = {};
  if (!data.title.trim()) errors.title = "Title is required.";
  if (!data.slug.trim()) errors.slug = "Slug is required.";
  else if (!/^[a-z0-9-]+$/.test(data.slug))
    errors.slug = "Slug must be lowercase letters, numbers and hyphens only.";
  if (!data.excerpt.trim()) errors.excerpt = "Meta description is required.";
  else if (data.excerpt.length > 160)
    errors.excerpt = `Meta description is ${data.excerpt.length} chars — keep it under 160 for SEO.`;
  if (!data.author.trim()) errors.author = "Author name is required.";
  if (!data.content || data.content === "<p></p>" || data.content === "")
    errors.content = "Blog content cannot be empty.";
  if (!isEdit && !data.coverImage) errors.coverImage = "Cover image is required for new posts.";
  return errors;
}

/* ─────────────────────────────────────────────
   INLINE FIELD COMPONENT
───────────────────────────────────────────── */

function Field({
  label,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
      <label
        style={{
          fontSize: "0.78rem",
          fontWeight: 600,
          color: "#374151",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        {label}
        {required && <span style={{ color: "#ef4444" }}>*</span>}
      </label>
      {children}
      {hint && !error && (
        <p style={{ fontSize: "0.75rem", color: "#94a3b8", margin: 0 }}>{hint}</p>
      )}
      {error && (
        <p
          style={{
            fontSize: "0.75rem",
            color: "#dc2626",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

const inputStyle = (hasError?: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "0.6rem 0.875rem",
  border: `1px solid ${hasError ? "#fca5a5" : "#e2e8f0"}`,
  borderRadius: "8px",
  fontSize: "0.9rem",
  color: "#0f172a",
  background: hasError ? "#fef2f2" : "#fff",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  transition: "border-color 0.15s, box-shadow 0.15s",
});

/* ─────────────────────────────────────────────
   SECTION WRAPPER with collapsible
───────────────────────────────────────────── */

function Section({
  icon,
  title,
  badge,
  children,
  defaultOpen = true,
}: {
  icon: React.ReactNode;
  title: string;
  badge?: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          padding: "0.875rem 1rem",
          background: "#f8fafc",
          border: "none",
          borderBottom: open ? "1px solid #e2e8f0" : "none",
          cursor: "pointer",
          textAlign: "left",
          transition: "background 0.12s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "#f1f5f9")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "#f8fafc")
        }
      >
        <span style={{ color: "#64748b", display: "flex" }}>{icon}</span>
        <span
          style={{ fontWeight: 600, fontSize: "0.875rem", color: "#0f172a", flex: 1 }}
        >
          {title}
        </span>
        {badge !== undefined && badge > 0 && (
          <span
            style={{
              background: "#2563eb",
              color: "#fff",
              fontSize: "0.7rem",
              fontWeight: 700,
              padding: "1px 7px",
              borderRadius: "999px",
            }}
          >
            {badge}
          </span>
        )}
        <span style={{ color: "#94a3b8", display: "flex" }}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>
      {open && <div style={{ padding: "1rem" }}>{children}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────
   COVER IMAGE UPLOADER
───────────────────────────────────────────── */

function CoverImageUploader({
  file,
  existingUrl,
  onChange,
  error,
}: {
  file: File | null;
  existingUrl?: string;
  onChange: (f: File | null) => void;
  error?: string;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreview(null);
  }, [file]);

  const displaySrc = preview || existingUrl || null;

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) onChange(f);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          border: `2px dashed ${error ? "#fca5a5" : "#cbd5e1"}`,
          borderRadius: "10px",
          minHeight: "140px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          overflow: "hidden",
          position: "relative",
          background: displaySrc ? "#000" : "#f8fafc",
          transition: "border-color 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "#2563eb";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = error
            ? "#fca5a5"
            : "#cbd5e1";
        }}
      >
        {displaySrc ? (
          <>
            <img
              src={displaySrc}
              alt="Cover preview"
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                opacity: 0.85,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.35)",
                opacity: 0,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0")
              }
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Upload size={16} /> Change image
              </span>
            </div>
          </>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              color: "#94a3b8",
            }}
          >
            <ImageIcon
              size={28}
              style={{ margin: "0 auto 0.5rem", display: "block" }}
            />
            <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 500 }}>
              Drag & drop or{" "}
              <span style={{ color: "#2563eb" }}>browse</span>
            </p>
            <p style={{ margin: "0.25rem 0 0", fontSize: "0.75rem" }}>
              PNG, JPG, WEBP — recommended 1200×630
            </p>
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
      {displaySrc && (
        <button
          type="button"
          onClick={() => {
            onChange(null);
            if (inputRef.current) inputRef.current.value = "";
          }}
          style={{
            alignSelf: "flex-start",
            fontSize: "0.75rem",
            color: "#dc2626",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <X size={12} /> Remove image
        </button>
      )}
      {error && (
        <p
          style={{
            fontSize: "0.75rem",
            color: "#dc2626",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

const AddBlog = ({
  onClose,
  onSuccess,
  existingBlog = null,
}: {
  onClose: () => void;
  onSuccess: () => void;
  existingBlog?: BlogPost | null;
}) => {
  const isEdit = !!existingBlog;

  const defaultForm = (): FormData => ({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    tags: "",
    coverImage: null,
    schemaMarkup: [""],
    faqs: [{ question: "", answer: "" }],
  });

  const [formData, setFormData] = useState<FormData>(defaultForm);
  const [errors, setErrors] = useState<FieldError>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");

  /* ── Populate from existingBlog ── */

  useEffect(() => {
    if (existingBlog) {
      setFormData({
        title: existingBlog.title ?? "",
        slug: existingBlog.slug ?? "",
        excerpt: existingBlog.excerpt ?? "",
        content: existingBlog.content ?? "",
        author: existingBlog.author ?? "",
        tags: existingBlog.tags ?? "",
        coverImage: null,
        schemaMarkup:
          existingBlog.schemaMarkup?.length
            ? existingBlog.schemaMarkup
            : [""],
        faqs:
          existingBlog.faqs?.length
            ? existingBlog.faqs
            : [{ question: "", answer: "" }],
      });
      setSlugManuallyEdited(true); // don't auto-rewrite slug in edit mode
    } else {
      setFormData(defaultForm());
      setSlugManuallyEdited(false);
    }
    setErrors({});
    setSubmitResult(null);
  }, [existingBlog]);

  /* ── Handlers ── */

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    // Clear field error on change
    if (errors[key]) setErrors((prev) => { const n = { ...prev }; delete n[key]; return n; });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => {
      const updates: Partial<FormData> = { title: value };
      if (!slugManuallyEdited) {
        updates.slug = value
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .trim()
          .replace(/\s+/g, "-");
      }
      return { ...prev, ...updates };
    });
    if (errors.title) setErrors((p) => { const n = { ...p }; delete n.title; return n; });
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlugManuallyEdited(true);
    set("slug", e.target.value);
  };

  /* ── Schema helpers ── */

  const addSchema = () =>
    set("schemaMarkup", [...formData.schemaMarkup, ""]);

  const removeSchema = (idx: number) =>
    set(
      "schemaMarkup",
      formData.schemaMarkup.filter((_, i) => i !== idx)
    );

  const updateSchema = (idx: number, val: string) => {
    const updated = [...formData.schemaMarkup];
    updated[idx] = val;
    set("schemaMarkup", updated);
  };

  /* ── FAQ helpers ── */

  const addFaq = () =>
    set("faqs", [...formData.faqs, { question: "", answer: "" }]);

  const removeFaq = (idx: number) =>
    set(
      "faqs",
      formData.faqs.filter((_, i) => i !== idx)
    );

  const updateFaq = (
    idx: number,
    field: "question" | "answer",
    val: string
  ) => {
    const updated = formData.faqs.map((f, i) =>
      i === idx ? { ...f, [field]: val } : f
    );
    set("faqs", updated);
  };

  /* ── Submit ── */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    const errs = validate(formData, isEdit);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const firstKey = Object.keys(errs)[0];
      document.getElementById(`field-${firstKey}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    setSubmitting(true);
    try {
      const body = new FormData();
      body.append("title", formData.title.trim());
      body.append("slug", formData.slug.trim());
      body.append("excerpt", formData.excerpt.trim());
      body.append("author", formData.author.trim());
      body.append("tags", formData.tags);

      if (formData.coverImage) body.append("coverImage", formData.coverImage);

      // Filter empty schema entries before sending
      formData.schemaMarkup
        .filter((s) => s.trim())
        .forEach((s) => body.append("schemaMarkup", s));

      body.append(
        "faqs",
        JSON.stringify(formData.faqs.filter((f) => f.question.trim()))
      );

      // Preserve formatting — don't strip &nbsp; indiscriminately
      // Only remove trailing whitespace-only paragraphs
      const cleanContent = formData.content
        .replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")
        .trim();
      body.append("content", cleanContent);

      const url = isEdit
        ? `${process.env.NEXT_PUBLIC_API_BASE}/blog/${existingBlog!.slug}`
        : `${process.env.NEXT_PUBLIC_API_BASE}/blog/add`;

      const res = await fetch(url, { method: isEdit ? "PUT" : "POST", body });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setSubmitResult({
          type: "success",
          message: isEdit
            ? "Post updated successfully."
            : "Post published successfully.",
        });
        setTimeout(() => {
          onSuccess();
          onClose();
        }, 900);
      } else {
        setSubmitResult({
          type: "error",
          message: data?.error || "Something went wrong. Please try again.",
        });
      }
    } catch (err:any) {
      setSubmitResult({
        type: "error",
        message: err.message || "Network error — check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  /* ── Word count ── */
  const wordCount = useMemo(() => {
    const text = formData.content.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ");
    const words = text.trim().split(/\s+/).filter(Boolean);
    return words.length;
  }, [formData.content]);

  /* ─────────────────────────────────────────────
     RENDER
  ───────────────────────────────────────────── */

  return (
    <>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .addblog-input:focus {
          border-color: #2563eb !important;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1) !important;
          outline: none !important;
        }
        .addblog-textarea:focus {
          border-color: #2563eb !important;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1) !important;
          outline: none !important;
        }
        .tab-btn { transition: all 0.15s; }
        .tab-btn:hover { background: #f1f5f9 !important; }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          zIndex: 50,
          padding: "1rem",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            background: "#f8fafc",
            width: "100%",
            maxWidth: "780px",
            borderRadius: "16px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
            overflow: "hidden",
            marginTop: "1rem",
            marginBottom: "1rem",
            animation: "fadeSlide 0.22s ease",
          }}
        >
          {/* ── Modal Header ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 1.25rem",
              background: "#fff",
              borderBottom: "1px solid #e2e8f0",
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: isEdit ? "#eff6ff" : "#f0fdf4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FileText size={16} color={isEdit ? "#2563eb" : "#16a34a"} />
              </div>
              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    lineHeight: 1.2,
                  }}
                >
                  {isEdit ? "Edit Post" : "New Blog Post"}
                </h2>
                {isEdit && (
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.72rem",
                      color: "#64748b",
                    }}
                  >
                    /{existingBlog?.slug}
                  </p>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: "#f1f5f9",
                border: "none",
                borderRadius: "8px",
                padding: "6px",
                cursor: "pointer",
                color: "#64748b",
                display: "flex",
                transition: "background 0.12s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#e2e8f0")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#f1f5f9")
              }
            >
              <X size={18} />
            </button>
          </div>

          {/* ── Form ── */}
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem", padding: "1.25rem" }}
          >
            {/* ── BASIC INFO ── */}
            <Section icon={<FileText size={16} />} title="Basic Information" defaultOpen>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>

                {/* Title */}
                <Field label="Title" required error={errors.title}>
                  <input
                    id="field-title"
                    type="text"
                    placeholder="Enter post title…"
                    value={formData.title}
                    onChange={handleTitleChange}
                    className="addblog-input"
                    style={inputStyle(!!errors.title)}
                  />
                </Field>

                {/* Slug */}
                <Field
                  label="Slug"
                  required
                  error={errors.slug}
                  hint="Auto-generated from title. Edit carefully — changing it breaks existing links."
                >
                  <div style={{ position: "relative" }}>
                    <span
                      style={{
                        position: "absolute",
                        left: "0.875rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "0.85rem",
                        color: "#94a3b8",
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      /
                    </span>
                    <input
                      id="field-slug"
                      type="text"
                      placeholder="my-post-slug"
                      value={formData.slug}
                      onChange={handleSlugChange}
                      className="addblog-input"
                      style={{ ...inputStyle(!!errors.slug), paddingLeft: "1.5rem" }}
                    />
                  </div>
                </Field>

                {/* Excerpt / Meta Description */}
                <Field
                  label="Meta Description"
                  required
                  error={errors.excerpt}
                  hint={`${formData.excerpt.length}/160 characters`}
                >
                  <input
                    id="field-excerpt"
                    type="text"
                    placeholder="Brief description for search engines (max 160 chars)…"
                    value={formData.excerpt}
                    onChange={(e) => set("excerpt", e.target.value)}
                    maxLength={165}
                    className="addblog-input"
                    style={inputStyle(!!errors.excerpt)}
                  />
                </Field>

                {/* Author + Tags in a row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <Field label="Author" required error={errors.author}>
                    <input
                      id="field-author"
                      type="text"
                      placeholder="Author name…"
                      value={formData.author}
                      onChange={(e) => set("author", e.target.value)}
                      className="addblog-input"
                      style={inputStyle(!!errors.author)}
                    />
                  </Field>
                  <Field label="Tags" hint="Comma-separated">
                    <input
                      type="text"
                      placeholder="seo, nextjs, react…"
                      value={formData.tags}
                      onChange={(e) => set("tags", e.target.value)}
                      className="addblog-input"
                      style={inputStyle()}
                    />
                  </Field>
                </div>
              </div>
            </Section>

            {/* ── COVER IMAGE ── */}
            <Section
              icon={<ImageIcon size={16} />}
              title="Cover Image"
              defaultOpen
            >
              <CoverImageUploader
                file={formData.coverImage}
                existingUrl={existingBlog?.coverImage}
                onChange={(f) => set("coverImage", f)}
                error={errors.coverImage}
              />
            </Section>

            {/* ── CONTENT EDITOR ── */}
            <Section icon={<FileText size={16} />} title="Blog Content" defaultOpen>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {errors.content && (
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#dc2626",
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <AlertCircle size={12} /> {errors.content}
                  </p>
                )}

                {/* Rich Editor — lazy loaded */}
                <div id="field-content">
                  <RichEditor
                    content={formData.content}
                    onChange={(val) => {
                      set("content", val);
                    }}
                    hasError={!!errors.content}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "0.72rem",
                    color: "#94a3b8",
                  }}
                >
                  {wordCount} word{wordCount !== 1 ? "s" : ""}
                </div>
              </div>
            </Section>

            {/* ── SCHEMA MARKUP ── */}
            <Section
              icon={<Code2 size={16} />}
              title="Schema Markup (JSON-LD)"
              badge={formData.schemaMarkup.filter((s) => s.trim()).length}
              defaultOpen={false}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {formData.schemaMarkup.map((markup, idx) => (
                  <div key={idx} style={{ position: "relative" }}>
                    <textarea
                      value={markup}
                      onChange={(e) => updateSchema(idx, e.target.value)}
                      placeholder={`{ "@context": "https://schema.org", … }`}
                      rows={4}
                      className="addblog-textarea"
                      style={{
                        ...inputStyle(),
                        fontFamily: "ui-monospace, 'Cascadia Code', monospace",
                        fontSize: "0.78rem",
                        resize: "vertical",
                        paddingRight: "2.5rem",
                      }}
                    />
                    {formData.schemaMarkup.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSchema(idx)}
                        style={{
                          position: "absolute",
                          top: "8px",
                          right: "8px",
                          background: "#fef2f2",
                          border: "none",
                          borderRadius: "6px",
                          padding: "4px",
                          cursor: "pointer",
                          color: "#dc2626",
                          display: "flex",
                        }}
                        title="Remove this schema"
                      >
                        <X size={13} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSchema}
                  style={{
                    alignSelf: "flex-start",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "0.4rem 0.875rem",
                    background: "#f0fdf4",
                    border: "1px solid #86efac",
                    borderRadius: "7px",
                    color: "#16a34a",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <Plus size={13} /> Add Schema Block
                </button>
              </div>
            </Section>

            {/* ── FAQS ── */}
            <Section
              icon={<HelpCircle size={16} />}
              title="FAQs"
              badge={formData.faqs.filter((f) => f.question.trim()).length}
              defaultOpen={false}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {formData.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "10px",
                      padding: "0.875rem",
                      background: "#f8fafc",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "#94a3b8",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        FAQ {idx + 1}
                      </span>
                      {formData.faqs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeFaq(idx)}
                          style={{
                            background: "#fef2f2",
                            border: "none",
                            borderRadius: "6px",
                            padding: "4px 8px",
                            cursor: "pointer",
                            color: "#dc2626",
                            fontSize: "0.75rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                            fontWeight: 500,
                          }}
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="Question"
                      value={faq.question}
                      onChange={(e) => updateFaq(idx, "question", e.target.value)}
                      className="addblog-input"
                      style={{ ...inputStyle(), marginBottom: "0.5rem" }}
                    />
                    <textarea
                      placeholder="Answer"
                      value={faq.answer}
                      onChange={(e) => updateFaq(idx, "answer", e.target.value)}
                      rows={3}
                      className="addblog-textarea"
                      style={{ ...inputStyle(), resize: "vertical" }}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFaq}
                  style={{
                    alignSelf: "flex-start",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "0.4rem 0.875rem",
                    background: "#eff6ff",
                    border: "1px solid #93c5fd",
                    borderRadius: "7px",
                    color: "#2563eb",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <Plus size={13} /> Add FAQ
                </button>
              </div>
            </Section>

            {/* ── Submit Result Banner ── */}
            {submitResult && (
              <div
                style={{
                  padding: "0.875rem 1rem",
                  borderRadius: "10px",
                  background:
                    submitResult.type === "success" ? "#f0fdf4" : "#fef2f2",
                  border: `1px solid ${
                    submitResult.type === "success" ? "#86efac" : "#fca5a5"
                  }`,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color:
                    submitResult.type === "success" ? "#15803d" : "#dc2626",
                  fontWeight: 500,
                }}
              >
                {submitResult.type === "success" ? (
                  <CheckCircle size={16} />
                ) : (
                  <AlertCircle size={16} />
                )}
                {submitResult.message}
              </div>
            )}

            {/* ── Footer Actions ── */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "0.6rem",
                paddingTop: "0.25rem",
              }}
            >
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: "0.6rem 1.25rem",
                  background: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                  borderRadius: "9px",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color: "#374151",
                  transition: "background 0.12s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#e2e8f0")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#f1f5f9")
                }
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  padding: "0.6rem 1.5rem",
                  background: submitting ? "#93c5fd" : "#2563eb",
                  border: "none",
                  borderRadius: "9px",
                  cursor: submitting ? "not-allowed" : "pointer",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "background 0.15s",
                  letterSpacing: "0.01em",
                }}
              >
                {submitting && (
                  <Loader2
                    size={15}
                    style={{ animation: "spin 0.8s linear infinite" }}
                  />
                )}
                {submitting
                  ? isEdit
                    ? "Saving…"
                    : "Publishing…"
                  : isEdit
                  ? "Save Changes"
                  : "Publish Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;