import { Router } from "express";
import { getPassengersTravels, postPassengers } from "../controllers/passengers.controllers.js";
import { passengerSchema } from "../schemas/passengers.schemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const routerPassengers = Router()

routerPassengers.post('/passengers',validateSchema(passengerSchema) , postPassengers)

routerPassengers.get('/passengers/travels', getPassengersTravels)

export default routerPassengers