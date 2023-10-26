import db from "../database/database.connection.js";

export function insertCities(name){
    const result = db.query(`INSERT INTO cities ("name") VALUES ('${name}');`)
    return result
}

export function getCities(name){
    const result = db.query(`SELECT * FROM cities WHERE name = '${name}';`)
    return result
}