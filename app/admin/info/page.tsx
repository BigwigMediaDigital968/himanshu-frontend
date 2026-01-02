"use client";
import { useEffect, useState } from "react";
import UserInfoModal from "../../components/UserInfoModal";

interface InfoItem {
  _id: string;
  title: string;
  description: string;
  images: { url: string }[];
  createdAt: string;
}

export default function AdminInfoPage() {
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<InfoItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [infoList, setInfoList] = useState<InfoItem[]>([]);

  // 🔹 Fetch all info
  const fetchInfo = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/info`);
      const data = await res.json();
      setInfoList(data.data || []);
    } catch (err) {
      console.error("Failed to fetch info");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // 🔹 Delete info
  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this info?"
    );
    if (!confirmed) return;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/info/${id}`, {
        method: "DELETE",
      });
      fetchInfo();
    } catch (err) {
      console.error("Failed to delete info");
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Info Manager</h1>

        <button
          onClick={() => {
            setEditingItem(null);
            setOpen(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Create Info
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="bg-white p-6 rounded shadow text-gray-600">
          Loading content...
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && infoList.length === 0 && (
        <div className="bg-white rounded shadow p-12 text-center">
          <div className="text-4xl mb-3">📝</div>
          <h3 className="text-lg font-semibold">No Info Added</h3>
          <p className="text-gray-500 text-sm mt-2">
            Click “Create Info” to add disease or treatment content.
          </p>
        </div>
      )}

      {/* INFO LIST */}
      {!loading && infoList.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {infoList.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded shadow p-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>

                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p>

                {item.images?.length > 0 && (
                  <p className="text-xs text-gray-400 mt-2">
                    {item.images.length} image(s) attached
                  </p>
                )}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2 mt-4">
                <button
                  className="px-3 py-1.5 text-sm border rounded hover:bg-gray-100"
                  onClick={() => {
                    setEditingItem(item);
                    setOpen(true);
                  }}
                >
                  Edit
                </button>

                <button
                  className="px-3 py-1.5 text-sm border rounded text-red-600 hover:bg-red-50"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ADD / EDIT MODAL */}
      <UserInfoModal
        open={open}
        existing={editingItem || undefined}
        onClose={() => {
          setOpen(false);
          setEditingItem(null);
        }}
        onSaved={fetchInfo}
      />
    </div>
  );
}
