import { Request, Response } from "express";

import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { idDeliveryman } = request;
    const { id: idDelivery } = request.params;

    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const delivery = await updateEndDateUseCase.execute({
      idDelivery,
      idDeliveryman,
    });

    return response.json(delivery);
  }
}
