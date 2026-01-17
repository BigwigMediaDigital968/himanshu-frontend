"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

const menu = [
  { name: "Dashboard", href: "/admin" },
  { name: "Email Subscribers", href: "/admin/subscribers" },
  { name: "Queries", href: "/admin/queries" },
  { name: "Cards Info", href: "/admin/info" },
  { name: "Blogs", href: "/admin/blogs" },
  { name: "Gallery", href: "/admin/gallery" },
  { name: "Featured", href: "/admin/featured" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("adminAuth");
    router.push("/login");
  };

  return (
    <>
      {/* 📱 MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-bold text-lg">Admin Panel</span>

          <button
            onClick={() => setOpen((p) => !p)}
            className="text-2xl focus:outline-none transition-transform duration-300"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <nav className="border-t bg-white">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 transition
                  ${
                    pathname === item.href
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "hover:bg-gray-100"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button
            onClick={handleLogout}
            className="
    w-full text-left px-4 py-3
    text-red-600 font-medium
    hover:bg-red-50
    transition
  "
          >
            Logout
          </button>
        </div>
      </div>

      {/* 🖥 DESKTOP SIDEBAR */}
      <aside className="hidden md:block w-64 bg-white border-r shadow-sm">
        <div className="p-6 font-bold text-xl border-b">Admin Panel</div>

        <nav className="p-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded-lg transition
                ${
                  pathname === item.href
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "hover:bg-gray-100"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-4 border-t">
          <button
            onClick={handleLogout}
            className="
      w-full border cursor-pointer px-4 py-2 rounded-lg
      text-red-600 font-medium
      hover:bg-red-50
      transition
    "
          >
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
