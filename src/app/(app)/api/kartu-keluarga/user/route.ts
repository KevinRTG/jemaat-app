import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { userId } = await req.json();

  try {
    const keluarga = await prisma.keluarga.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(keluarga);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
