import { getPassengers, insertPassengers } from "../repositories/passengers.repository.js";

export async function postPassengers(req, res){
    const {firstName , lastName} = req.body;

    try{
        
        await insertPassengers(firstName , lastName)
        
        const passenger = await getPassengers(firstName , lastName)
        console.log(passenger);

        res.status(201).send(passenger.rows[0])
    }catch (err) {
        console.log(err);
        res.status(500).send(err.message)
    }
}