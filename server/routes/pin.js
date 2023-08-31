import express from 'express'
const router = express.Router()

import { createPin, getPins } from '../controllers/pin.js'

router.post('/create', createPin)
router.get('/get-all', getPins)

export default router