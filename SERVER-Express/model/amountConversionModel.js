import mongoose from 'mongoose'

const amountConversion = new mongoose.Schema({
    usAmount: { type: Number, required: true },
    inrAmount: { type: Number, required: true },
    senderName: String,
    recieverName: String,
    purposes: String
})

const amountConversionModel = mongoose.model("UStoINR", amountConversion)

export default amountConversionModel;