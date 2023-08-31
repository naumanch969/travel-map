import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import pinRoutes from './routes/pin.js'
import userRoutes from './routes/user.js'

dotenv.config()

const app = express()
const CONNECTION_URL = process.env.ATLAS_URL
const PORT = process.env.PORT 

app.use(express.json())
app.use('/pin',pinRoutes)
app.use('/user',userRoutes)


mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(PORT,()=>console.log(`listening on port ${PORT}`)))
    .catch((error)=>console.log('Error in connection with MongoDB = \n',error))