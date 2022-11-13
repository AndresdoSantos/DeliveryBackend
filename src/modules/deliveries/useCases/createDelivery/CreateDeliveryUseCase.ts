import { prisma } from "../../../../database/prismaClient";

interface ICreateDelivery {
  itemName: string;
  idClient: string;
}

export class CreateDelveryUseCase {
  async execute({ idClient, itemName }: ICreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        idClient,
        itemName,
      },
    });

    return delivery;
  }
}
