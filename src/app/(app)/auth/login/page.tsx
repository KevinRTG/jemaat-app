'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/form-keluarga");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold text-center">Login</h1>

      {/* Form Login Manual */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input w-full border px-4 py-2 rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="input w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="btn w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="text-center text-sm text-gray-500">atau</div>

      {/* Google Login */}
      <button
        onClick={() => {
          console.log("Google login clicked");
          signIn("google", { callbackUrl: "/form-keluarga" })}}
        className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 rounded-md py-2 px-4 shadow hover:bg-gray-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="h-5 w-5"
        >
          <path fill="#EA4335" d="M24 9.5c3.29 0 6.24 1.13 8.57 3.36l6.38-6.38C34.6 2.61 29.6.5 24 .5 14.98.5 7.47 6.62 4.59 14.88l7.57 5.88C13.31 14.45 18.3 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.1 24.5c0-1.6-.14-3.1-.4-4.5H24v9h12.6c-.5 2.6-2 4.8-4.1 6.3l6.5 5.1c3.8-3.4 6.1-8.5 6.1-15z"/>
          <path fill="#FBBC05" d="M11.3 28.8c-.7-2-1.1-4.2-1.1-6.3s.4-4.3 1.1-6.3l-7.6-5.9c-1.6 3.2-2.5 6.8-2.5 12.2s.9 9 2.5 12.2l7.6-5.9z"/>
          <path fill="#34A853" d="M24 46c5.6 0 10.4-1.8 13.9-5.1l-6.5-5.1c-2 1.4-4.6 2.2-7.4 2.2-5.7 0-10.6-3.8-12.3-9l-7.6 5.9C7.5 41.4 14.9 46 24 46z"/>
          <path fill="none" d="M0 0h48v48H0z" />
        </svg>
        <span className="text-sm text-gray-700 font-medium">
          Login dengan Google
        </span>
      </button>

      {/* Tombol Register */}
      <div className="text-center">
        <p className="text-sm text-gray-600 mt-4">
          Belum punya akun?{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push("/auth/register");
            }}
            className="text-blue-600 hover:underline font-medium"
            >
            Daftar di sini
          </button>
        </p>
      </div>
    </div>
  );
}
