import { Router } from "express";
import { getAllFlights, postFlights } from "../controllers/flights.controllers.js";
import { flightsSchema } from "../schemas/flights.schemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const routerFlights = Router()

routerFlights.post('/flights',validateSchema(flightsSchema) , postFlights)

routerFlights.get('/flights', getAllFlights)

export default routerFlights