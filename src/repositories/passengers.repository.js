import db from "../database/database.connection.js";

export function insertPassengers(firstName,lastName){
    const result = db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ('${firstName}', '${lastName}');`)
    return result
}

export function getPassengers(firstName,lastName){
    const result = db.query(`SELECT * FROM passengers WHERE "firstName" = '${firstName}' AND "lastName" = '${lastName}';`)
    return result
}