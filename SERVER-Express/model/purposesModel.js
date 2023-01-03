import mongoose from 'mongoose'

// creating schema of purposes rate
const purposesSchema = new mongoose.Schema({
    purposes: { type: Array, required: true }
})

const purposesModel = mongoose.model('purpose', purposesSchema)

// adding data to purposes 
let purposeSave = purposesModel({
    purposes: ["EMI", "FOOD BILL", "HOSPITAL BILL", "STUDY MATERIAL", "TRANSPORATION", "OTHERS"]
})

// let purpose1 = purposeSave.save()
// commenting this line to stop re inserting same data

export default purposesModel;