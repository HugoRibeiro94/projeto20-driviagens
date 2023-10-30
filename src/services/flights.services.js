import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import { flightsRepository } from "../repositories/flights.repository.js";

async function dateValidation(date){
  function formatarData(data){
    const dateDB = data.split('-');
    if (dateDB.length === 3) {
      const [dia, mes, ano] = dateDB;
      if (dia.length === 2 && mes.length === 2 && ano.length === 4) {
        return `${ano}-${mes}-${dia}`;
      }
    }
  }
  
  const dateDB = formatarData(date)
  console.log(dateDB);

  const dataAtual = dayjs(Date.now()).format('YYYY-MM-DD')
  console.log(dataAtual);

  const dateValid = dayjs(dateDB).isBefore(dayjs(dataAtual))
  console.log(dateValid);

  if(dateValid === true) throw errors.incompleteDataError()
}
async function insertFlights (origin, destination,date){ 
  
function formatarData(data){
  const dateDB = data.split('-');
  if (dateDB.length === 3) {
    const [dia, mes, ano] = dateDB;
    if (dia.length === 2 && mes.length === 2 && ano.length === 4) {
      return `${ano}-${mes}-${dia}`;
    }
  }
}

const dateDB = formatarData(date)
console.log(dateDB);
  await flightsRepository.insertFlights(origin, destination, dateDB)
}

async function getFlights (){
  const result = await flightsRepository.getFlights()
  result.rows.forEach( item => item.date = dayjs(item.date).format("DD-MM-YYYY"))
  
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

async function getAllFlights(origin , destination){
  const result = await flightsRepository.getAllFlights(origin , destination)

  const dataAtual = new Date();
  
  const datas = result.rows.map( item => item.date = dayjs(item.date).format("YYYY-MM-DD"))
  console.log(datas);
  const datasOrdenadas = datas.sort((a, b) => {
    const dataA = new Date(a);
    const dataB = new Date(b);
    const diferencaA = Math.abs(dataA - dataAtual);
    const diferencaB = Math.abs(dataB - dataAtual);
    return diferencaA - diferencaB;
  });
  
  console.log(datasOrdenadas);
  console.log(result.rows);
  
  result.rows.forEach( item => item.date = dayjs(item.date).format("DD-MM-YYYY"))
  return result
}

export const flightsService = {insertFlights , getFlights , existFlights, findIdOrigin , findIdDestination , getAllFlights ,dateValidation}


