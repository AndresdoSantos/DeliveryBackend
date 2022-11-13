import { Request, Response } from "express";

import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

export class FindAllDeliveriesConrtoller {
  async handle(request: Request, response: Response) {
    const { idClient } = request;

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

    const deliveries = await findAllDeliveriesUseCase.execute(idClient);

    return response.json(deliveries);
  }
}
