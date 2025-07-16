import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const kontak = await prisma.kontak.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(kontak);
  } catch (error) {
    console.error("Error fetching kontak:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
