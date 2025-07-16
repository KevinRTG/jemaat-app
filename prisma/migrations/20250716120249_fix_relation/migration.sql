-- DropForeignKey
ALTER TABLE "Keluarga" DROP CONSTRAINT "Keluarga_userId_fkey";

-- AddForeignKey
ALTER TABLE "Keluarga" ADD CONSTRAINT "Keluarga_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
