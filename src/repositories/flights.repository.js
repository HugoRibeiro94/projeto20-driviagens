import db from "../database/database.connection.js";

function insertFlights(origin, destination, date){
    const result = db.query(`INSERT INTO flights (destination, origin, date) VALUES ('${destination}', '${origin}', '${date}');`)
    return result
}

function getFlights(){
    const result = db.query(`SELECT * FROM flights ORDER BY id DESC LIMIT 1;`)
    return result
}

function findIdDestination(destination){
    const result = db.query(`SELECT * FROM cities WHERE id = '${destination}';`)
    return result
}

function  findIdOrigin(origin){
    const result = db.query(`SELECT * FROM cities WHERE id = '${origin}';`)
    return result
}

export const flightsRepository = {insertFlights , getFlights , findIdDestination , findIdOrigin}