import httpStatus from "http-status";
import { travelsService } from "../services/travels.services.js";

export async function postTravels(req, res){
    const {passengerId , flightId} = req.body;
    console.log("ola");
    await travelsService.findIdFlifght(flightId)
    console.log("ola2");
    await travelsService.findIdPassenger(passengerId)
    console.log("ola3");
    await travelsService.insertTravels(passengerId , flightId)
    console.log("ola4");
    const travel = await travelsService.getTravels(passengerId , flightId)
    console.log(travel);

    res.status(httpStatus.CREATED).send(travel.rows[0])
  
}