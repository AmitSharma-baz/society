/*
  Warnings:

  - Added the required column `IsRented` to the `FlatPlot` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OccupantType" AS ENUM ('Family', 'Renter');

-- AlterTable
ALTER TABLE "FlatPlot" ADD COLUMN     "IsRented" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Occupant" (
    "id" SERIAL NOT NULL,
    "flatPlotId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "relation" TEXT,
    "contact" TEXT,
    "type" "OccupantType" NOT NULL,
    "rentalStart" TIMESTAMP(3),
    "rentalEnd" TIMESTAMP(3),
    "rentAmount" DOUBLE PRECISION,

    CONSTRAINT "Occupant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Occupant" ADD CONSTRAINT "Occupant_flatPlotId_fkey" FOREIGN KEY ("flatPlotId") REFERENCES "FlatPlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
