// components/AdminSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  Users,
  Mail,
  Database,
  Settings,
  LogOut,
  Menu as MenuIcon,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Data Jemaat", icon: Users, href: "/dashboard/jemaat" },
  { name: "Kontak Masuk", icon: Mail, href: "/dashboard/kontak" },
  { name: "Data Masuk dari User", icon: Database, href: "/dashboard/masukan" },
  { name: "Manajemen User", icon: Users, href: "/dashboard/users" },
  { name: "Pengaturan", icon: Settings, href: "/dashboard/setting" },
];

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`h-screen bg-white border-r shadow-md transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b">
        {!collapsed && <h2 className="text-xl font-bold text-blue-600">Admin</h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-500 hover:text-gray-800"
        >
          <MenuIcon size={20} />
        </button>
      </div>

      <nav className="mt-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}

        <Link
          href="/api/auth/signout"
          className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          <LogOut size={20} />
          {!collapsed && <span>Keluar</span>}
        </Link>
      </nav>
    </aside>
  );
}
