import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar / Mobile Menu */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 mt-16 md:mt-0 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
