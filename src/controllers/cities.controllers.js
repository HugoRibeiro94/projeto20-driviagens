import { getCities, insertCities } from "../repositories/cities.repository.js";

export async function postCities(req, res){
    const {name} = req.body;

    try{

        await insertCities(name)
        
        const city = await getCities(name)
        console.log(city);

        res.status(201).send(city.rows[0])
    }catch (err) {
        console.log(err);
        res.status(500).send(err.message)
    }
}