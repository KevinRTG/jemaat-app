// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminDashboard from "./admin-dashboard-client";

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

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session)
    return <p className="text-center mt-10">Silakan login terlebih dahulu.</p>;
  if (session.user.role !== "admin")
    return <p className="text-center mt-10">Anda bukan admin.</p>;

  const rawKeluarga = await prisma.keluarga.findMany();

  const keluarga: Keluarga[] = rawKeluarga.map((kel) => {
    let anggota: Anggota[] = [];

    if (Array.isArray(kel.anggota)) {
      anggota = kel.anggota.filter(
        (a): a is Anggota =>
          typeof a === "object" &&
          a !== null &&
          "nama" in a &&
          "tanggalLahir" in a
      );
    }

    return {
      id: kel.id,
      kepalaKeluarga: kel.kepalaKeluarga,
      noKK: kel.noKK,
      alamat: kel.alamat,
      anggota,
    };
  });

  return <AdminDashboard keluarga={keluarga} />;
}
