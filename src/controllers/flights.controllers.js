import { getFlights, insertFlights } from "../repositories/flights.repository.js";

export async function postFlights(req, res){
    const {origin, destination, date} = req.body;

    try{
        
        await insertFlights(origin, destination, date)
        
        const fly = await getFlights(origin, destination, date)
        console.log(fly);

        res.status(201).send(fly.rows[0])
    }catch (err) {
        console.log(err);
        res.status(500).send(err.message)
    }
}