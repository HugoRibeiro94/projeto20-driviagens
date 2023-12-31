import { passengersRepository } from "../repositories/passengers.repository.js";

async function insertPassengers (firstName,lastName){
    await passengersRepository.insertPassengers(firstName,lastName)
}

async function getPassengers (firstName,lastName){
    const result = await passengersRepository.getPassengers(firstName,lastName)
    return result
}

async function getPassengersTravels (name){
    const result = await passengersRepository.getPassengersTravels(name)
    return result
}

export const passengersService = {insertPassengers , getPassengers , getPassengersTravels}