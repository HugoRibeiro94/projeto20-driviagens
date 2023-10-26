import { getTravels, insertTravels } from "../repositories/travels.repository.js";

export async function postTravels(req, res){
    const {passengerId , flightId} = req.body;

    try{
        
        await insertTravels(passengerId , flightId)
        
        const travel = await getTravels(passengerId , flightId)
        console.log(travel);

        res.status(201).send(travel.rows[0])
    }catch (err) {
        console.log(err);
        res.status(500).send(err.message)
    }
}