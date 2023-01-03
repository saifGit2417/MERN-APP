import amountConversionModel from "../model/amountConversionModel.js";

export let a1 = amountConversionModel({
    usAmount: 100,
    inrAmount: 800,
    senderName: "i am sender",
    recieverName: " i am reciver",

})

export const result1 = a1.save()

console.log(result1)


