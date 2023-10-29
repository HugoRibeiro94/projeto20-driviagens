import db from "../database/database.connection.js";

function insertCities(name){
    const result = db.query(`INSERT INTO cities ("name") VALUES ('${name}');`)
    return result
}

function getCities(name){
    const result = db.query(`SELECT * FROM cities WHERE name = '${name}';`)
    return result
}

export const citiesRepository = {insertCities , getCities}