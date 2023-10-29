import dayjs from "dayjs";
import { getFlights, insertFlights } from "../repositories/flights.repository.js";

export async function postFlights(req, res){
    const {origin, destination, date} = req.body;
    
    try{    
        console.log(date);
        
        function formatarData(data) {
            const partes = data.split('-');
            if (partes.length === 3) {
              const [dia, mes, ano] = partes;
              if (dia.length === 2 && mes.length === 2 && ano.length === 4) {
                return `${ano}-${mes}-${dia}`;
              }
            }
            return null; // Retorna nulo se o formato de entrada for inválido.
          }
          
        const dateDB = formatarData(date);
        console.log(dateDB);
        
        await insertFlights(origin, destination, dateDB)
        const fly = await getFlights(origin, destination, dateDB)
        const obj = {
            ...fly.rows[0],
            date: date
        }

        res.status(201).send(obj)
    }catch (err) {
        console.log(err);
        res.status(500).send(err.message)
    }
}