/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Society" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "registrationNo" TEXT,
    "billingPeriod" TEXT NOT NULL DEFAULT 'monthly',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Society_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlatPlot" (
    "id" SERIAL NOT NULL,
    "flatNumber" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "societyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FlatPlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bill" (
    "id" SERIAL NOT NULL,
    "period" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "flatPlotId" INTEGER NOT NULL,
    "societyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillPayment" (
    "id" SERIAL NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "billId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BillPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penalty" (
    "id" SERIAL NOT NULL,
    "reason" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "issuedDate" TIMESTAMP(3) NOT NULL,
    "flatPlotId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Penalty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Complaint" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "societyId" INTEGER NOT NULL,
    "flatPlotId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Committee" (
    "id" SERIAL NOT NULL,
    "post" TEXT NOT NULL,
    "memberName" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "societyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Committee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FlatPlot" ADD CONSTRAINT "FlatPlot_societyId_fkey" FOREIGN KEY ("societyId") REFERENCES "Society"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_societyId_fkey" FOREIGN KEY ("societyId") REFERENCES "Society"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_flatPlotId_fkey" FOREIGN KEY ("flatPlotId") REFERENCES "FlatPlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillPayment" ADD CONSTRAINT "BillPayment_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penalty" ADD CONSTRAINT "Penalty_flatPlotId_fkey" FOREIGN KEY ("flatPlotId") REFERENCES "FlatPlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_societyId_fkey" FOREIGN KEY ("societyId") REFERENCES "Society"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_flatPlotId_fkey" FOREIGN KEY ("flatPlotId") REFERENCES "FlatPlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Committee" ADD CONSTRAINT "Committee_societyId_fkey" FOREIGN KEY ("societyId") REFERENCES "Society"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
