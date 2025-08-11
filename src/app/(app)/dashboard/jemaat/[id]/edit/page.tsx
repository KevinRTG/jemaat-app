// app/dashboard/jemaat/[id]/edit/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditJemaatPage() {
  const router = useRouter();
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/keluarga/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/admin/keluarga/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      alert("Data berhasil diperbarui!");
      router.push("/dashboard/jemaat");
    } else {
      alert("Gagal memperbarui data.");
    }
  };

  if (loading) return <p>Memuat...</p>;
  if (!data) return <p>Data tidak ditemukan</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Data Jemaat</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border px-3 py-2 rounded"
          value={data.kepalaKeluarga}
          onChange={(e) => setData({ ...data, kepalaKeluarga: e.target.value })}
          placeholder="Kepala Keluarga"
        />
        <input
          className="w-full border px-3 py-2 rounded"
          value={data.noKK}
          onChange={(e) => setData({ ...data, noKK: e.target.value })}
          placeholder="Nomor KK"
        />
        <textarea
          className="w-full border px-3 py-2 rounded"
          value={data.alamat}
          onChange={(e) => setData({ ...data, alamat: e.target.value })}
          placeholder="Alamat"
        />
        {/* Jika ingin edit anggota, bisa tambahkan field di sini */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
