import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session || session.user.role !== "admin") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    await prisma.keluarga.delete({ where: { id: String(id) } });
    return res.status(200).json({ message: "Deleted" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const body = await req.json();

  const updated = await prisma.keluarga.update({
    where: { id: id as string },
    data: {
      kepalaKeluarga: body.kepalaKeluarga,
      noKK: body.noKK,
      alamat: body.alamat,
      // anggota bisa ditambahkan jika diperlukan
    },
  });

  res.json(updated);
}

