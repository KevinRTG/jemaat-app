'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Registrasi berhasil!");
      router.push("/auth/login");
    } else {
      const data = await res.json();
      alert(data.error || "Terjadi kesalahan");
    }
  };

return (
  <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800">Registrasi Jemaat</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          onChange={handleChange}
          placeholder="Nama"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Daftar
        </button>
      </form>

      <div className="text-center text-sm text-gray-500">atau</div>

      <button
        onClick={() => signIn("google", { callbackUrl: "/form-keluarga" })}
        className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 rounded-md py-2 px-4 shadow hover:bg-gray-100 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
          <path fill="#EA4335" d="M24 9.5c3.29 0 6.24 1.13 8.57 3.36l6.38-6.38C34.6 2.61 29.6.5 24 .5 14.98.5 7.47 6.62 4.59 14.88l7.57 5.88C13.31 14.45 18.3 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.1 24.5c0-1.6-.14-3.1-.4-4.5H24v9h12.6c-.5 2.6-2 4.8-4.1 6.3l6.5 5.1c3.8-3.4 6.1-8.5 6.1-15z"/>
          <path fill="#FBBC05" d="M11.3 28.8c-.7-2-1.1-4.2-1.1-6.3s.4-4.3 1.1-6.3l-7.6-5.9c-1.6 3.2-2.5 6.8-2.5 12.2s.9 9 2.5 12.2l7.6-5.9z"/>
          <path fill="#34A853" d="M24 46c5.6 0 10.4-1.8 13.9-5.1l-6.5-5.1c-2 1.4-4.6 2.2-7.4 2.2-5.7 0-10.6-3.8-12.3-9l-7.6 5.9C7.5 41.4 14.9 46 24 46z"/>
        </svg>
        <span className="text-sm text-gray-700 font-medium">Daftar dengan Google</span>
      </button>

      <div className="text-center text-sm text-gray-600 mt-4">
        Sudah punya akun?{" "}
        <button
          onClick={() => router.push("/auth/login")}
          className="text-blue-600 hover:underline font-medium"
        >
          Login di sini
        </button>
      </div>
    </div>
  </div>
);
}
