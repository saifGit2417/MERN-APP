import express from "express"
import { getConversionRate, getMoney, getPurposes, postMoneyTransfer } from "../controllers/amountController.js"

const amountRouter = express.Router()

amountRouter.get('/conversionrate', getConversionRate)
amountRouter.get('/purposes', getPurposes)
amountRouter.post('/postdetails', postMoneyTransfer)
amountRouter.get('/getdetails', getMoney)


export default amountRouter