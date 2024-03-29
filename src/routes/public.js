import express from 'express'
import UserController from '../controllers/UserController.js'

const publicRouter = new express.Router()
publicRouter.post('/api/users', UserController.register)

export {
    publicRouter
}