"use client";

import { useState } from "react";

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const res = await fetch("/api/kontak", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setSubmitted(true);
      e.currentTarget.reset(); // Reset form setelah submit
    } else {
      alert("Gagal mengirim pesan. Coba lagi nanti.");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Kontak Sekretariat</h1>

      <p className="text-gray-700 mb-4">
        Jika Anda memiliki pertanyaan, mengalami kendala, atau membutuhkan bantuan terkait sistem pendataan jemaat,
        silakan hubungi sekretariat melalui salah satu cara berikut:
      </p>

      <div className="space-y-3 text-gray-800">
        <p>
          <strong>📞 Telepon / WA:</strong>{" "}
          <a href="https://wa.me/6285694682877" target="_blank" className="text-blue-600 hover:underline" rel="noopener noreferrer">
            +62 812-3456-7890
          </a>
        </p>
        <p>
          <strong>📧 Email:</strong>{" "}
          <a href="mailto:sekretariat@gereja.com" className="text-blue-600 hover:underline">
            sekretariat@gereja.com
          </a>
        </p>
        <p><strong>🏛️ Alamat:</strong> Jl. Damai No. 123, Cikarang Timur, Jawa Barat</p>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Form Pertanyaan Singkat</h2>

        {submitted && (
          <p className="text-green-600 text-sm mb-2">
            ✅ Pesan berhasil dikirim! Kami akan menghubungi Anda secepatnya.
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Nama Anda"
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Email atau No. WA"
            required
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Pesan atau pertanyaan Anda..."
            required
            rows={4}
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}
