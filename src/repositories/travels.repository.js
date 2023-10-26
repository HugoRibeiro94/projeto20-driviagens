import db from "../database/database.connection.js";

export function insertTravels(passengerId , flightId){
    const result = db.query(`INSERT INTO travels ("passengerId" , "flightId") VALUES ('${passengerId}' , '${flightId}');`)
    return result
}

export function getTravels(passengerId , flightId){
    const result = db.query(`SELECT * FROM travels WHERE "passengerId" = '${passengerId}' AND "flightId" = '${flightId}' ;`)
    return result
}