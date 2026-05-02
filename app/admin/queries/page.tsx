"use client";
import { Trash2, Calendar, Phone, Mail, FileText, Image as ImageIcon, CheckCircle2, Circle, ChevronLeft, ChevronRight, Download, X, ChevronDown } from "lucide-react";
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
  marked: boolean;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImages, setViewerImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const fetchAppointments = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/appointment`);
      const data = await res.json();
      setAppointments(data.data || []);
    } catch {
      console.error("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!viewerOpen) return;
      if (e.key === "ArrowLeft") setCurrentIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setCurrentIndex((i) => Math.min(viewerImages.length - 1, i + 1));
      if (e.key === "Escape") setViewerOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [viewerOpen, viewerImages.length]);

  const openViewer = (images: { url: string }[]) => {
    setViewerImages(images.map((img) => img.url));
    setCurrentIndex(0);
    setViewerOpen(true);
  };

  const toggleMark = async (id: string, marked: boolean) => {
    setAppointments((prev) => prev.map((a) => (a._id === id ? { ...a, marked } : a)));
  };

  const deleteAppointment = async (id: string) => {
    if (!confirm("Are you sure you want to delete this appointment?")) return;
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/appointment/${id}`, { method: "DELETE" });
      setAppointments((prev) => prev.filter((a) => a._id !== id));
    } catch {
      alert("Failed to delete appointment");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
        {!loading && (
          <p className="text-sm text-gray-400 mt-1">
            {appointments.length} {appointments.length === 1 ? "appointment" : "appointments"}
          </p>
        )}
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Patient", "Phone", "Disease", "Attachments", "Date", "Actions"].map((h) => (
                  <th key={h} className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="border-b border-gray-50">
                  {[28, 24, 20, 16, 20, 14].map((w, j) => (
                    <td key={j} className="px-3 py-4">
                      <div className={`h-3 w-${w} bg-gray-100 rounded-full animate-pulse`} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {!loading && appointments.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center">
          <div className="text-5xl mb-4">📅</div>
          <h3 className="text-base font-semibold text-gray-800">No Appointments Yet</h3>
          <p className="text-sm text-gray-400 mt-2">New appointment requests will appear here.</p>
        </div>
      )}

      {/* Desktop Table */}
      {!loading && appointments.length > 0 && (
        <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Patient", "Phone", "Disease", "Attachments", "Date", "Actions"].map((h) => (
                  <th key={h} className="px-5 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {appointments.map((appt) => (
                <>
                  <tr
                    key={appt._id}
                    onClick={() => setExpandedId(expandedId === appt._id ? null : appt._id)}
                    className="hover:bg-gray-50/70 transition-colors cursor-pointer"
                  >

                    {/* Patient */}
                    <td className="px-3 py-4 pl-4">
                      <div className="font-medium text-gray-900 text-sm">{appt.name}</div>
                      {appt.email && (
                        <div className="text-xs text-gray-400 mt-0.5">{appt.email}</div>
                      )}
                    </td>

                    {/* Phone */}
                    <td className="px-3 py-4">
                      <span className="text-sm text-gray-600 font-mono">{appt.phone}</span>
                    </td>

                    {/* Disease */}
                    <td className="px-3 py-4">
                      <span className="inline-block px-2.5 py-1 rounded-full text-sm font-medium text-indigo-600">
                        {appt.disease}
                      </span>
                    </td>

                    {/* Attachments */}
                    <td className="px-3 py-4">
                      {appt.images?.length ? (
                        <button
                          onClick={() => openViewer(appt.images!)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        >
                          <ImageIcon size={12} />
                          {appt.images.length} image{appt.images.length > 1 ? "s" : ""}
                        </button>
                      ) : appt.report ? (
                        <a
                          href={`${appt.report.url}?fl_attachment`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors"
                        >
                          <FileText size={12} />
                          PDF Report
                        </a>
                      ) : (
                        <span className="text-xs text-gray-300">—</span>
                      )}
                    </td>

                    {/* Date */}
                    <td className="px-3 py-4">
                      <span className="text-sm text-gray-500">
                        {new Date(appt.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => toggleMark(appt._id, !appt.marked)}
                          title={appt.marked ? "Unmark" : "Mark as reviewed"}
                          className={`p-2 rounded-lg transition-all cursor-pointer hover:bg-gray-100 ${appt.marked ? "text-emerald-500" : "text-gray-300 hover:text-gray-400"
                            }`}
                        >
                          {appt.marked ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                        </button>
                        <button
                          onClick={() => deleteAppointment(appt._id)}
                          className="p-2 rounded-lg text-red-400 cursor-pointer hover:text-red-500 hover:bg-red-50 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedId(expandedId === appt._id ? null : appt._id);
                          }}
                          className={`p-2 rounded-lg transition-all cursor-pointer hover:bg-gray-100 text-gray-400 ${expandedId === appt._id ? "bg-gray-100 rotate-180" : ""
                            }`}
                        >
                          <ChevronDown size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expandedId === appt._id && (
                    <tr className="bg-gray-50/60">
                      <td colSpan={6} className="px-3 py-4 border-b border-gray-100">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                          Message
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {appt.message || <span className="text-gray-300 italic">No message provided.</span>}
                        </p>
                      </td>
                    </tr>
                  )}

                </>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mobile Cards */}
      {!loading && appointments.length > 0 && (
        <div className="md:hidden space-y-3">
          {appointments.map((appt) => (
            <div key={appt._id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-semibold text-gray-900">{appt.name}</div>
                  <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600">
                    {appt.disease}
                  </span>
                </div>
                <button
                  onClick={() => toggleMark(appt._id, !appt.marked)}
                  className={`mt-0.5 transition-colors ${appt.marked ? "text-emerald-500" : "text-gray-300"}`}
                >
                  {appt.marked ? <CheckCircle2 size={22} /> : <Circle size={22} />}
                </button>
              </div>

              <div className="space-y-1.5 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-gray-300" />
                  <span className="font-mono">{appt.phone}</span>
                </div>
                {appt.email && (
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-gray-300" />
                    <span>{appt.email}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Calendar size={13} className="text-gray-300" />
                  <span>
                    {new Date(appt.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </span>
                </div>

                {appt.message && (
                  <div>
                    <div className="flex items-center gap-2">
                      <Mail size={13} className="text-gray-300" />
                      <span>Message</span>
                    </div>
                    <p className="ml-6">{appt.message}</p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                <div>
                  {appt.images?.length ? (
                    <button
                      onClick={() => openViewer(appt.images!)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-600"
                    >
                      <ImageIcon size={12} />
                      {appt.images.length} image{appt.images.length > 1 ? "s" : ""}
                    </button>
                  ) : appt.report ? (
                    <a
                      href={`${appt.report.url}?fl_attachment`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-600"
                    >
                      <FileText size={12} />
                      PDF Report
                    </a>
                  ) : (
                    <span className="text-xs text-gray-300">No attachments</span>
                  )}
                </div>
                <button
                  onClick={() => deleteAppointment(appt._id)}
                  className="p-1.5 rounded-lg text-red-300 hover:text-red-500 hover:bg-red-50 transition-all"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Image Viewer Modal */}
      {viewerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setViewerOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setViewerOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full font-medium bg-white/70 hover:bg-white/80 text-black transition-colors"
            >
              <X size={15} className="
              " />
            </button>

            <img
              src={viewerImages[currentIndex]}
              alt={`Attachment ${currentIndex + 1}`}
              className="w-full max-h-[70vh] object-contain bg-black"
            />

            {viewerImages.length > 1 && (
              <div className="flex gap-2 px-4 py-2.5 bg-black/40 overflow-x-auto">
                {viewerImages.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt=""
                    onClick={() => setCurrentIndex(i)}
                    className={`w-12 h-12 flex-shrink-0 rounded-lg object-cover cursor-pointer transition-all ${i === currentIndex
                      ? "ring-2 ring-blue-400 opacity-100"
                      : "opacity-40 hover:opacity-70"
                      }`}
                  />
                ))}
              </div>
            )}

            <div className="flex items-center justify-between px-4 py-3 bg-neutral-800">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((i) => i - 1)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-white bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-default transition-colors"
              >
                <ChevronLeft size={15} /> Prev
              </button>

              <span className="text-xs text-neutral-400 font-mono">
                {currentIndex + 1} / {viewerImages.length}
              </span>

              <a
                href={viewerImages[currentIndex]}
                download
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Download size={13} /> <span className="hidden md:inline">Download</span>
              </a>

              <button
                disabled={currentIndex === viewerImages.length - 1}
                onClick={() => setCurrentIndex((i) => i + 1)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-white bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-default transition-colors"
              >
                Next <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}