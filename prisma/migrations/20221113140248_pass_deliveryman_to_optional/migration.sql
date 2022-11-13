-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_idDeliveryman_fkey";

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "idDeliveryman" DROP NOT NULL,
ALTER COLUMN "endAt" DROP NOT NULL,
ALTER COLUMN "endAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_idDeliveryman_fkey" FOREIGN KEY ("idDeliveryman") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
