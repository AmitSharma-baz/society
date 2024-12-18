/*
  Warnings:

  - Added the required column `issettled` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paidamount` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remainingAmount` to the `Bill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bill" ADD COLUMN     "issettled" BOOLEAN NOT NULL,
ADD COLUMN     "paidamount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "remainingAmount" DOUBLE PRECISION NOT NULL;
