import express from "express";
import "express-async-errors";

import { handlingError } from "./middlewares/handlingError";

import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use(handlingError);

app.listen(3333, () => console.log("Server is running!"));
