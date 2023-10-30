import httpStatus from "http-status";
import { travelsService } from "../services/travels.services.js";

export async function postTravels(req, res){
    const {passengerId , flightId} = req.body;

    await travelsService.findIdFlifght(flightId)

    await travelsService.findIdPassenger(passengerId)

    await travelsService.insertTravels(passengerId , flightId)
        
    const travel = await travelsService.getTravels(passengerId , flightId)
    console.log(travel);

    res.status(httpStatus.CREATED).send(travel.rows[0])
  
}