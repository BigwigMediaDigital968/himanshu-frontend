"use client";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
  existing?: {
    _id: string;
    title: string;
    description: string;
    images?: { url: string }[];
  };
}

export default function UserInfoModal({
  open,
  onClose,
  onSaved,
  existing,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Prefill when editing
  useEffect(() => {
    if (existing) {
      setTitle(existing.title || "");
      setDescription(existing.description || "");
    } else {
      setTitle("");
      setDescription("");
      setImages([]);
    }
  }, [existing, open]);

  if (!open) return null;

  const handleSubmit = async () => {
    // if (!title || !description) {
    //   alert("Title and description are required");
    //   return;
    // }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);

      // only append images if user selected new ones
      images.forEach((img) => formData.append("images", img));

      const isEdit = Boolean(existing?._id);
      const url = isEdit
        ? `${process.env.NEXT_PUBLIC_API_BASE}/info/${existing!._id}`
        : `${process.env.NEXT_PUBLIC_API_BASE}/info`;

      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to save info");
      }

      onSaved();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg space-y-4">
        <h2 className="text-xl font-semibold">
          {existing ? "Edit Info" : "Add Info"}
        </h2>

        {/* TITLE */}
        <input
          className="w-full border p-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* DESCRIPTION */}
        <textarea
          className="w-full border p-2 rounded h-28"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* EXISTING IMAGES (EDIT MODE) */}
        {existing?.images?.length ? (
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Existing images</p>
            <div className="flex gap-2 flex-wrap">
              {existing.images.map((img, i) => (
                <img
                  key={i}
                  src={img.url}
                  className="w-16 h-16 object-cover rounded border"
                  alt="existing"
                />
              ))}
            </div>
          </div>
        ) : null}

        {/* UPLOAD NEW IMAGES */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setImages(Array.from(e.target.files || []))}
        />

        {/* ACTIONS */}
        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
            disabled={loading}
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {loading ? "Saving..." : existing ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
