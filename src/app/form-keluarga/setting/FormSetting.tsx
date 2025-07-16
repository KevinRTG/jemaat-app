'use client';

import { useState } from 'react';

export default function FormSetting({ userId }: { userId: string }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/user/setting', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, id: userId }), // kirim ID
      });

      if (res.ok) {
        alert('Pengaturan berhasil diperbarui!');
      } else {
        alert('Gagal memperbarui pengaturan');
      }
    } catch {
      alert('Terjadi kesalahan');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Pengaturan Akun</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Nama Lengkap"
          value={form.name}
          onChange={handleChange}
          className="input"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="input"
        />
        <input
          name="password"
          type="password"
          placeholder="Password Baru"
          value={form.password}
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="btn bg-blue-600 text-white">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
