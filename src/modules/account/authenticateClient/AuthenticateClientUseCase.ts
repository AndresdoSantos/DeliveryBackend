import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  name: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ name, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        name,
      },
    });

    if (!client) {
      throw new Error("Name or password invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Name or password invalid!");
    }

    const token = sign({ name }, "cd9723fb07da1f3551efc83768cb61aa", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
