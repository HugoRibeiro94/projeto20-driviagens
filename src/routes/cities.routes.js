import { Router } from "express";
import { postCities } from "../controllers/cities.controllers.js";
import { citiesSchema } from "../schemas/cities.schemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const routerCities = Router()

routerCities.post('/cities',validateSchema(citiesSchema) , postCities)

export default routerCities