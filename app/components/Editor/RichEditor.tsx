"use client";

/**
 * RichEditor.tsx — Production CMS Rich Text Editor
 *
 * New features added:
 *  ✅ Image from URL (popup modal with preview + alt text)
 *  ✅ Resizable images (drag handle, no paid extensions)
 *  ✅ Font family selector
 *  ✅ Font size selector
 *  ✅ Text color picker
 *  ✅ Code view (raw HTML ↔ rich editor, two-way sync)
 *  ✅ Preview mode (clean read-only render)
 *
 * Install additions needed:
 *   npm install @tiptap/extension-text-style @tiptap/extension-font-family
 *               @tiptap/extension-color @tiptap/extension-highlight
 */

import { useCallback, useEffect, useRef, useState } from "react";
import {
  useEditor,
  EditorContent,
  type Editor,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Image as TiptapImageBase } from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { TextStyle } from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  List, ListOrdered, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Link as LinkIcon, ImageIcon, Code, Quote, Undo, Redo, Loader2,
  Table as TableIcon, Minus, Link2, Code2, Eye,
  Highlighter, Palette, X,
} from "lucide-react";

/* ══════════════════════════════════════════════════
   1.  FONT-SIZE EXTENSION  (built on TextStyle, free)
══════════════════════════════════════════════════ */

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize: {
      setFontSize: (size: string) => ReturnType;
      unsetFontSize: () => ReturnType;
    };
  }
}

const FontSizeExtension = TextStyle.extend({
  name: "textStyle", // keeps same mark name, just adds fontSize attr
  addAttributes() {
    return {
      ...this.parent?.(),
      fontSize: {
        default: null,
        parseHTML: (el) => el.style.fontSize?.replace("px", "") || null,
        renderHTML: (attrs) =>
          attrs.fontSize ? { style: `font-size: ${attrs.fontSize}px` } : {},
      },
    };
  },
  addCommands() {
    return {
      ...this.parent?.(),
      setFontSize:
        (size: string) =>
          ({ chain }: any) =>
            chain().setMark("textStyle", { fontSize: size }).run(),
      unsetFontSize:
        () =>
          ({ chain }: any) =>
            chain().setMark("textStyle", { fontSize: null }).run(),
    };
  },
});

/* ══════════════════════════════════════════════════
   2.  RESIZABLE IMAGE NODE VIEW
       — Custom ReactNodeViewRenderer, no paid pkg
══════════════════════════════════════════════════ */

function ResizableImageView({ node, updateAttributes, selected }: any) {
  const imgRef = useRef<HTMLImageElement>(null);
  const startX = useRef(0);
  const startW = useRef(0);
  const [dragging, setDragging] = useState(false);

  const w = node.attrs.width || "100%";

  const beginResize = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    startX.current = e.clientX;
    startW.current = imgRef.current?.offsetWidth ?? 400;
    setDragging(true);

    const onMove = (ev: MouseEvent) => {
      const next = Math.max(80, startW.current + (ev.clientX - startX.current));
      setTimeout(() => updateAttributes({ width: `${next}px` }), 0);
    };
    const onUp = () => {
      setDragging(false);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <NodeViewWrapper
      as="span"
      style={{
        display: "inline-block",
        position: "relative",
        maxWidth: "100%",
        lineHeight: 0,
        userSelect: "none",
      }}
    >
      <img
        ref={imgRef}
        src={node.attrs.src}
        alt={node.attrs.alt ?? ""}
        title={node.attrs.title ?? ""}
        style={{
          display: "block",
          width: w,
          maxWidth: "100%",
          height: "auto",
          borderRadius: "6px",
          outline: selected ? "2px solid #2563eb" : "none",
          outlineOffset: "2px",
          pointerEvents: dragging ? "none" : "auto",
          cursor: "default",
        }}
        draggable={false}
      />

      {/* Right-edge resize handle */}
      {selected && (
        <span
          onMouseDown={beginResize}
          title="Drag to resize"
          style={{
            position: "absolute",
            right: -7,
            top: "50%",
            transform: "translateY(-50%)",
            width: 14,
            height: 44,
            background: "#2563eb",
            borderRadius: 4,
            cursor: "ew-resize",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            boxShadow: "0 2px 8px rgba(37,99,235,0.35)",
            zIndex: 10,
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{ width: 2, height: 2, borderRadius: "50%", background: "#fff", display: "block" }} />
          ))}
        </span>
      )}

      {/* Bottom-right corner handle */}
      {selected && (
        <span
          onMouseDown={beginResize}
          style={{
            position: "absolute",
            right: -5,
            bottom: -5,
            width: 14,
            height: 14,
            background: "#2563eb",
            borderRadius: 3,
            cursor: "nwse-resize",
            zIndex: 10,
            boxShadow: "0 1px 4px rgba(37,99,235,0.3)",
          }}
        />
      )}

      {/* Width label */}
      {selected && (
        <span
          style={{
            position: "absolute",
            bottom: 6,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            fontSize: 11,
            fontFamily: "monospace",
            padding: "1px 7px",
            borderRadius: 4,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {typeof w === "string" && w.includes("px")
            ? `${parseInt(w)}px`
            : "100%"}
        </span>
      )}
    </NodeViewWrapper>
  );
}

// Extend TipTap's Image with width attribute + ResizableImageView
const ResizableImage = TiptapImageBase.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: "100%",
        parseHTML: el =>
          el.style.width || el.getAttribute("width") || "100%",
        renderHTML: attrs => ({
          style: `width:${attrs.width};max-width:100%`,
        }),
      },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageView);
  },
});

/* ══════════════════════════════════════════════════
   3.  UPLOAD HELPER
══════════════════════════════════════════════════ */

async function uploadEditorImage(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("image", file);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/blog/upload-editor-image`,
    { method: "POST", body: fd }
  );
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e?.message || "Upload failed");
  }
  const d = await res.json();
  return d.image.url as string;
}

/* ══════════════════════════════════════════════════
   3b. HTML PRETTY-PRINTER
    TipTap's getHTML() returns minified single-line HTML.
    This formats it with indentation so the code view
    is human-readable. Never throws — returns raw on error.
══════════════════════════════════════════════════ */

function prettyHtml(html: string): string {
  if (!html || typeof html !== "string") return "";
  try {
    // Self-closing / void elements that should NOT indent
    const voidTags = new Set([
      "area", "base", "br", "col", "embed", "hr", "img", "input",
      "link", "meta", "param", "source", "track", "wbr",
    ]);

    const INDENT = "  ";
    let depth = 0;
    let out = "";

    // Tokenise into tags and text nodes
    const tokens = html
      .replace(/>\s+</g, "><")   // strip whitespace between tags first
      .split(/(<[^>]+>)/);       // split on any tag

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!token) continue;

      const isTag = token.startsWith("<");
      const isClose = isTag && token.startsWith("</");
      const isSelfClose = isTag && (token.endsWith("/>") || voidTags.has(token.replace(/[<\s\/>].*/, "").toLowerCase()));
      const isOpen = isTag && !isClose && !isSelfClose;

      if (isClose) depth = Math.max(0, depth - 1);

      if (isTag) {
        out += "\n" + INDENT.repeat(depth) + token;
      } else {
        // Text node — keep inline with surrounding tags
        const clean = token.trim();
        if (clean) out += clean;
      }

      if (isOpen && !isSelfClose) depth++;
    }

    return out.trimStart();
  } catch {
    return html;
  }
}

/* ══════════════════════════════════════════════════
   4.  SMALL UI PRIMITIVES
══════════════════════════════════════════════════ */

function TB({
  onClick, active, disabled, title, children,
}: {
  onClick: () => void; active?: boolean;
  disabled?: boolean; title: string; children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onMouseDown={e => e.preventDefault()}
      onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 28, height: 28, borderRadius: 5, border: "none", flexShrink: 0,
        background: active ? "#2563eb" : "transparent",
        color: active ? "#fff" : disabled ? "#cbd5e1" : "#374151",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.1s",
      }}
      onMouseEnter={e => { if (!active && !disabled) (e.currentTarget as HTMLElement).style.background = "#f1f5f9"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = active ? "#2563eb" : "transparent"; }}
    >{children}</button>
  );
}

const Sep = () => (
  <div style={{ width: 1, height: 18, background: "#e2e8f0", margin: "0 3px", flexShrink: 0, alignSelf: "center" }} />
);

function SelDropdown({
  value, options, onChange, w = 80, title,
}: {
  value: string; options: { label: string; value: string }[];
  onChange: (v: string) => void; w?: number; title?: string;
}) {
  return (
    <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
      <select
        title={title}
        value={value}
        onMouseDown={e => e.stopPropagation()}
        onChange={e => onChange(e.target.value)}
        style={{
          height: 28, padding: "0 20px 0 7px", borderRadius: 5,
          border: "1px solid #e2e8f0", background: "#fff", color: "#374151",
          cursor: "pointer", fontSize: 12, fontWeight: 500,
          width: w, appearance: "none", WebkitAppearance: "none", outline: "none",
        }}
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <svg style={{ position: "absolute", right: 5, pointerEvents: "none" }} width={9} height={9} viewBox="0 0 10 10">
        <path d="M2 3.5L5 6.5L8 3.5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   5.  LINK POPOVER  (inline strip below toolbar)
══════════════════════════════════════════════════ */

function LinkBar({ editor, onClose }: { editor: Editor; onClose: () => void }) {
  const [url, setUrl] = useState(editor.getAttributes("link").href ?? "");

  const apply = () => {
    const t = url.trim();
    if (!t) editor.chain().focus().extendMarkRange("link").unsetLink().run();
    else editor.chain().focus().extendMarkRange("link").setLink({ href: t, target: "_blank", rel: "noopener noreferrer" }).run();
    onClose();
  };

  return (
    <div
      onMouseDown={e => e.preventDefault()}
      style={{
        display: "flex", gap: 6, alignItems: "center",
        padding: "6px 10px", background: "#f0f7ff",
        borderBottom: "1px solid #bfdbfe",
      }}
    >
      <LinkIcon size={13} color="#2563eb" />
      <input
        autoFocus type="url" value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="https://example.com"
        onKeyDown={e => { if (e.key === "Enter") apply(); if (e.key === "Escape") onClose(); }}
        style={{
          flex: 1, border: "1px solid #bfdbfe", borderRadius: 6,
          padding: "4px 9px", fontSize: 13, outline: "none",
          background: "#fff", minWidth: 0,
        }}
      />
      <button type="button" onClick={apply}
        style={{ padding: "4px 12px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
        Apply
      </button>
      {editor.isActive("link") && (
        <button type="button" onClick={() => { editor.chain().focus().unsetLink().run(); onClose(); }}
          style={{ padding: "4px 10px", background: "#fef2f2", color: "#dc2626", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
          Remove
        </button>
      )}
      <button type="button" onClick={onClose}
        style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", fontSize: 18, lineHeight: 1, padding: "0 2px" }}>
        ×
      </button>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   6.  IMAGE — URL MODAL
══════════════════════════════════════════════════ */

function ImageUrlModal({
  onInsert, onClose,
}: { onInsert: (src: string, alt: string) => void; onClose: () => void }) {
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const [prev, setPrev] = useState(false);
  const [err, setErr] = useState(false);

  const ok = () => {
    const t = src.trim();
    if (!t) return;
    onInsert(t, alt.trim());
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 9999, padding: "1rem",
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: "#fff", borderRadius: 14, padding: "1.5rem",
        width: "100%", maxWidth: 460,
        boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
        animation: "modalIn 0.18s ease",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.1rem" }}>
          <h3 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", display: "flex", alignItems: "center", gap: 7 }}>
            <Link2 size={16} color="#2563eb" /> Insert Image from URL
          </h3>
          <button type="button" onClick={onClose}
            style={{ background: "#f1f5f9", border: "none", borderRadius: 7, padding: "5px 7px", cursor: "pointer", color: "#64748b", display: "flex" }}>
            <X size={15} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          {/* URL */}
          <div>
            <label style={labelStyle}>Image URL *</label>
            <input autoFocus type="url" placeholder="https://example.com/photo.jpg"
              value={src}
              onChange={e => { setSrc(e.target.value); setPrev(false); setErr(false); }}
              onKeyDown={e => e.key === "Enter" && ok()}
              style={inputStyle}
            />
          </div>

          {/* Alt */}
          <div>
            <label style={labelStyle}>Alt text <span style={{ fontWeight: 400, color: "#94a3b8" }}>(SEO + accessibility)</span></label>
            <input type="text" placeholder="A brief description of the image…"
              value={alt} onChange={e => setAlt(e.target.value)} style={inputStyle} />
          </div>

          {/* Preview toggle */}
          {src.trim() && !prev && (
            <button type="button" onClick={() => setPrev(true)}
              style={{ alignSelf: "flex-start", background: "none", border: "none", cursor: "pointer", color: "#2563eb", fontSize: 13, display: "flex", alignItems: "center", gap: 4, padding: 0 }}>
              <Eye size={13} /> Preview image
            </button>
          )}

          {prev && (
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, overflow: "hidden", background: "#f8fafc", padding: 8, textAlign: "center" }}>
              {err
                ? <p style={{ margin: 0, color: "#dc2626", fontSize: 13, padding: "1rem" }}>⚠ Could not load — check the URL</p>
                : <img src={src} alt={alt || "preview"} onError={() => setErr(true)}
                  style={{ maxWidth: "100%", maxHeight: 180, objectFit: "contain", borderRadius: 5 }} />
              }
            </div>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: "1.25rem" }}>
          <button type="button" onClick={onClose} style={cancelBtnStyle}>Cancel</button>
          <button type="button" onClick={ok} disabled={!src.trim()} style={{ ...primaryBtnStyle, opacity: src.trim() ? 1 : 0.5, cursor: src.trim() ? "pointer" : "not-allowed" }}>
            Insert Image
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   7.  SELECTION BUBBLE (replaces BubbleMenu import)
══════════════════════════════════════════════════ */

function SelectionBubble({ editor, onLink }: { editor: Editor; onLink: () => void }) {
  const [vis, setVis] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const update = () => {
      const { from, to } = editor.state.selection;
      if (from === to || editor.isActive("image")) { setVis(false); return; }

      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) { setVis(false); return; }

      const rect = sel.getRangeAt(0).getBoundingClientRect();
      const wrap = editor.view.dom.closest(".re-wrap") as HTMLElement;
      if (!wrap) { setVis(false); return; }

      const wr = wrap.getBoundingClientRect();
      setPos({
        top: rect.top - wr.top - 44,
        left: Math.min(Math.max(rect.left - wr.left + rect.width / 2, 70), wr.width - 70),
      });
      setVis(true);
    };

    editor.on("selectionUpdate", update);
    editor.on("blur", () => setVis(false));
    return () => {
      editor.off("selectionUpdate", update);
      editor.off("blur", () => setVis(false));
    };
  }, [editor]);

  if (!vis) return null;

  const btns: Array<{ cmd: string; icon: React.ReactNode; label: string; fn: () => void }> = [
    { cmd: "bold", icon: <Bold size={12} />, label: "Bold", fn: () => editor.chain().focus().toggleBold().run() },
    { cmd: "italic", icon: <Italic size={12} />, label: "Italic", fn: () => editor.chain().focus().toggleItalic().run() },
    { cmd: "underline", icon: <UnderlineIcon size={12} />, label: "Underline", fn: () => editor.chain().focus().toggleUnderline().run() },
    { cmd: "strike", icon: <Strikethrough size={12} />, label: "Strike", fn: () => editor.chain().focus().toggleStrike().run() },
    { cmd: "link", icon: <LinkIcon size={12} />, label: "Link", fn: onLink },
  ];

  return (
    <div onMouseDown={e => e.preventDefault()}
      style={{
        position: "absolute", top: pos.top, left: pos.left,
        transform: "translateX(-50%)", zIndex: 30,
        display: "flex", alignItems: "center", gap: 2,
        background: "#1e293b", borderRadius: 8, padding: "4px 6px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
      }}
    >
      {btns.map(b => (
        <button key={b.cmd} type="button" title={b.label} onClick={b.fn}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 26, height: 26, borderRadius: 4, border: "none", cursor: "pointer",
            background: editor.isActive(b.cmd) ? "#2563eb" : "transparent",
            color: editor.isActive(b.cmd) ? "#fff" : "#e2e8f0",
            transition: "background 0.1s",
          }}
          onMouseEnter={e => { if (!editor.isActive(b.cmd)) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
          onMouseLeave={e => { if (!editor.isActive(b.cmd)) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
        >{b.icon}</button>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   8.  SHARED STYLE TOKENS
══════════════════════════════════════════════════ */

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "0.73rem", fontWeight: 700, color: "#374151",
  textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4,
};
const inputStyle: React.CSSProperties = {
  width: "100%", padding: "0.55rem 0.875rem", border: "1px solid #e2e8f0",
  borderRadius: 7, fontSize: "0.875rem", outline: "none", boxSizing: "border-box",
  color: "#0f172a", background: "#fff",
};
const cancelBtnStyle: React.CSSProperties = {
  padding: "0.5rem 1rem", background: "#f1f5f9", border: "1px solid #e2e8f0",
  borderRadius: 7, cursor: "pointer", fontSize: "0.875rem", fontWeight: 500, color: "#374151",
};
const primaryBtnStyle: React.CSSProperties = {
  padding: "0.5rem 1.25rem", background: "#2563eb", border: "none",
  borderRadius: 7, cursor: "pointer", fontSize: "0.875rem", fontWeight: 700, color: "#fff",
};

/* ══════════════════════════════════════════════════
   9.  TOOLBAR CONSTANTS
══════════════════════════════════════════════════ */

const FONTS = [
  { label: "Default", value: "" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Playfair Display", value: "'Playfair Display', serif" },
  { label: "Merriweather", value: "'Merriweather', serif" },
  { label: "Lato", value: "'Lato', sans-serif" },
  { label: "Roboto", value: "'Roboto', sans-serif" },
  { label: "Open Sans", value: "'Open Sans', sans-serif" },
  { label: "Mono", value: "ui-monospace, monospace" },
];

const SIZES = [
  { label: "Sm  12", value: "12" },
  { label: "Def 15", value: "" },
  { label: "Lg  18", value: "18" },
  { label: "XL  22", value: "22" },
  { label: "2XL 28", value: "28" },
  { label: "3XL 36", value: "36" },
];

const TEXT_COLORS = ["#0f172a", "#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899", "#6b7280", "#fff"];
const HL_COLORS = ["#fef08a", "#bbf7d0", "#bfdbfe", "#fecaca", "#e9d5ff", "#fed7aa", "#f0fdf4"];

/* ══════════════════════════════════════════════════
   10. MAIN COMPONENT
══════════════════════════════════════════════════ */

interface RichEditorProps {
  content: string;
  onChange: (html: string) => void;
  hasError?: boolean;
}

type ViewMode = "rich" | "code" | "preview";

export default function RichEditor({ content, onChange, hasError }: RichEditorProps) {
  const [linkOpen, setLinkOpen] = useState(false);
  const [imgUrlOpen, setImgUrlOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imgErr, setImgErr] = useState<string | null>(null);
  const [colorOpen, setColorOpen] = useState(false);
  const [hlOpen, setHlOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("rich");
  const [codeHtml, setCodeHtml] = useState(content);

  const fileRef = useRef<HTMLInputElement>(null);
  const colorBtnRef = useRef<HTMLButtonElement>(null);
  const hlBtnRef = useRef<HTMLButtonElement>(null);
  // Ref so useEditor's onUpdate closure always reads latest viewMode
  const viewModeRef = useRef<ViewMode>("rich");

  /* ── close colour pickers on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!colorBtnRef.current?.closest(".re-color-wrap")?.contains(e.target as Node)) setColorOpen(false);
      if (!hlBtnRef.current?.closest(".re-hl-wrap")?.contains(e.target as Node)) setHlOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── EDITOR ── */
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4, 5, 6] } }),
      Underline,
      Link.configure({
        openOnClick: false, autolink: true, linkOnPaste: true,
        HTMLAttributes: { target: "_blank", rel: "noopener noreferrer" }
      }),
      ResizableImage.configure({ allowBase64: false }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Start writing your blog post…  Paste from Word or Google Docs to keep formatting." }),
      Table.configure({ resizable: false }),
      TableRow, TableHeader, TableCell,
      FontSizeExtension,                          // extends TextStyle — must come before FontFamily
      FontFamily.configure({ types: ["textStyle"] }),
      Color.configure({ types: ["textStyle"] }),
      Highlight.configure({ multicolor: true }),
    ],
    content,
    onUpdate({ editor }) {
      const html = editor.getHTML();
      onChange(html);
      // Don't overwrite codeHtml while user is editing it directly
      if (viewModeRef.current !== "code") setCodeHtml(prettyHtml(html));
    },
    editorProps: {
      attributes: { class: "re-body", spellcheck: "true" },
      handlePaste(_, event) {
        const items = Array.from(event.clipboardData?.items ?? []);
        const imgItem = items.find(i => i.type.startsWith("image/"));
        if (imgItem) { event.preventDefault(); const f = imgItem.getAsFile(); if (f) doUpload(f); return true; }
        return false;
      },
      handleDrop(_, event) {
        const files = Array.from(event.dataTransfer?.files ?? []);
        const img = files.find(f => f.type.startsWith("image/"));
        if (img) { event.preventDefault(); doUpload(img); return true; }
        return false;
      },
    },
  });

  /* ── sync external content prop → editor ── */
  const prevRef = useRef(content);
  useEffect(() => {
    if (!editor) return;
    if (content !== editor.getHTML() && content !== prevRef.current) {
      queueMicrotask(() => {
        editor.commands.setContent(content || "", { emitUpdate: false });
        setCodeHtml(prettyHtml(content || ""));
      });
    }
    prevRef.current = content;
  }, [content, editor]);

  /* ── view mode transitions ── */
  const switchView = (next: ViewMode) => {
    if (!editor) return;
    viewModeRef.current = next;   // keep ref in sync before state update
    if (viewMode === "code" && next !== "code") {
      // Commit raw code edits back into the rich editor
      // Strip pretty-print newlines/indents before setting — editor wants clean HTML
      const compact = codeHtml.replace(/\n\s*/g, "").trim();
      editor.commands.setContent(compact, { emitUpdate: false });
      onChange(compact);
    }
    if (next === "code") {
      // Pretty-print so it's readable in the textarea
      setCodeHtml(prettyHtml(editor.getHTML()));
    }
    setViewMode(next);
    setLinkOpen(false);
  };

  /* ── image upload ── */
  const doUpload = useCallback(async (file: File) => {
    if (!editor) return;
    if (!file.type.startsWith("image/")) { setImgErr("Only image files allowed."); return; }
    if (file.size > 8 * 1024 * 1024) { setImgErr("Max size is 8 MB."); return; }
    setUploading(true); setImgErr(null);
    try {
      const url = await uploadEditorImage(file);
      editor.chain().focus().setImage({ src: url, alt: file.name } as any).run();
    } catch (e: any) {
      setImgErr(e?.message ?? "Upload failed.");
    } finally { setUploading(false); }
  }, [editor]);

  const insertImageUrl = (src: string, alt: string) =>
    editor?.chain().focus().setImage({ src, alt } as any).run();

  /* ── current font/size ── */
  const curFont = editor ? (editor.getAttributes("textStyle").fontFamily as string ?? "") : "";
  const curSize = editor ? (editor.getAttributes("textStyle").fontSize as string ?? "").replace("px", "") : "";
  const curColor = editor ? (editor.getAttributes("textStyle").color as string ?? "#0f172a") : "#0f172a";

  if (!editor) return null;

  /* ─────────────────────────────────────────────
     RENDER
  ───────────────────────────────────────────── */

  return (
    <>
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @keyframes modalIn { from { opacity:0; transform: scale(0.96) translateY(8px); } to { opacity:1; transform: scale(1) translateY(0); } }
        @keyframes spinIt  { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* ─ wrapper ─ */
        .re-wrap {
          display: flex; flex-direction: column;
          height: 500px; border-radius: 10px; overflow: hidden;
          border: 1px solid ${hasError ? "#fca5a5" : "#e2e8f0"};
          box-shadow: ${hasError ? "0 0 0 3px rgba(239,68,68,0.1)" : "none"};
          background: #fff; position: relative;
          transition: border-color 0.15s, box-shadow 0.15s;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* ─ toolbar ─ */
        .re-toolbar {
          display: flex; flex-wrap: wrap; align-items: center; gap: 2px;
          padding: 5px 8px; border-bottom: 1px solid #e2e8f0;
          background: #f8fafc; flex-shrink: 0; position: relative; z-index: 6;
        }

        /* ─ mode tabs ─ */
        .re-tabs {
          display: flex; border-bottom: 1px solid #e2e8f0;
          background: #f8fafc; flex-shrink: 0;
        }
        .re-tab {
          padding: 5px 14px; border: none; border-bottom: 2px solid transparent;
          background: transparent; cursor: pointer; font-size: 12px; font-weight: 600;
          color: #64748b; transition: all 0.12s; display: flex; align-items: center; gap: 5px;
        }
        .re-tab.active { color: #2563eb; border-bottom-color: #2563eb; background: #fff; }
        .re-tab:hover:not(.active) { color: #374151; background: #f1f5f9; }

        /* ─ editor body ─ */
        .re-body {
          flex: 1; min-height: 0; overflow-y: auto;
          padding: 1rem 1.125rem; outline: none;
          font-size: 15px; line-height: 1.8; color: #0f172a;
          font-family: Georgia, serif; word-break: break-word;
          cursor: text;
        }
        .re-body p.is-editor-empty:first-child::before {
          color: #94a3b8; content: attr(data-placeholder);
          float: left; height: 0; pointer-events: none;
        }

        /* typography */
        .re-body h1 { font-size:2em;    font-weight:700; margin:1.1em 0 0.4em; line-height:1.25; }
        .re-body h2 { font-size:1.5em;  font-weight:700; margin:1em 0 0.35em; line-height:1.3; }
        .re-body h3 { font-size:1.25em; font-weight:600; margin:0.9em 0 0.3em; }
        .re-body h4 { font-size:1.1em;  font-weight:600; margin:0.8em 0 0.3em; }
        .re-body p  { margin: 0.45em 0; }
        .re-body strong { font-weight:700; }
        .re-body em     { font-style:italic; }
        .re-body u      { text-decoration:underline; }
        .re-body s      { text-decoration:line-through; }
        .re-body a      { color:#2563eb; text-decoration:underline; }
        .re-body a:hover { color:#1d4ed8; }
        .re-body ul  { list-style:disc;    padding-left:1.5em; margin:0.4em 0; }
        .re-body ol  { list-style:decimal; padding-left:1.5em; margin:0.4em 0; }
        .re-body li  { margin:0.2em 0; }
        .re-body blockquote {
          border-left:3px solid #2563eb; padding-left:1em;
          margin:1em 0; color:#475569; font-style:italic;
        }
        .re-body code {
          background:#f1f5f9; border-radius:4px; padding:2px 6px;
          font-family:ui-monospace,monospace; font-size:0.875em; color:#e11d48;
        }
        .re-body pre {
          background:#0f172a; color:#e2e8f0; border-radius:8px;
          padding:1rem; font-family:ui-monospace,monospace; font-size:0.875em;
          overflow-x:auto; margin:1em 0;
        }
        .re-body pre code { background:none; color:inherit; padding:0; }
        .re-body hr  { border:none; border-top:2px solid #e2e8f0; margin:1.25em 0; }
        .re-body ::selection { background:rgba(37,99,235,0.15); }

        /* table */
        .re-body table { width:100%; border-collapse:collapse; margin:1em 0; font-size:0.9em; table-layout:fixed; }
        .re-body th { background:#f1f5f9; font-weight:600; text-align:left; padding:7px 11px; border:1px solid #e2e8f0; }
        .re-body td { padding:7px 11px; border:1px solid #e2e8f0; vertical-align:top; }
        .re-body tr:hover td { background:#f8fafc; }
        .re-body .selectedCell { background:#eff6ff !important; }

        /* resizable image node wrapper */
        .re-body .node-resizableImageView { display:block; margin:0.75em 0; }

        /* ─ code view ─ */
        .re-code {
          flex:1; min-height:0; padding:1rem; margin:0;
          font-family:ui-monospace,'Cascadia Code','Fira Code',monospace;
          font-size:12.5px; line-height:1.7; color:#1e293b;
          background:#f8fafc; border:none; outline:none;
          resize:none; overflow-y:auto; tab-size:2;
          white-space: pre-wrap;       /* wrap long lines instead of scrolling */
          word-break: break-all;       /* break URLs/long tokens */
          box-sizing: border-box;
          width: 100%;
        }

        /* ─ preview ─ */
        .re-preview {
          flex:1; min-height:0; overflow-y:auto; padding:1.5rem 2rem;
          background:#fff; font-family:Georgia,serif; font-size:15px;
          line-height:1.8; color:#0f172a; word-break:break-word;
        }
        .re-preview h1 { font-size:2em;    font-weight:700; margin:1em 0 0.4em; }
        .re-preview h2 { font-size:1.5em;  font-weight:700; margin:0.9em 0 0.35em; }
        .re-preview h3 { font-size:1.25em; font-weight:600; margin:0.8em 0 0.3em; }
        .re-preview p  { margin:0.5em 0; }
        .re-preview strong { font-weight:700; }
        .re-preview em     { font-style:italic; }
        .re-preview u      { text-decoration:underline; }
        .re-preview s      { text-decoration:line-through; }
        .re-preview a      { color:#2563eb; text-decoration:underline; }
        .re-preview ul  { list-style:disc;    padding-left:1.5em; margin:0.4em 0; }
        .re-preview ol  { list-style:decimal; padding-left:1.5em; margin:0.4em 0; }
        .re-preview li  { margin:0.2em 0; }
        .re-preview blockquote { border-left:3px solid #2563eb; padding-left:1em; margin:1em 0; color:#475569; font-style:italic; }
        .re-preview img  { max-width:100%; height:auto; border-radius:6px; display:block; margin:0.75em auto; }
        .re-preview code { background:#f1f5f9; border-radius:4px; padding:2px 6px; font-family:ui-monospace,monospace; font-size:0.875em; color:#e11d48; }
        .re-preview pre  { background:#0f172a; color:#e2e8f0; border-radius:8px; padding:1rem; font-family:ui-monospace,monospace; overflow-x:auto; margin:1em 0; }
        .re-preview pre code { background:none; color:inherit; padding:0; }
        .re-preview hr   { border:none; border-top:2px solid #e2e8f0; margin:1.25em 0; }
        .re-preview table { width:100%; border-collapse:collapse; margin:1em 0; font-size:0.9em; }
        .re-preview th { background:#f1f5f9; font-weight:600; text-align:left; padding:7px 11px; border:1px solid #e2e8f0; }
        .re-preview td { padding:7px 11px; border:1px solid #e2e8f0; }

        /* ─ status bar ─ */
        .re-status {
          display:flex; align-items:center; justify-content:space-between;
          padding:3px 10px; border-top:1px solid #e2e8f0;
          background:#f8fafc; font-size:11px; color:#94a3b8; flex-shrink:0;
        }

        /* ─ colour pickers ─ */
        .re-color-wrap, .re-hl-wrap { position:relative; }
        .re-color-panel {
          position:absolute; top:34px; left:0; z-index:50;
          background:#fff; border:1px solid #e2e8f0; border-radius:9px;
          padding:8px; box-shadow:0 8px 24px rgba(0,0,0,0.12);
          display:flex; flex-wrap:wrap; gap:5px; width:140px;
        }
        .re-swatch {
          width:20px; height:20px; border-radius:4px; cursor:pointer;
          border:1.5px solid rgba(0,0,0,0.08); transition:transform 0.1s;
          flex-shrink:0;
        }
        .re-swatch:hover { transform:scale(1.18); border-color:rgba(0,0,0,0.22); }
      `}</style>

      {/* ── WRAPPER ── */}
      <div className="re-wrap">

        {/* ══ TOOLBAR ══ */}
        <div className="re-toolbar" onMouseDown={e => e.preventDefault()}>

          {/* Undo / Redo */}
          <TB title="Undo (Ctrl+Z)" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}><Undo size={14} /></TB>
          <TB title="Redo (Ctrl+Shift+Z)" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}><Redo size={14} /></TB>

          <Sep />

          {/* Heading */}
          <SelDropdown w={68} title="Heading"
            value={[1, 2, 3, 4, 5, 6].find(l => editor.isActive("heading", { level: l })) ? `h${[1, 2, 3, 4, 5, 6].find(l => editor.isActive("heading", { level: l }))}` : ""}
            options={[
              { label: "Para", value: "" }, { label: "H1", value: "h1" }, { label: "H2", value: "h2" },
              { label: "H3", value: "h3" }, { label: "H4", value: "h4" }, { label: "H5", value: "h5" },
            ]}
            onChange={v => {
              if (!v) editor.chain().focus().setParagraph().run();
              else editor.chain().focus().toggleHeading({ level: parseInt(v[1]) as 1 | 2 | 3 | 4 | 5 | 6 }).run();
            }}
          />

          {/* Font family */}
          <SelDropdown w={120} title="Font Family" value={curFont} options={FONTS}
            onChange={v => {
              if (!v) editor.chain().focus().unsetFontFamily().run();
              else editor.chain().focus().setFontFamily(v).run();
            }}
          />

          {/* Font size */}
          <SelDropdown w={70} title="Font Size" value={curSize} options={SIZES}
            onChange={v => {
              if (!v) editor.chain().focus().unsetFontSize().run();
              else editor.chain().focus().setFontSize(v).run();
            }}
          />

          <Sep />

          {/* Bold / Italic / Underline / Strike / Code */}
          <TB title="Bold (Ctrl+B)" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}><Bold size={14} /></TB>
          <TB title="Italic (Ctrl+I)" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic size={14} /></TB>
          <TB title="Underline (U)" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}><UnderlineIcon size={14} /></TB>
          <TB title="Strikethrough" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}><Strikethrough size={14} /></TB>
          <TB title="Inline Code" active={editor.isActive("code")} onClick={() => editor.chain().focus().toggleCode().run()}><Code size={14} /></TB>

          <Sep />

          {/* Text colour picker */}
          <div className="re-color-wrap">
            <button
              ref={colorBtnRef}
              type="button"
              title="Text Color"
              onMouseDown={e => e.preventDefault()}
              onClick={() => { setColorOpen(o => !o); setHlOpen(false); }}
              style={{
                display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                width: 28, height: 28, borderRadius: 5, border: "none", background: "transparent",
                cursor: "pointer", gap: 1, padding: 0,
              }}
            >
              <Palette size={13} color="#374151" />
              <span style={{ width: 16, height: 3, borderRadius: 2, background: curColor, display: "block" }} />
            </button>
            {colorOpen && (
              <div className="re-color-panel" onMouseDown={e => e.preventDefault()}>
                {TEXT_COLORS.map(c => (
                  <span key={c} className="re-swatch"
                    style={{ background: c, outline: curColor === c ? "2px solid #2563eb" : "none", outlineOffset: 1 }}
                    onClick={() => { editor.chain().focus().setColor(c).run(); setColorOpen(false); }}
                  />
                ))}
                <button type="button" title="Clear color"
                  onMouseDown={e => e.preventDefault()}
                  onClick={() => { editor.chain().focus().unsetColor().run(); setColorOpen(false); }}
                  style={{ width: "100%", border: "1px solid #e2e8f0", borderRadius: 5, background: "#f8fafc", cursor: "pointer", fontSize: 11, color: "#64748b", padding: "3px 0" }}
                >Clear</button>
              </div>
            )}
          </div>

          {/* Highlight picker */}
          <div className="re-hl-wrap">
            <button
              ref={hlBtnRef}
              type="button"
              title="Highlight"
              onMouseDown={e => e.preventDefault()}
              onClick={() => { setHlOpen(o => !o); setColorOpen(false); }}
              style={{
                display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                width: 28, height: 28, borderRadius: 5, border: "none",
                background: editor.isActive("highlight") ? "#fef08a" : "transparent",
                cursor: "pointer", gap: 1, padding: 0,
              }}
            >
              <Highlighter size={13} color="#374151" />
              <span style={{ width: 16, height: 3, borderRadius: 2, background: "#fef08a", display: "block" }} />
            </button>
            {hlOpen && (
              <div className="re-color-panel" onMouseDown={e => e.preventDefault()}>
                {HL_COLORS.map(c => (
                  <span key={c} className="re-swatch" style={{ background: c }}
                    onClick={() => { editor.chain().focus().setHighlight({ color: c }).run(); setHlOpen(false); }}
                  />
                ))}
                <button type="button"
                  onMouseDown={e => e.preventDefault()}
                  onClick={() => { editor.chain().focus().unsetHighlight().run(); setHlOpen(false); }}
                  style={{ width: "100%", border: "1px solid #e2e8f0", borderRadius: 5, background: "#f8fafc", cursor: "pointer", fontSize: 11, color: "#64748b", padding: "3px 0" }}
                >Clear</button>
              </div>
            )}
          </div>

          <Sep />

          {/* Alignment */}
          <TB title="Align Left" active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()}><AlignLeft size={14} /></TB>
          <TB title="Align Center" active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()}><AlignCenter size={14} /></TB>
          <TB title="Align Right" active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()}><AlignRight size={14} /></TB>
          <TB title="Justify" active={editor.isActive({ textAlign: "justify" })} onClick={() => editor.chain().focus().setTextAlign("justify").run()}><AlignJustify size={14} /></TB>

          <Sep />

          {/* Lists */}
          <TB title="Bullet List" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}><List size={14} /></TB>
          <TB title="Ordered List" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered size={14} /></TB>

          <Sep />

          {/* Block */}
          <TB title="Blockquote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote size={14} /></TB>
          <TB title="Horizontal Rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}><Minus size={14} /></TB>

          <Sep />

          {/* Link */}
          <TB title="Link" active={editor.isActive("link") || linkOpen}
            onClick={() => { setLinkOpen(s => !s); setColorOpen(false); setHlOpen(false); }}
          ><LinkIcon size={14} /></TB>

          {/* Image — file upload */}
          <TB title="Upload Image" onClick={() => fileRef.current?.click()} disabled={uploading}>
            {uploading
              ? <Loader2 size={14} style={{ animation: "spinIt 0.8s linear infinite" }} />
              : <ImageIcon size={14} />}
          </TB>

          {/* Image — from URL */}
          <TB title="Insert Image from URL" onClick={() => setImgUrlOpen(true)}>
            <Link2 size={14} />
          </TB>

          {/* Table */}
          <TB title="Insert Table" active={editor.isActive("table")}
            onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
            <TableIcon size={14} />
          </TB>
        </div>

        {/* ══ MODE TABS ══ */}
        <div className="re-tabs">
          {(["rich", "code", "preview"] as ViewMode[]).map(m => {
            const labels: Record<ViewMode, { label: string; icon: React.ReactNode }> = {
              rich: { label: "Write", icon: <Bold size={11} /> },
              code: { label: "HTML", icon: <Code2 size={11} /> },
              preview: { label: "Preview", icon: <Eye size={11} /> },
            };
            return (
              <button key={m} type="button" className={`re-tab${viewMode === m ? " active" : ""}`}
                onClick={() => switchView(m)}>
                {labels[m].icon} {labels[m].label}
              </button>
            );
          })}
          {viewMode === "code" && (
            <span style={{ marginLeft: "auto", alignSelf: "center", paddingRight: 10, fontSize: 11, color: "#f59e0b", fontWeight: 700 }}>
              Editing raw HTML
            </span>
          )}
        </div>

        {/* ══ INLINE PANELS ══ */}

        {/* Link bar */}
        {linkOpen && viewMode === "rich" && (
          <LinkBar editor={editor} onClose={() => setLinkOpen(false)} />
        )}

        {/* Image error */}
        {imgErr && (
          <div style={{ padding: "5px 12px", background: "#fef2f2", borderBottom: "1px solid #fecaca", fontSize: "0.78rem", color: "#dc2626", display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            ⚠ {imgErr}
            <button type="button" onClick={() => setImgErr(null)}
              style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "#dc2626", fontSize: 16, lineHeight: 1 }}>×</button>
          </div>
        )}

        {/* ══ CONTENT AREA ══ */}

        {viewMode === "rich" && (
          <>
            <EditorContent
              editor={editor}
              style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}
              onClick={() => editor.commands.focus()}
            />
            <SelectionBubble editor={editor} onLink={() => { setLinkOpen(s => !s); }} />
          </>
        )}

        {viewMode === "code" && (
          <textarea
            className="re-code"
            value={codeHtml}
            spellCheck={false}
            onChange={e => {
              const val = e.target.value;
              setCodeHtml(val);
              // Send compact version to parent so content is valid HTML
              onChange(val.replace(/\n\s*/g, "").trim());
            }}
            onKeyDown={e => {
              if (e.key === "Tab") {
                e.preventDefault();
                const el = e.currentTarget;
                const s = el.selectionStart, en = el.selectionEnd;
                const next = codeHtml.substring(0, s) + "  " + codeHtml.substring(en);
                setCodeHtml(next);
                onChange(next.replace(/\n\s*/g, "").trim());
                requestAnimationFrame(() => { el.selectionStart = el.selectionEnd = s + 2; });
              }
            }}
          />
        )}

        {viewMode === "preview" && (
          <div
            className="re-preview"
            dangerouslySetInnerHTML={{ __html: editor.getHTML() }}
          />
        )}

        {/* ══ STATUS BAR ══ */}
        <div className="re-status">
          <span>
            {viewMode === "code"
              ? `${codeHtml.length} chars`
              : `${editor.getHTML().replace(/<[^>]+>/g, "").trim().split(/\s+/).filter(Boolean).length} words`}
          </span>
          <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {editor.isActive("table") && (
              <span style={{ color: "#64748b" }}>
                <button type="button" onMouseDown={e => e.preventDefault()}
                  onClick={() => editor.chain().focus().addRowAfter().run()}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "#2563eb" }}>+ Row</button>
                {" · "}
                <button type="button" onMouseDown={e => e.preventDefault()}
                  onClick={() => editor.chain().focus().addColumnAfter().run()}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "#2563eb" }}>+ Col</button>
                {" · "}
                <button type="button" onMouseDown={e => e.preventDefault()}
                  onClick={() => editor.chain().focus().deleteTable().run()}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "#dc2626" }}>✕ Table</button>
              </span>
            )}
            <span style={{ color: viewMode === "code" ? "#f59e0b" : viewMode === "preview" ? "#16a34a" : "#94a3b8", fontWeight: 600, textTransform: "capitalize" }}>
              {viewMode}
            </span>
          </span>
        </div>

        {/* Hidden file input */}
        <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }}
          onChange={e => { const f = e.target.files?.[0]; if (f) doUpload(f); e.target.value = ""; }} />
      </div>

      {/* ══ IMAGE URL MODAL (outside wrapper, above everything) ══ */}
      {imgUrlOpen && (
        <ImageUrlModal onInsert={insertImageUrl} onClose={() => setImgUrlOpen(false)} />
      )}
    </>
  );
}