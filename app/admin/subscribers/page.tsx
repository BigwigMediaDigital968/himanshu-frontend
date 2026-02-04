"use client";
import { useEffect, useState } from "react";

interface Subscriber {
  _id: string;
  email: string;
  createdAt: string;
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingEmail, setDeletingEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/api/subscribers`,
        );
        const data = await res.json();
        setSubscribers(data);
      } catch (error) {
        console.error("Failed to fetch subscribers");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  const handleDelete = async (email: string) => {
    const cleanEmail = email.trim(); // 🔥 IMPORTANT

    const confirmed = window.confirm(
      `Are you sure you want to delete ${cleanEmail}?`,
    );
    if (!confirmed) return;

    try {
      setDeletingEmail(cleanEmail);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/subscribe/${encodeURIComponent(
          email.trim(),
        )}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok) {
        throw new Error("Failed to delete subscriber");
      }

      setSubscribers((prev) =>
        prev.filter((subscriber) => subscriber.email !== cleanEmail),
      );
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete subscriber");
    } finally {
      setDeletingEmail(null);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Email Subscribers</h1>

      <div className="bg-white rounded shadow overflow-x-auto">
        {loading ? (
          <p className="p-6 text-gray-600">Loading subscribers...</p>
        ) : subscribers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="w-14 h-14 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 text-2xl">📭</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              No Subscribers Yet
            </h3>

            <p className="text-sm text-gray-500 mt-2 max-w-sm">
              Once users subscribe to your newsletter, their email addresses
              will appear here.
            </p>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Email</th>
                <th className="p-3">Subscribed On</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub) => (
                <tr key={sub._id} className="border-t">
                  <td className="p-3">{sub.email}</td>
                  <td className="p-3">
                    {new Date(sub.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDelete(sub.email)}
                      disabled={deletingEmail === sub.email}
                      className={`px-3 py-1 rounded text-sm text-white ${
                        deletingEmail === sub.email
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-red-600 hover:bg-red-700"
                      }`}
                    >
                      {deletingEmail === sub.email ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
