import { prisma } from "../../../../../database/prismaClient";

export class FindAllDeliveriesDeliverymanUseCase {
  async execute(idDeliveryman: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: { id: idDeliveryman },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}
