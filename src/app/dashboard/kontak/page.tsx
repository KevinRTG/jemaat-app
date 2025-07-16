// app/dashboard/kontak/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Kontak } from "@prisma/client";


export default function KontakMasukPage() {
  const [data, setData] = useState<Kontak[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/kontak")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Kontak Masuk</h1>
      {loading ? (
        <p>Memuat pesan...</p>
      ) : data.length === 0 ? (
        <p>Tidak ada pesan masuk.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border shadow rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Nama</th>
                <th className="px-4 py-2 border">Email/WA</th>
                <th className="px-4 py-2 border">Pesan</th>
                <th className="px-4 py-2 border">Tanggal</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {data.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border font-medium">{item.name}</td>
                  <td className="px-4 py-2 border">{item.email}</td>
                  <td className="px-4 py-2 border">{item.message}</td>
                  <td className="px-4 py-2 border">{new Date(item.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
