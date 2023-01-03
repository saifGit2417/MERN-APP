import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import connectDb from './db/connectDb.js'
import amountRouter from './routers/amountRouter.js'
dotenv.config()
// const cors = require('cors')
const app = express()
const port = process.env.PORT || 5005
const url = process.env.URL || "mongodb://0.0.0.0:27017"
const dbName = process.env.DBNAME || "amountTransfered"
connectDb(url, dbName)


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())


app.use('/', cors())
app.use('/', amountRouter)


app.listen(port, () => {
    console.log(`port running at port number ${port}`)
})