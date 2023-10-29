import db from "../database/database.connection.js";

function insertPassengers(firstName,lastName){
    const result = db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ('${firstName}', '${lastName}');`)
    return result
}

function getPassengers(firstName,lastName){
    const result = db.query(`SELECT * FROM passengers WHERE "firstName" = '${firstName}' AND "lastName" = '${lastName}';`)
    return result
}

export const passengersRepository = {insertPassengers , getPassengers}