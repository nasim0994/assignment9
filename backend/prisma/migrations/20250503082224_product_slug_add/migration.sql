/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `foods` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `foods` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foods" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "foods_slug_key" ON "foods"("slug");
