import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Name or password invalid!");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Name or password invalid!");
    }

    const token = sign({ username }, "cd9723fb07da1f3551efc83768cb61yy", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
