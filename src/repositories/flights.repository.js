import db from "../database/database.connection.js";

export function insertFlights(origin, destination, dateDB){
    const result = db.query(`INSERT INTO flights (origin, destination, date) VALUES ('${origin}', '${destination}', '${dateDB}');`)
    return result
}

export function getFlights(origin, destination, dateDB){
    const result = db.query(`SELECT * FROM fligths WHERE origin = '${origin}' AND destination = '${destination}' AND date = '${dateDB}';`)
    return result
}