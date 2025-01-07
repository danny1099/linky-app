/*
  Warnings:

  - You are about to drop the column `temporal` on the `links` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "links_slug_key";

-- AlterTable
ALTER TABLE "links" DROP COLUMN "temporal",
ADD COLUMN     "tags" TEXT;
