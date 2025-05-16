-- DropForeignKey
ALTER TABLE "Classes" DROP CONSTRAINT "Classes_approvedById_fkey";

-- DropForeignKey
ALTER TABLE "Classes" DROP CONSTRAINT "Classes_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Classes" DROP CONSTRAINT "Classes_registredById_fkey";

-- AlterTable
ALTER TABLE "Classes" ALTER COLUMN "registredById" DROP NOT NULL,
ALTER COLUMN "approvedById" DROP NOT NULL,
ALTER COLUMN "profileId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_registredById_fkey" FOREIGN KEY ("registredById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
