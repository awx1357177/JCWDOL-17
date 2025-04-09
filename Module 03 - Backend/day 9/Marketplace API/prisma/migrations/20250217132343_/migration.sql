/*
  Warnings:

  - A unique constraint covering the columns `[noInvoice]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Transaction_status_key";

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_noInvoice_key" ON "Transaction"("noInvoice");
