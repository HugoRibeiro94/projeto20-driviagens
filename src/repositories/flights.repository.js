import db from "../database/database.connection.js";

export function insertFlights(origin, destination, date){
    const result = db.query(`INSERT INTO flights (origin, destination, date) VALUES ('${origin}', '${destination}', '${date}');`)
    return result
}

export function getFlights(origin, destination, date){
    const result = db.query(`SELECT * FROM fligths WHERE origin = '${origin}' AND destination = '${destination}' AND date = '${date}';`)
    return result
}