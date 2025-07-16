'use client';

import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

type Anggota = {
  nama: string;
  umur: string;
  relasi: string;
  status: string;
};

export default function FormKeluargaPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [form, setForm] = useState({
    kepalaKeluarga: '',
    noKK: '',
    alamat: '',
  });

  const [anggota, setAnggota] = useState<Anggota[]>([
    { nama: '', umur: '', relasi: '', status: '' },
  ]);

  useEffect(() => {
    getSession().then((session) => {
      if (session?.user?.id) {
        setUserId(session.user.id);
      }
    });
  }, []);

  const handleAnggotaChange = (index: number, field: keyof Anggota, value: string) => {
    const updated = [...anggota];
    updated[index][field] = value;
    setAnggota(updated);
  };

  const addAnggota = () => {
    setAnggota([...anggota, { nama: '', umur: '', relasi: '', status: '' }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      alert('User tidak terdeteksi.');
      return;
    }

    const res = await fetch('/api/kartu-keluarga', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, anggota, userId }),
    });

    if (res.ok) {
      alert('Data kartu keluarga berhasil disimpan!');
    } else {
      alert('Gagal menyimpan data');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Form Kartu Keluarga Jemaat</h1>

      <input
        placeholder="Nama Kepala Keluarga"
        className="input"
        required
        value={form.kepalaKeluarga}
        onChange={(e) => setForm({ ...form, kepalaKeluarga: e.target.value })}
      />
      <input
        placeholder="Nomor KK"
        className="input"
        required
        value={form.noKK}
        onChange={(e) => setForm({ ...form, noKK: e.target.value })}
      />
      <input
        placeholder="Alamat"
        className="input"
        required
        value={form.alamat}
        onChange={(e) => setForm({ ...form, alamat: e.target.value })}
      />

      <h2 className="text-lg font-semibold mt-6">Anggota Keluarga</h2>
      {anggota.map((a, i) => (
        <div key={i} className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
          <input
            placeholder="Nama"
            className="input"
            value={a.nama}
            onChange={(e) => handleAnggotaChange(i, 'nama', e.target.value)}
          />
          <input
            placeholder="Umur"
            type="number"
            className="input"
            value={a.umur}
            onChange={(e) => handleAnggotaChange(i, 'umur', e.target.value)}
          />
          <input
            placeholder="Relasi"
            className="input"
            value={a.relasi}
            onChange={(e) => handleAnggotaChange(i, 'relasi', e.target.value)}
          />
          <input
            placeholder="Status (Baptis/Sidi)"
            className="input"
            value={a.status}
            onChange={(e) => handleAnggotaChange(i, 'status', e.target.value)}
          />
        </div>
      ))}

      <button type="button" onClick={addAnggota} className="btn bg-gray-500 text-white">
        Tambah Anggota
      </button>

      <div>
        <button type="submit" className="btn bg-blue-600 text-white">
          Simpan Data
        </button>
      </div>
    </form>
  );
}
