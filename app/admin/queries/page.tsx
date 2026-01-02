"use client";
import { useEffect, useState } from "react";

interface Appointment {
  _id: string;
  name: string;
  phone: string;
  email: string;
  disease: string;
  message: string;
  images?: { url: string }[];
  report?: { url: string };
  createdAt: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  // Image Viewer State
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImages, setViewerImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/appointment`
        );
        const data = await res.json();
        setAppointments(data.data || []);
      } catch (error) {
        console.error("Failed to fetch appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const openViewer = (images: { url: string }[]) => {
    setViewerImages(images.map((img) => img.url));
    setCurrentIndex(0);
    setViewerOpen(true);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>

      {/* LOADING */}
      {loading && (
        <div className="bg-white p-6 rounded shadow text-gray-600">
          Loading appointments...
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && appointments.length === 0 && (
        <div className="bg-white rounded shadow p-12 text-center">
          <div className="text-4xl mb-3">📅</div>
          <h3 className="text-lg font-semibold">No Appointments Yet</h3>
          <p className="text-gray-500 text-sm mt-2">
            New appointment requests will appear here.
          </p>
        </div>
      )}

      {/* DATA */}
      {!loading && appointments.length > 0 && (
        <>
          {/* 🖥 DESKTOP TABLE */}
          <div className="hidden md:block bg-white rounded shadow overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Disease</th>
                  <th className="p-3">Attachments</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt._id} className="border-t">
                    <td className="p-3 font-medium">{appt.name}</td>
                    <td className="p-3">{appt.phone}</td>
                    <td className="p-3">{appt.disease}</td>

                    <td className="p-3">
                      {appt.images?.length ? (
                        <button
                          onClick={() => openViewer(appt.images!)}
                          className="text-blue-600 underline"
                        >
                          View Images ({appt.images.length})
                        </button>
                      ) : appt.report ? (
                        <a
                          href={`${appt.report.url}?fl_attachment`}
                          target="_blank"
                          className="text-blue-600 underline"
                        >
                          Download PDF
                        </a>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>

                    <td className="p-3">
                      {new Date(appt.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 📱 MOBILE CARDS */}
          <div className="md:hidden space-y-4">
            {appointments.map((appt) => (
              <div
                key={appt._id}
                className="bg-white rounded shadow p-4 space-y-2"
              >
                <div className="font-semibold text-lg">{appt.name}</div>

                <div className="text-sm text-gray-600">📞 {appt.phone}</div>

                <div className="text-sm">
                  <strong>Disease:</strong> {appt.disease}
                </div>

                <div className="text-sm">
                  <strong>Date:</strong>{" "}
                  {new Date(appt.createdAt).toLocaleDateString()}
                </div>

                <div className="pt-2">
                  {appt.images?.length ? (
                    <button
                      onClick={() => openViewer(appt.images!)}
                      className="text-blue-600 underline"
                    >
                      View Images ({appt.images.length})
                    </button>
                  ) : appt.report ? (
                    <a
                      href={`${appt.report.url}?fl_attachment`}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Download PDF
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">
                      No attachments
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 🖼 IMAGE VIEWER MODAL */}
      {viewerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative bg-black rounded-lg max-w-4xl w-full mx-4">
            <button
              onClick={() => setViewerOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl"
            >
              ✕
            </button>

            <img
              src={viewerImages[currentIndex]}
              alt="attachment"
              className="w-full max-h-[80vh] object-contain"
            />

            <div className="flex items-center justify-between px-4 py-3 text-white">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((i) => i - 1)}
                className="disabled:opacity-40"
              >
                ◀ Prev
              </button>

              <a
                href={viewerImages[currentIndex]}
                download
                target="_blank"
                className="underline"
              >
                Download
              </a>

              <button
                disabled={currentIndex === viewerImages.length - 1}
                onClick={() => setCurrentIndex((i) => i + 1)}
                className="disabled:opacity-40"
              >
                Next ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
