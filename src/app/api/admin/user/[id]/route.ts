// /api/admin/user/[id].ts

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const userId = url.pathname.split("/").pop(); // ambil id dari URL

    if (!userId) {
      return NextResponse.json({ error: "ID tidak ditemukan" }, { status: 400 });
    }

    // Hapus semua data terkait user
    await prisma.account.deleteMany({ where: { userId } });
    await prisma.session.deleteMany({ where: { userId } });
    await prisma.keluarga.deleteMany({ where: { userId } });

    // Terakhir, hapus user-nya
    await prisma.user.delete({ where: { id: userId } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Gagal hapus user:", error);
    return NextResponse.json({ success: false, error: "Gagal menghapus user." }, { status: 500 });
  }
}

