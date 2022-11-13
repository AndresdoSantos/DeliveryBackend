import { hash } from "bcrypt";

import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  name: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ password, name }: ICreateClient) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        name: {
          mode: "insensitive",
        },
      },
    });

    if (clientExist) {
      throw new Error("Client already exists!");
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        password: hashPassword,
        name,
      },
    });

    return client;
  }
}
