import { Request, Response } from "express";

import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { idDeliveryman } = request;
    const { id: idDelivery } = request.params;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const delivery = await updateDeliverymanUseCase.execute({
      idDelivery,
      idDeliveryman,
    });

    return response.json(delivery);
  }
}
