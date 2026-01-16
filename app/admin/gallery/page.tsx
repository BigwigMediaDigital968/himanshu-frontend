"use client";

import { useEffect, useState } from "react";
import { Trash2, Upload, ImageIcon } from "lucide-react";
import Image from "next/image";

type Category = "DR. Himanshu" | "AVF care" | "Podcast";

interface GalleryImage {
  _id: string;
  url: string;
  category: Category;
  createdAt: string;
}

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<Category>("DR. Himanshu");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadCategory, setUploadCategory] = useState<Category>("DR. Himanshu");
  const [uploading, setUploading] = useState(false);

  const categories: Category[] = ["DR. Himanshu", "AVF care", "Podcast"];

  // Fetch images
  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/gallery`);
      
      // Check content type before parsing
      const contentType = res.headers.get("content-type");
      const isJson = contentType?.includes("application/json");

      if (!res.ok) {
        console.error(`Failed to fetch images: ${res.status} ${res.statusText}`);
        setImages([]);
        return;
      }

      if (isJson) {
        const data = await res.json();
        setImages(data.data || data || []);
      } else {
        // If response is not JSON, try to parse as text
        const text = await res.text();
        console.warn("API returned non-JSON response:", text.substring(0, 100));
        setImages([]);
      }
    } catch (error: any) {
      console.error("Error fetching gallery images:", error);
      // If it's a JSON parse error, show more helpful message
      if (error.message?.includes("JSON")) {
        console.error("API endpoint may be returning HTML instead of JSON. Check your API configuration.");
      }
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Delete image
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/gallery/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete image");
      }

      fetchImages();
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Failed to delete image");
    }
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
    }
  };

  // Upload images
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select at least one image");
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("category", uploadCategory);
      selectedFiles.forEach((file) => {
        formData.append("images", file);
      });

      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE}/gallery/upload`;
      console.log("Uploading to:", apiUrl);
      console.log("Files:", selectedFiles.map(f => ({ name: f.name, type: f.type, size: f.size })));
      console.log("Category:", uploadCategory);

      const res = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", res.status, res.statusText);
      console.log("Response headers:", Object.fromEntries(res.headers.entries()));

      // Check content type before parsing
      const contentType = res.headers.get("content-type");
      const isJson = contentType?.includes("application/json");

      if (!res.ok) {
        let errorMessage = `Failed to upload images (Status: ${res.status})`;
        
        if (isJson) {
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
            errorMessage = `Server error: The API endpoint may not be configured correctly. Status: ${res.status}`;
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

      alert("Images uploaded successfully!");
      setShowUploadModal(false);
      setSelectedFiles([]);
      fetchImages();
    } catch (error: any) {
      console.error("Error uploading images:", error);
      alert(error.message || "Failed to upload images. Please check your API endpoint.");
    } finally {
      setUploading(false);
    }
  };

  // Filter images by category
  const filteredImages = images.filter(
    (img) => img.category === activeCategory
  );

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Gallery Management</h1>
        <button
          onClick={() => setShowUploadModal(true)}
          className="bg-[#155DFC] text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-[#1248cc] transition"
        >
          <Upload size={18} />
          Upload Images
        </button>
      </div>

      {/* CATEGORY TABS */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg transition whitespace-nowrap ${
              activeCategory === cat
                ? "bg-[#155DFC] text-white font-medium"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LOADING */}
      {loading && (
        <div className="bg-white p-6 rounded-xl shadow text-gray-600 text-center">
          Loading images...
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && filteredImages.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center shadow">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <ImageIcon className="text-gray-500" size={32} />
          </div>
          <h3 className="text-lg font-semibold">No Images Found</h3>
          <p className="text-gray-500 text-sm mt-2">
            No images in the "{activeCategory}" category. Click "Upload Images"
            to add some.
          </p>
        </div>
      )}

      {/* IMAGE GRID */}
      {!loading && filteredImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image._id}
              className="bg-white rounded-xl shadow overflow-hidden group relative"
            >
              <div className="aspect-square relative">
                <Image
                  src={image.url}
                  alt={image.category}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
                  <button
                    onClick={() => handleDelete(image._id)}
                    className="opacity-0 group-hover:opacity-100 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition"
                    title="Delete image"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">
                  {new Date(image.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* UPLOAD MODAL */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Upload Images</h2>

            {/* CATEGORY SELECTION */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={uploadCategory}
                onChange={(e) =>
                  setUploadCategory(e.target.value as Category)
                }
                className="w-full px-4 py-2 border rounded-lg"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* FILE INPUT */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Images (Multiple allowed)
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {selectedFiles.length > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  {selectedFiles.length} file(s) selected
                </p>
              )}
            </div>

            {/* ACTIONS */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setSelectedFiles([]);
                }}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                disabled={uploading}
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                disabled={uploading || selectedFiles.length === 0}
                className="px-4 py-2 bg-[#155DFC] text-white rounded-lg hover:bg-[#1248cc] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {uploading ? (
                  <>
                    <span className="animate-spin">⏳</span>
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
