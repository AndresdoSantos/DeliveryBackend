import { Request, Response } from "express";

import { CreateDelveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { idClient, itemName } = request.body;

    const createDelveryUseCase = new CreateDelveryUseCase();

    const delivery = await createDelveryUseCase.execute({
      idClient,
      itemName,
    });

    return response.json(delivery);
  }
}
