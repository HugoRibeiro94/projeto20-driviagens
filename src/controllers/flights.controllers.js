import httpStatus from "http-status";
import { errors } from "../errors/errors.js";
import { flightsService } from "../services/flights.services.js";
import dayjs from "dayjs";

export async function postFlights(req, res){
  const {origin, destination, date} = req.body;

  await flightsService.dateValidation(date)

  if(origin === destination) throw errors.conflictCities()
 
  await flightsService.findIdDestination(destination)

  await flightsService.findIdOrigin(origin)

  await flightsService.insertFlights(origin, destination, date)
    
  const fly = await flightsService.getFlights()

  res.status(httpStatus.CREATED).send(fly.rows[0])
}

export async function getAllFlights(req, res){
  const {origin , destination} = req.query
  
  const flights = await flightsService.getAllFlights(origin , destination)

  res.send(flights.rows)
}