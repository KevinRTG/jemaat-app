"use client";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";


type Anggota = {
  nama: string;
  umur?: number;
  relasi: string;
  baptis: boolean;
  sidi: boolean;
  tanggalLahir?: string;
};

type DataKeluarga = {
  id: string;
  kepalaKeluarga: string;
  noKK: string;
  alamat: string;
  anggota: Anggota[];
  createdAt: string;
  user: { name: string | null };
};

export default function DataMasukPage() {
  const [data, setData] = useState<DataKeluarga[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch("/api/admin/masukan");
    const result = await res.json();
    setData(result);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus data keluarga ini?")) return;

    const res = await fetch(`/api/admin/keluarga/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Data berhasil dihapus.");
      fetchData();
    } else {
      alert("Gagal menghapus data.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleExport = () => {
  const rows: any[] = [];

  data.forEach((item) => {
    item.anggota.forEach((anggota: any) => {
      rows.push({
        KepalaKeluarga: item.kepalaKeluarga,
        NoKK: item.noKK,
        Alamat: item.alamat,
        NamaAnggota: anggota.nama,
        Umur: anggota.umur || "-",
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
  XLSX.utils.book_append_sheet(wb, ws, "Data Masuk");
  XLSX.writeFile(wb, "data_masukan_user.xlsx");
};


  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Data Masuk dari Jemaat</h1>
      {loading ? (
        <p>Memuat data...</p>
      ) : data.length === 0 ? (
        <p>Tidak ada data yang dikirim.</p>
      ) : (
        <div className="space-y-6">
           <div className="flex justify-end mb-4">

            <button
                onClick={() => alert("Fitur edit belum tersedia")}
                className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1 rounded mr-2"
                >
                Edit
            </button>

            <button
                onClick={handleExport}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
                >
                Export ke Excel
            </button>
            </div>

          {data.map((item) => (
            <div key={item.id} className="border rounded p-4 bg-white shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h2 className="text-lg font-semibold">{item.kepalaKeluarga} – {item.noKK}</h2>
                  <p className="text-sm text-gray-500">
                    Dibuat oleh: {item.user?.name || "-"} –{" "}
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                >
                  Hapus
                </button>
              </div>
              <p className="text-sm text-gray-700 mb-2">Alamat: {item.alamat}</p>

              <div className="border-t pt-2 mt-2">
                <p className="font-medium mb-1">Anggota Keluarga:</p>
                <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                  {item.anggota.map((a, i) => (
                    <li key={i}>
                      <span className="font-semibold">{a.nama}</span>{" "}
                      ({a.relasi}, {a.baptis ? "Baptis" : "Belum"}, {a.sidi ? "Sidi" : "Belum"}){" "}
                      {a.umur && `– ${a.umur} tahun`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
