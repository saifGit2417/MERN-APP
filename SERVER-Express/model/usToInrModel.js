import mongoose from "mongoose";

// creating schema of conversion rate
const usToInrConversionRate = new mongoose.Schema({
    conversionRate: { type: Number, required: true }
})

const usToInrConversionRateModel = mongoose.model("usToInrConversionRate", usToInrConversionRate)

// adding data to conversion rate file
let rate1 = usToInrConversionRateModel({
    conversionRate: 80
})

// const result1 = rate1.save()
// commented above line to stop that from adding same value to datbase repetatively


// exporting schema
export default usToInrConversionRateModel;