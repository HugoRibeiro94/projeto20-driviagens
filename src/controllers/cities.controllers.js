import httpStatus from "http-status";
import { citiesService } from "../services/cities.services.js";

export async function postCities(req, res){
    const {name} = req.body;

    await citiesService.existCity(name)
    
    await citiesService.insertCities(name)

    const city = await citiesService.getCities(name)

    res.status(httpStatus.CREATED).send(city.rows[0])
}