import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ListKeluarga from "./list";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <p className="text-center mt-10 text-red-500">
        Silakan login terlebih dahulu.
      </p>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2 text-blue-700">
          Selamat Datang, {session.user.name}
        </h1>
        <p className="text-gray-700 mb-4">
          Berikut adalah daftar kartu keluarga yang telah Anda daftarkan.
        </p>
        <Link
          href="/form-keluarga/form"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Daftar Jemaat
        </Link>
      </div>

      <ListKeluarga userId={session.user.id} />
    </div>
  );
}
