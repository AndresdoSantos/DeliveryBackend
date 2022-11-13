import { prisma } from "../../../../../database/prismaClient";

export class FindAllDeliveriesUseCase {
  async execute(idClient: string) {
    const deliveries = await prisma.clients.findMany({
      where: { id: idClient },
      include: {
        deliveries: true,
      },
    });

    return deliveries;
  }
}
