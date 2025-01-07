/*
  Warnings:

  - You are about to drop the column `qr` on the `links` table. All the data in the column will be lost.
  - You are about to drop the column `untilDate` on the `links` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[short_url]` on the table `links` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `qr_url` to the `links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "links" DROP COLUMN "qr",
DROP COLUMN "untilDate",
ADD COLUMN     "qr_url" TEXT NOT NULL,
ADD COLUMN     "timeLapse" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "links_short_url_key" ON "links"("short_url");
