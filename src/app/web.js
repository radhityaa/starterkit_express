import express from 'express'
import { publicRouter } from '../routes/public.js'
import { ErrorMiddleware } from '../middleware/ErrorMiddleware.js'

export const web = express()
web.use(express.json())

web.use(publicRouter)
web.use(ErrorMiddleware)