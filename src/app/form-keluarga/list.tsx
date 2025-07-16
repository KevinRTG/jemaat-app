'use client';

import { useEffect, useState } from "react";

export default function ListKeluarga({ userId }: { userId: string }) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/kartu-keluarga/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      const result = await res.json();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, [userId]);

  if (loading) return <p className="text-center mt-4">Memuat data...</p>;

  if (data.length === 0) return <p className="text-center mt-4">Belum ada data keluarga.</p>;

  return (
    <div className="mt-10 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Daftar Kartu Keluarga Anda</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Kepala Keluarga</th>
            <th className="p-2 border">No KK</th>
            <th className="p-2 border">Alamat</th>
            <th className="p-2 border">Anggota</th>
            <th className="p-2 border">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="p-2 border">{item.kepalaKeluarga}</td>
              <td className="p-2 border">{item.noKK}</td>
              <td className="p-2 border">{item.alamat}</td>
              <td className="p-2 border">{item.anggota.length} orang</td>
              <td className="p-2 border">{new Date(item.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
