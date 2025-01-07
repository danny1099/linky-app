/*
  Warnings:

  - Added the required column `mode` to the `clicks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clicks" ADD COLUMN     "mode" TEXT NOT NULL,
ALTER COLUMN "device" DROP NOT NULL;
