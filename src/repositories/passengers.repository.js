import db from "../database/database.connection.js";

function insertPassengers(firstName,lastName){
    const result = db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,[firstName,lastName])
    return result
}

function getPassengers(firstName,lastName){
    const result = db.query(`SELECT * FROM passengers ORDER BY id DESC LIMIT 1;`)
    return result
}

function getPassengersTravels(name){
    const result = db.query(`SELECT passengers."firstName" || ' ' || passengers."lastName" AS passenger, COUNT("flightId") AS travels
	FROM passengers
	LEFT JOIN travels ON passengers.id = travels."passengerId"
	GROUP BY passenger
    ;`)
    return result
}

export const passengersRepository = {insertPassengers , getPassengers , getPassengersTravels}