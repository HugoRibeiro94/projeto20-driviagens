import db from "../database/database.connection.js";

function insertTravels(passengerId , flightId){
    const result = db.query(`INSERT INTO travels ("passengerId" , "flightId") VALUES ('${passengerId}' , '${flightId}');`)
    return result
}

function getTravels(passengerId , flightId){
    const result = db.query(`SELECT * FROM travels ORDER BY id DESC LIMIT 1;`)
    return result
}

function findIdFlifght(flightId){
    const result = db.query(`SELECT * FROM flights WHERE id = '${flightId}';`)
    return result
}

function findIdPassenger(passengerId){
    const result = db.query(`SELECT * FROM passengers WHERE id = '${passengerId}';`)
    return result
}

export const travelsRepository = {insertTravels , getTravels, findIdFlifght , findIdPassenger}