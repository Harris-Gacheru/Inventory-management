import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config()

let dbConn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    port: Number(process.env.HOST_PORT)
})

dbConn.connect()

export default dbConn