import httpStatus from "http-status";
import { passengersService } from "../services/passengers.services.js";

export async function postPassengers(req, res){
    const {firstName , lastName} = req.body;
        
    await passengersService.insertPassengers(firstName , lastName)
        
    const passenger = await passengersService.getPassengers(firstName , lastName)

    res.status(httpStatus.CREATED).send(passenger.rows[0])
    
}

export async function getPassengersTravels(req, res){
    const {name} = req.query;
        
    const passengerTravels = await passengersService.getPassengersTravels(name)

    res.send(passengerTravels.rows)
    
}