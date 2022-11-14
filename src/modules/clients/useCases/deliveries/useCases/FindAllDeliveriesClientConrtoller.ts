import { Request, Response } from "express";

import { FindAllDeliveriesClientUseCase } from "./FindAllDeliveriesClientUseCase";

export class FindAllDeliveriesClientConrtoller {
  async handle(request: Request, response: Response) {
    const { idClient } = request;

    const findAllDeliveriesClientUseCase = new FindAllDeliveriesClientUseCase();

    const deliveries = await findAllDeliveriesClientUseCase.execute(idClient);

    return response.json(deliveries);
  }
}
