import mariadb from 'mariadb'
import dotenv from 'dotenv'
dotenv.config();

(async () => {
    let conn;
    try {
        const pool = mariadb.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            connectionLimit: 5
        });

        conn = await pool.getConnection()
        const deleteTable = conn.query(`DROP TABLE IF EXISTS messages;`)
        const createTable = conn.query(`CREATE TABLE messages(
            id INT AUTO_INCREMENT PRIMARY KEY,
            message TEXT NOT NULL,
            name VARCHAR(30) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`)
        console.log('Created table "messages".')
        console.log('Closing connection with DB...')
        await pool.end()
        
    } catch (err) {
        throw err
    }
    finally{
        console.log('Closed connection with DB.')
    }
})();