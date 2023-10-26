import { Router } from "express";
import { postTravels } from "../controllers/travels.controllers.js";
import { travelsSchema } from "../schemas/travels.schemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const routerTravels = Router()

routerTravels.post('/travels',validateSchema(travelsSchema) , postTravels)

export default routerTravels