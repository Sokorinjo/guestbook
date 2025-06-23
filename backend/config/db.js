// const mariadb = require('mariadb');
import mariadb from 'mariadb'
import dotenv from 'dotenv'
dotenv.config()

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    connectionLimit: 5
});

const connectDB = async () => {
    let conn;
    try {
        conn = await pool.getConnection()
        console.log("Connected do Database")
    }
    catch (err) {
        throw err;
    }
    finally{
        if (conn){
            conn.end()
        } 
    }
} 

export { 
    connectDB,
    pool
}