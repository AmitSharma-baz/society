/*
  Warnings:

  - You are about to drop the column `IsRented` on the `FlatPlot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FlatPlot" DROP COLUMN "IsRented",
ADD COLUMN     "isrented" BOOLEAN;
