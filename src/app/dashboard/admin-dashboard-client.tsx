"use client";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useMemo } from "react";

// ✅ Definisikan tipe anggota dan keluarga
type Anggota = {
  nama: string;
  tanggalLahir: string;
};

type Keluarga = {
  id: string;
  kepalaKeluarga: string;
  noKK: string;
  alamat: string;
  anggota: Anggota[];
};

export default function AdminDashboard({ keluarga }: { keluarga: Keluarga[] }) {
  let dewasa = 0;
  let anak = 0;
  const pertahun: Record<string, number> = {};

  keluarga.forEach((kel) => {
    kel.anggota.forEach((a) => {
      const tahun = new Date(a.tanggalLahir).getFullYear().toString();
      const umur = new Date().getFullYear() - parseInt(tahun);

      if (umur >= 17) dewasa++;
      else anak++;

      pertahun[tahun] = (pertahun[tahun] || 0) + 1;
    });
  });

  const dataGrafik = useMemo(
    () =>
      Object.entries(pertahun)
        .map(([tahun, jumlah]) => ({ tahun, jumlah }))
        .sort((a, b) => parseInt(a.tahun) - parseInt(b.tahun)),
    [pertahun]
  );

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(dataGrafik);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Grafik");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "grafik-pertumbuhan-jemaat.xlsx");
  };

  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-700">Dashboard Admin</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow p-4">
          <p className="text-sm text-gray-500">Total Jemaat</p>
          <p className="text-2xl font-bold text-blue-700">{dewasa + anak}</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <p className="text-sm text-gray-500">Dewasa</p>
          <p className="text-2xl font-bold text-green-600">{dewasa}</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <p className="text-sm text-gray-500">Anak-anak</p>
          <p className="text-2xl font-bold text-pink-600">{anak}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Grafik Pertumbuhan Jemaat per Tahun Lahir</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataGrafik} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tahun" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="jumlah" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <button
          onClick={handleDownload}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          📥 Download Data Grafik
        </button>
      </div>
    </div>
  );
}
