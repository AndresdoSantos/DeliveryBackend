import { Router } from "express";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";

import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";

import { CreateClientController } from "./modules/clients/useCases/createClient/useCases/CreateClientController";
import { FindAllDeliveriesClientConrtoller } from "./modules/clients/useCases/deliveries/useCases/FindAllDeliveriesClientConrtoller";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/useCases/CreateDeliveryController";

import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/useCases/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/useCases/UpdateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/useCases/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/useCases/FindAllDeliveriesDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const findAllDeliveriesClientConrtoller =
  new FindAllDeliveriesClientConrtoller();

const findAllAvailableController = new FindAllAvailableController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);

routes.post("/client/", createClientController.handle);
routes.get(
  "/client/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriesClientConrtoller.handle
);

routes.get(
  "/deliveryman/deliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);
routes.post("/deliveryman/", createDeliverymanController.handle);

routes.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);
routes.post(
  "/delivery/",
  ensureAuthenticateClient,
  createDeliveryController.handle
);
routes.put(
  "/delivery/updateDeliveryman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);
routes.put(
  "/delivery/updateEndDate/:id",
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
);

export { routes };
