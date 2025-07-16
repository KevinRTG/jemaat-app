// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminDashboard from "./admin-dashboard-client";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) return <p className="text-center mt-10">Silakan login terlebih dahulu.</p>;
  if (session.user.role !== "admin") return <p className="text-center mt-10">Anda bukan admin.</p>;

  const keluarga = await prisma.keluarga.findMany();

  return <AdminDashboard keluarga={keluarga} />;
}
