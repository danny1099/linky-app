/*
  Warnings:

  - You are about to drop the column `tags` on the `links` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "links" DROP COLUMN "tags",
ADD COLUMN     "temporal" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "untilDate" TIMESTAMP(3);
