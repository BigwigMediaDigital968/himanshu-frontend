"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menu = [
  { name: "Dashboard", href: "/admin" },
  { name: "Email Subscribers", href: "/admin/subscribers" },
  { name: "Queries", href: "/admin/queries" },
  { name: "Cards Info", href: "/admin/info" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 📱 MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-bold text-lg">Admin Panel</span>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {open && (
          <nav className="border-t bg-white h-[100vh]">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 border-b
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
        )}
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
      </aside>
    </>
  );
}
