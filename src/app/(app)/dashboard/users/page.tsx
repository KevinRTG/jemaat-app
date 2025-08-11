// app/dashboard/users/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function AdminUserPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch("/api/admin/user");
    const result = await res.json();
    setUsers(result);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    const konfirmasi = confirm("Yakin ingin menghapus user ini?");
    if (!konfirmasi) return;

    const res = await fetch(`/api/admin/user/${id}`, { method: "DELETE" });
    if (res.ok) {
      alert("User berhasil dihapus.");
      fetchUsers(); // Refresh data
    } else {
      alert("Gagal menghapus user.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Manajemen User</h1>
      {loading ? (
        <p>Memuat data user...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border shadow rounded">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="px-4 py-2 border">Nama</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Role</th>
                <th className="px-4 py-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{user.name}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border">{user.role}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
