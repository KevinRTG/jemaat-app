'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";

export default function AdminJemaatPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<any | null>(null);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await fetch("/api/admin/keluarga");
    const result = await res.json();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;
    const res = await fetch(`/api/admin/keluarga/${id}`, { method: "DELETE" });
    res.ok ? (alert("Berhasil dihapus"), fetchData()) : alert("Gagal menghapus");
  };

  const handleExport = () => {
    const rows: any[] = [];
    data.forEach((item) => {
      item.anggota.forEach((anggota: any) => {
        rows.push({
          KepalaKeluarga: item.kepalaKeluarga,
          NoKK: item.noKK,
          Alamat: item.alamat,
          NamaAnggota: anggota.nama,
          Umur: anggota.umur,
          Relasi: anggota.relasi,
          Baptis: anggota.baptis ? "Ya" : "Tidak",
          Sidi: anggota.sidi ? "Ya" : "Tidak",
          DibuatOleh: item.user?.name || "-",
          Tanggal: new Date(item.createdAt).toLocaleDateString(),
        });
      });
    });
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Detail Keluarga");
    XLSX.writeFile(wb, "data_keluarga_detail.xlsx");
  };

  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-500">Dashboard / Data Jemaat</p>
          <h1 className="text-3xl font-bold text-gray-800">Data Jemaat</h1>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/auth/admin-login" })}
          className="bg-red-600 hover:bg-red-700 transition-colors text-white px-5 py-2 rounded-lg shadow"
        >
          Logout
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Cari Kepala Keluarga..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-full max-w-sm"
        />
        <button
          onClick={handleExport}
          className="ml-4 bg-green-600 hover:bg-green-700 transition-colors text-white px-4 py-2 rounded shadow"
        >
          Export ke Excel
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Memuat data keluarga...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-sm uppercase">
              <tr>
                <th className="px-4 py-2 border">Nama KK</th>
                <th className="px-4 py-2 border">No KK</th>
                <th className="px-4 py-2 border">Alamat</th>
                <th className="px-4 py-2 border">Anggota</th>
                <th className="px-4 py-2 border">Dibuat Oleh</th>
                <th className="px-4 py-2 border">Tanggal</th>
                <th className="px-4 py-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {data
                .filter((item) =>
                  item.kepalaKeluarga.toLowerCase().includes(search.toLowerCase())
                )
                .map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border font-medium">{item.kepalaKeluarga}</td>
                    <td className="px-4 py-2 border">{item.noKK}</td>
                    <td className="px-4 py-2 border">{item.alamat}</td>
                    <td className="px-4 py-2 border text-left">
                      {item.anggota.map((anggota: any, index: number) => (
                        <div key={index} className="mb-1">
                          <span className="font-semibold">
                            {index + 1}. {anggota.nama}
                          </span>
                          <br />
                          <span className="text-xs">
                            ({anggota.umur} th, {anggota.relasi}) - Baptis: {anggota.baptis ? "Ya" : "Tidak"},
                            Sidi: {anggota.sidi ? "Ya" : "Tidak"}
                          </span>
                        </div>
                      ))}
                    </td>
                    <td className="px-4 py-2 border">{item.user?.name || "-"}</td>
                    <td className="px-4 py-2 border">{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-2 border text-center">
                      <div className="flex gap-1 justify-center">
                       <Link
                            href={`/dashboard/jemaat/${item.id}/edit`}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs shadow"
                          >
                            Edit
                          </Link>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs shadow"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}
