import db from "../database/database.connection.js";

function insertFlights(origin, destination, dateDB){
    const result = db.query(`INSERT INTO flights (destination, origin, date) VALUES ($1, $2, $3);`,[ destination, origin, dateDB])
    return result
}

function getFlights(){
    const result = db.query(`SELECT * FROM flights ORDER BY id DESC LIMIT 1;`)
    return result
}

function findIdDestination(destination){
    const result = db.query(`SELECT * FROM cities WHERE id = $1;`,[destination])
    return result
}

function  findIdOrigin(origin){
    const result = db.query(`SELECT * FROM cities WHERE id = $1;`,[origin])
    return result
}

function getAllFlights(origin , destination){
    let result
    
    if(origin && destination){
        result = db.query(`
        SELECT flights.id, "origem".name AS origin, "destinationCity".name AS destination, flights.date
            FROM flights
            JOIN cities AS "origem" ON "origem".id = flights.origin 
            JOIN cities AS "destinationCity" ON "destinationCity".id = flights.destination
            WHERE "destinationCity".name = $1 AND "origem".name = $2;`,[destination,origin]
    )}

    if(origin && !destination){
        result = db.query(`
            SELECT flights.id, "origem".name AS origin, "destinationCity".name AS destination, flights.date
            FROM flights
            JOIN cities AS "origem" ON "origem".id = flights.origin 
            JOIN cities AS "destinationCity" ON "destinationCity".id = flights.destination
            WHERE "origem".name = $1;`,[origin]
        )
    }

    if(destination && !origin){
        result = db.query(`
            SELECT flights.id, "origem".name AS origin, "destinationCity".name AS destination, flights.date
            FROM flights
            JOIN cities AS "origem" ON "origem".id = flights.origin 
            JOIN cities AS "destinationCity" ON "destinationCity".id = flights.destination
            WHERE "destinationCity".name = $1;`,[destination]
            )
    }

    if(!origin && !destination){
        result = db.query(`
            SELECT flights.id, "origem".name AS origin, "destino".name AS destination, flights.date
            FROM flights
            JOIN cities AS "origem" ON "origem".id = flights.origin 
            JOIN cities AS "destino" ON "destino".id = flights.destination
        ;`)
    }
    return result
}

export const flightsRepository = {insertFlights , getFlights , findIdDestination , findIdOrigin , getAllFlights}