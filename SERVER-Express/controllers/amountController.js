import amountConversionModel from "../model/amountConversionModel.js"
import purposesModel from "../model/purposesModel.js"
import usToInrConversionRateModel from "../model/usToInrModel.js"

// to post all data, stored in mongo db
export const getMoney = async (req, res) => {
    try {
        const data = await amountConversionModel.find()
        // console.log(data)
        res.send(data)
    } catch (error) {
        console.log(error.message)
    }
}

// to get conversion rate 
export const getConversionRate = async (req, res) => {
    try {
        const conversionRate = await usToInrConversionRateModel.find()
        // console.log(conversionRate)
        res.send(conversionRate)
    } catch (error) {
        console.log(error)
    }
}

// to get purposes
export const getPurposes = async (req, res) => {
    try {
        const purposesPrint = await purposesModel.find()
        // console.log(purposesPrint)
        res.send(purposesPrint)

    } catch (error) {
        console.log(error)
    }

}

// to post all the data cptured from user
export const postMoneyTransfer = async (req, res) => {
    try {

        // taking these name from schema
        const usAmount = req.body.dollar
        const inrAmount = req.body.rupee
        const senderName = req.body.sender
        const recieverName = req.body.reciver
        const purposes = req.body.purpose

        // passing what to be added
        const addData = new amountConversionModel({
            usAmount,
            inrAmount,
            senderName,
            recieverName,
            purposes
        })

        const result = await addData.save()

        res.status(200).json({
            message: "data submited succesfully",
            data: result
        })

    } catch (error) {
        console.log(error.message)
    }
}