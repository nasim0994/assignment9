/*
  Warnings:

  - You are about to drop the column `image` on the `categories` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "image",
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "categories_slug_key" ON "categories"("slug");
