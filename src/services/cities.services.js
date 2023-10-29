import { errors } from "../errors/errors.js";
import { citiesRepository } from "../repositories/cities.repository.js";

async function insertCities (name){
    await citiesRepository.insertCities(name)
}

async function getCities (name){
    const result = await citiesRepository.getCities(name)

    return result
}

async function existCity(name){
    const result = await citiesRepository.getCities(name)

    if(result.rows.length>0) throw errors.conflict()
    return result
}

export const citiesService = {insertCities , getCities , existCity}