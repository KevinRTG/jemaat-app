// scripts/setAdmin.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@gko.com"; // Ganti dengan email user yang ingin jadi admin

  const user = await prisma.user.update({
    where: { email },
    data: { role: "admin" },
  });

  console.log(`✅ User ${user.email} sekarang adalah admin.`);
}

main()
  .catch((e) => {
    console.error("❌ Gagal update user:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
