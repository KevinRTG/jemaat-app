import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const { kepalaKeluarga, noKK, alamat, anggota, userId } = body;

  try {
    const keluarga = await prisma.keluarga.create({
      data: {
        kepalaKeluarga,
        noKK,
        alamat,
        anggota, // langsung simpan json
        userId,
      },
    });

    return NextResponse.json(keluarga, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
