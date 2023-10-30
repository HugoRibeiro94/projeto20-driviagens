import httpStatus from "http-status";
import { errors } from "../errors/errors.js";
import { flightsService } from "../services/flights.services.js";
import dayjs from "dayjs";

export async function postFlights(req, res){
  const {origin, destination, date} = req.body;

  const dataAtual = dayjs(Date.now()).format('SSSSSS')
  console.log(dataAtual);

  const dateMiliseconds = dayjs(date).format('SSS')
  console.log(dateMiliseconds);

  if(origin === destination) throw errors.conflictCities()

 
  await flightsService.findIdDestination(destination)

  await flightsService.findIdOrigin(origin)

  //await flightsService.existFlights(origin, destination, date)

  await flightsService.insertFlights(origin, destination, date)
    
  const fly = await flightsService.getFlights()

  res.status(httpStatus.CREATED).send(fly.rows[0])
}