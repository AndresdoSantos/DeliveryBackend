import { prisma } from "../../../../../database/prismaClient";

export class FindAllDeliveriesClientUseCase {
  async execute(idClient: string) {
    const deliveries = await prisma.clients.findMany({
      where: { id: idClient },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}
