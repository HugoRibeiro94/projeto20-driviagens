import { errors } from "../errors/errors.js";
import { flightsRepository } from "../repositories/flights.repository.js";

async function insertFlights (origin, destination,date){ 
  await flightsRepository.insertFlights(origin, destination, date)
}

async function getFlights (){
  const result = await flightsRepository.getFlights()
  return result 
}

async function existFlights (){
  const result = await flightsRepository.getFlights()
  
  if(result.rows.length>0) throw errors.conflict()
  return result 
}

async function findIdDestination(destination){
  const result = await flightsRepository.findIdDestination(destination)

  if(result.rows.length === 0) throw errors.notFound("Cidade")
  return result
}
async function findIdOrigin(origin){
  const result = await flightsRepository.findIdOrigin(origin)

  if(result.rows.length === 0) throw errors.notFound("Cidade")
  return result
}
export const flightsService = {insertFlights , getFlights , existFlights, findIdOrigin , findIdDestination}


/*function formatarData(data){
    const dateDB = data.split('-');
    if (dateDB.length === 3) {
      const [dia, mes, ano] = dateDB;
      if (dia.length === 2 && mes.length === 2 && ano.length === 4) {
        return `${ano}-${mes}-${dia}`;
      }
    }
  }

  const dateDB = formatarData(date)*/
//- [ ]  A cidades de origem e destino devem ser ids de cidades que existem na tabela `cities`. Caso não sejam, emita o erro `404 (Not Found)`.
//- [ ]  Origem e destino devem ser diferentes. Caso não seja, emita o erro `409 (Conflict)`.
//- [ ]  A data do vôo deve ser maior do que a data atual, caso não seja, emita o erro `422 (Unprocessable Entity)`