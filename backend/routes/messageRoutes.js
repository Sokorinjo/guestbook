import express from 'express'
import { messageControllers } from '../controllers/messageControllers.js'

//Express router
const router = express.Router()

//Routes for messages
router.get('/',messageControllers.getAllMessages)
router.post('/', messageControllers.addMessage)

export {
    router
}
