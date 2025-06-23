import express from "express";
import { router as messageRouter } from "./routes/messageRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from 'dotenv'
import { notFound, errorHandler } from "./middleware/errorHandler.js";

dotenv.config()
const PORT = process.env.PORT || 8000 

const app = express()

//Connect to db
connectDB()

//Enable parsing request body
app.use(express.urlencoded({extended: true}))

//Messages
app.use('/api/messages', messageRouter)

//Error handling
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}.`)
})