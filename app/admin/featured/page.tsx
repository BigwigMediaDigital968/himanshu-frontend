"use client";

import { useEffect, useState } from "react";
import { Trash2, Upload, Plus } from "lucide-react";
import Image from "next/image";

interface FeaturedItem {
  _id: string;
  image: {
    url: string;
    publicId?: string;
  };
  title: string;
  link: string;
  createdAt?: string;
}

export default function AdminFeaturedPage() {
  const [featuredItems, setFeaturedItems] = useState<FeaturedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  // Fetch featured items
  const fetchFeatured = async () => {
    setLoading(true);
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE}/featured`;
      console.log("Fetching featured items from:", apiUrl);

      const res = await fetch(apiUrl);
      console.log(res);

      console.log("GET Response status:", res.status, res.statusText);

      if (!res.ok) {
        if (res.status === 404) {
          console.error(
            "GET endpoint /featured returned 404. Backend route may not be configured."
          );
        }
        throw new Error(
          `Failed to fetch featured items (Status: ${res.status})`
        );
      }

      const contentType = res.headers.get("content-type");
      const isJson = contentType?.includes("application/json");

      if (isJson) {
        const data = await res.json();
        setFeaturedItems(data.data || data || []);
      } else {
        const text = await res.text();
        console.warn("GET response was not JSON:", text.substring(0, 100));
        setFeaturedItems([]);
      }
    } catch (error: any) {
      console.error("Error fetching featured items:", error);
      setFeaturedItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatured();
  }, []);

  // Delete featured item
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this featured item?")) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/featured/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete featured item");
      }

      fetchFeatured();
    } catch (error) {
      console.error("Error deleting featured item:", error);
      alert("Failed to delete featured item");
    }
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Upload featured item
  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select an image");
      return;
    }
    if (!title.trim()) {
      setError("Please enter a title");
      return;
    }
    if (!link.trim()) {
      setError("Please enter a link");
      return;
    }

    // Validate URL
    try {
      new URL(link);
    } catch {
      setError("Please enter a valid URL (e.g., https://example.com)");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("title", title);
      formData.append("link", link);

      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE}/featured/upload`;
      console.log("Uploading to:", apiUrl);
      console.log("FormData entries:", {
        hasImage: !!selectedFile,
        title: title,
        link: link,
        imageName: selectedFile.name,
        imageType: selectedFile.type,
        imageSize: selectedFile.size,
      });

      const res = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", res.status, res.statusText);
      console.log(
        "Response headers:",
        Object.fromEntries(res.headers.entries())
      );

      // Check content type before parsing
      const contentType = res.headers.get("content-type");
      const isJson = contentType?.includes("application/json");

      if (!res.ok) {
        let errorMessage = `Failed to upload featured item (Status: ${res.status})`;

        if (res.status === 404) {
          errorMessage = `API endpoint not found (404). Please check if the backend server is running and the route '/featured/upload' is properly configured.`;
        } else if (isJson) {
          try {
            const errorData = await res.json();
            errorMessage = errorData.error || errorData.message || errorMessage;
          } catch (e) {
            // If JSON parsing fails, try to get text
            const text = await res.text();
            errorMessage = text || errorMessage;
          }
        } else {
          // If response is HTML or other format, get text
          const text = await res.text();
          if (text.includes("<!DOCTYPE") || text.includes("<html")) {
            errorMessage = `Server error: The API endpoint may not be configured correctly. Status: ${res.status}. Check your backend routes.`;
          } else {
            errorMessage = text || errorMessage;
          }
        }

        throw new Error(errorMessage);
      }

      // Parse successful response
      if (isJson) {
        try {
          const data = await res.json();
          console.log("Upload response:", data);
        } catch (e) {
          // Response might be empty or not JSON, that's okay
          console.log("Upload successful (no JSON response)");
        }
      }

      // Reset form
      setSelectedFile(null);
      setTitle("");
      setLink("");
      setShowUploadModal(false);

      // Refresh list
      fetchFeatured();
    } catch (error: any) {
      console.error("Error uploading featured item:", error);
      setError(
        error.message ||
          "Failed to upload featured item. Please check your API endpoint configuration."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Featured Items</h1>
        <div className="flex items-center gap-4">
          {/* Debug info */}
          {/* <span className="text-sm text-gray-500">
            API: {process.env.NEXT_PUBLIC_API_BASE || "Not set"}
          </span> */}
          <button
            onClick={() => {
              setShowUploadModal(true);
              setError("");
              setSelectedFile(null);
              setTitle("");
              setLink("");
            }}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus size={20} />
            Add Featured Item
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Empty State */}
      {!loading && featuredItems.length === 0 && (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-500">
            No featured items yet. Add your first item!
          </p>
        </div>
      )}

      {/* Featured Items Grid */}
      {!loading && featuredItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image.url}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline break-all"
                >
                  {item.link}
                </a>
              </div>

              {/* Actions */}
              <div className="p-4 pt-0 border-t">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 transition"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg space-y-4">
            <h2 className="text-xl font-semibold">Add Featured Item</h2>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium mb-2">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border p-2 rounded"
              />
              {selectedFile && (
                <p className="text-sm text-gray-600 mt-1">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Link */}
            <div>
              <label className="block text-sm font-medium mb-2">Link</label>
              <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://example.com"
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setError("");
                  setSelectedFile(null);
                  setTitle("");
                  setLink("");
                }}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
                disabled={uploading}
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload size={18} />
                    Upload
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
