-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_personId_fkey";

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
