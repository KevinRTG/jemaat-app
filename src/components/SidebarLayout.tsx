'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  UserPlus,
  Settings,
  Phone,
  LogOut,
} from "lucide-react";
import { signOut } from "next-auth/react";

const menu = [
  { href: "/form-keluarga", label: "Home", icon: <Home size={18} /> },
  { href: "/form-keluarga/form", label: "Daftar Jemaat", icon: <UserPlus size={18} /> },
  { href: "/form-keluarga/setting", label: "Setting", icon: <Settings size={18} /> },
  { href: "/form-keluarga/kontak", label: "Kontak", icon: <Phone size={18} /> },
];

export default function SidebarLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-blue-700 text-white p-4 flex flex-col justify-between
        fixed z-40 top-0 left-0 h-screen transition-all duration-300
        ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:relative
        ${isCollapsed ? "w-20" : "w-64"}`}
      >
        <div>
          {/* Header dan Tombol Collapse */}
          <div className="flex justify-between items-center mb-6">
            {!isCollapsed && <h2 className="text-xl font-bold">Menu</h2>}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:block"
            >
              {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
            {showSidebar && (
              <button
                onClick={() => setShowSidebar(false)}
                className="md:hidden"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Menu */}
          <ul className="space-y-4">
            {menu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-600 transition text-sm ${
                    pathname === item.href ? "bg-blue-600" : ""
                  }`}
                  onClick={() => setShowSidebar(false)}
                >
                  <span>{item.icon}</span>
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout */}
       <button
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
        className="flex items-center gap-3 px-4 py-2 mt-6 rounded hover:bg-blue-600 transition text-sm"
          >
        <LogOut size={18} />
        {!isCollapsed && <span>Logout</span>}
      </button>

      </div>

      {/* Toggle button mobile */}
      {!showSidebar && (
        <button
          onClick={() => setShowSidebar(true)}
          className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md shadow-md md:hidden"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Main Content */}
      <main
        className={`flex-1 p-8 bg-gray-50 transition-all duration-300 w-full
        ${isCollapsed ? "md:ml-20" : "md:ml-64"} ml-0`}
      >
        {children}
      </main>
    </div>
  );
}
