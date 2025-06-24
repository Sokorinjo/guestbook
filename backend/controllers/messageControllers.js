import { pool as db } from "../config/db.js"

//@desc Add a message
//@route POST /api/messages/
const addMessage = (req, res) => {
    const { message, name } = req.body
    try {
        const sql = `INSERT INTO messages(message, name) values(?, ?)`
        const result = db.query(sql, [message, name])
        // res.send(result)
    }
    catch (err) {
        throw new Error(err)
    }
}

//@desc Get all messages
//@route GET /api/messages
const getAllMessages = async (req, res) => {

    try {
        const sql = `SELECT * FROM messages
        ORDER BY created_at DESC`
        const resultQuery = await db.query(sql)
        console.log(resultQuery)
        res.json(resultQuery)

    } catch (err) {
        throw new Error(err)
    }
}



export const messageControllers = {
    addMessage,
    getAllMessages
}

