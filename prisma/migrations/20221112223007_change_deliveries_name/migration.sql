/*
  Warnings:

  - You are about to drop the `Deliveries` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Deliveries" DROP CONSTRAINT "Deliveries_idClient_fkey";

-- DropForeignKey
ALTER TABLE "Deliveries" DROP CONSTRAINT "Deliveries_idDeliveryman_fkey";

-- DropTable
DROP TABLE "Deliveries";

-- CreateTable
CREATE TABLE "deliveries" (
    "id" TEXT NOT NULL,
    "idClient" TEXT NOT NULL,
    "idDeliveryman" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deliveries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_idDeliveryman_fkey" FOREIGN KEY ("idDeliveryman") REFERENCES "deliveryman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
