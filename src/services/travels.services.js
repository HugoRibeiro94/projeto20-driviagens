import { errors } from "../errors/errors.js";
import { travelsRepository } from "../repositories/travels.repository.js";

async function insertTravels (passengerId , flightId){
    await travelsRepository.insertTravels(passengerId , flightId)
}

async function getTravels (passengerId , flightId){
    const result = await travelsRepository.getTravels(passengerId , flightId)

    return result
}

async function findIdFlifght(flightId){
    const result = await travelsRepository.findIdFlifght(flightId)

    if(result.rows.length === 0) throw errors.notFound("Voo")
    return result
}
async function findIdPassenger(passengerId){
    const result = await travelsRepository.findIdPassenger(passengerId)

    if(result.rows.length === 0) throw errors.notFound("Passageiro")
    return result
}

export const travelsService = {insertTravels , getTravels , findIdFlifght , findIdPassenger}


// - [ ]  O id do passageiro e do vôo devem ser ids existentes. Caso não sejam, emita o erro `404 (Not Found)`.
