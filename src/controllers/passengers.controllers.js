import httpStatus from "http-status";
import { passengersService } from "../services/passengers.services.js";

export async function postPassengers(req, res){
    const {firstName , lastName} = req.body;
        
    await passengersService.insertPassengers(firstName , lastName)
        
    const passenger = await passengersService.getPassengers(firstName , lastName)
    console.log(passenger);

    res.status(httpStatus.CREATED).send(passenger.rows[0])
    
}