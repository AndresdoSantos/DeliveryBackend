import { hash } from "bcrypt";

import { prisma } from "../../../../../database/prismaClient";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    const clientExist = await prisma.clients.findUnique({
      where: {
        username,
      },
    });

    if (clientExist) {
      throw new Error("Client already exists!");
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        password: hashPassword,
        username,
      },
    });

    return client;
  }
}
