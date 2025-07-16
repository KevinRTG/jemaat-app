import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session || session.user.role !== "admin") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  if (req.method === "GET") {
    const data = await prisma.keluarga.findMany({
      include: { user: true },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json(data);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
