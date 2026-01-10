"use client";

import { useEffect, useState } from "react";
import { Edit, Trash2, Code, ImageIcon, FileText, Code2 } from "lucide-react";
import Fuse from "fuse.js";
import dynamic from "next/dynamic";
import { formatHtml } from "../../utils/formatHtml";
import { useRouter } from "next/navigation";

const AddBlog = dynamic(() => import("../../components/AddBlogs"), {
  ssr: false,
});

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

export default function AdminBlogsPage() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);

  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [htmlContent, setHtmlContent] = useState("");
  const [showHtmlEditor, setShowHtmlEditor] = useState(false);

  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  /* ================= FETCH ================= */

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`
      );
      const data = await res.json();
      setBlogs(data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* ================= SEARCH ================= */

  const fuse = new Fuse(blogs, {
    keys: ["title", "author"],
    threshold: 0.3,
  });

  const filteredBlogs =
    searchQuery.trim() === ""
      ? blogs
      : fuse.search(searchQuery).map((r) => r.item);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  /* ================= ACTIONS ================= */

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blog/${slug}`, {
      method: "DELETE",
    });
    fetchBlogs();
  };

  const handleEdit = (slug: string) => {
    const blog = blogs.find((b) => b.slug === slug);
    if (blog) {
      setEditingBlog(blog);
      setShowAddModal(true);
    }
  };

  const handleUpdateImage = async () => {
    if (!selectedImage || !editingSlug) return;

    const formData = new FormData();
    formData.append("coverImage", selectedImage);

    await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/blog/${editingSlug}/image`,
      { method: "PATCH", body: formData }
    );

    setShowImageModal(false);
    setSelectedImage(null);
    fetchBlogs();
  };

  /* ================= UI ================= */

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="flex justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold"> Blogs</h1>
        <button
          onClick={() => {
            setEditingBlog(null);
            setShowAddModal(true);
          }}
          className="bg-[#155DFC] text-white px-5 py-2 rounded-lg"
        >
          Add Blog
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full mb-6 px-4 py-3 border rounded-lg text-sm"
      />

      {/* LOADING */}
      {loading && (
        <div className="bg-white p-6 rounded-xl shadow text-gray-600">
          Loading blogs...
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && filteredBlogs.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center shadow">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <FileText className="text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold">No Blogs Found</h3>
          <p className="text-gray-500 text-sm mt-2">
            Click “Add Blog” to create your first post.
          </p>
        </div>
      )}

      {/* ================= DESKTOP TABLE ================= */}
      {!loading && filteredBlogs.length > 0 && (
        <>
          <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Author</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedBlogs.map((blog) => (
                  <tr key={blog._id} className="border-t">
                    <td className="p-4 font-medium">{blog.title}</td>
                    <td className="p-4">{blog.author}</td>
                    <td className="p-4 text-center">
                      {new Date(blog.datePublished).toLocaleDateString()}
                    </td>
                    <td className="p-4 flex justify-center items-center gap-4">
                      {/* EDIT */}
                      <button
                        onClick={() => handleEdit(blog.slug)}
                        className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
                        title="Edit Blog"
                      >
                        <Edit size={18} />
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => handleDelete(blog.slug)}
                        className="text-red-600 hover:text-red-800 transition cursor-pointer"
                        title="Delete Blog"
                      >
                        <Trash2 size={18} />
                      </button>

                      {/* HTML */}
                      <button
                        onClick={async () => {
                          setEditingSlug(blog.slug);
                          const formatted = formatHtml(blog.content);
                          setHtmlContent(await formatted);
                          setShowHtmlEditor(true);
                        }}
                        className="text-amber-600 hover:text-amber-800 transition cursor-pointer"
                        title="Edit HTML Content"
                      >
                        <Code size={18} />
                      </button>

                      {/* IMAGE */}
                      <button
                        onClick={() => {
                          setEditingSlug(blog.slug);
                          setShowImageModal(true);
                        }}
                        className="text-green-600 hover:text-green-800 transition cursor-pointer"
                        title="Update Cover Image"
                      >
                        <ImageIcon size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ================= MOBILE CARDS ================= */}
          <div className="md:hidden space-y-4">
            {paginatedBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-xl shadow p-4 space-y-2"
              >
                <h3 className="font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-600">By {blog.author}</p>
                <p className="text-sm text-gray-500">
                  {new Date(blog.datePublished).toLocaleDateString()}
                </p>

                <div className="flex flex-wrap items-center gap-3 border-t py-2">
                  {/* EDIT */}
                  <button
                    onClick={() => handleEdit(blog.slug)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition text-sm"
                    title="Edit Blog"
                  >
                    <Edit size={16} />
                    Edit
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => handleDelete(blog.slug)}
                    className="flex items-center gap-1 text-red-600 hover:text-red-800 transition text-sm"
                    title="Delete Blog"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>

                  {/* HTML */}
                  <button
                    onClick={async () => {
                      setEditingSlug(blog.slug);
                      const formatted = formatHtml(blog.content);
                      setHtmlContent(await formatted);
                      setShowHtmlEditor(true);
                    }}
                    className="flex items-center gap-1 text-amber-600 hover:text-amber-800 transition text-sm"
                    title="Edit HTML Content"
                  >
                    <Code size={16} />
                    HTML
                  </button>

                  {/* IMAGE */}
                  <button
                    onClick={() => {
                      setEditingSlug(blog.slug);
                      setShowImageModal(true);
                    }}
                    className="flex items-center gap-1 text-green-600 hover:text-green-800 transition text-sm"
                    title="Update Cover Image"
                  >
                    <ImageIcon size={16} />
                    Image
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ================= MODALS ================= */}

      {showAddModal && (
        <AddBlog
          onClose={() => setShowAddModal(false)}
          onSuccess={fetchBlogs}
          existingBlog={editingBlog}
        />
      )}

      {showHtmlEditor && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl">
            <h2 className="font-bold mb-4">Edit Blog HTML</h2>
            <textarea
              value={htmlContent}
              onChange={(e) => setHtmlContent(e.target.value)}
              className="w-full h-64 border rounded p-3 font-mono text-sm"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowHtmlEditor(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE}/blog/${editingSlug}`,
                    {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ content: htmlContent }),
                    }
                  );
                  setShowHtmlEditor(false);
                  fetchBlogs();
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {showImageModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="font-bold mb-4">Update Cover Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files?.length
                  ? setSelectedImage(e.target.files[0])
                  : null
              }
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowImageModal(false)}
                className="bg-gray-200 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateImage}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
