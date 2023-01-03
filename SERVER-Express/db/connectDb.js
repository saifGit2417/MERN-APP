import mongoose from "mongoose";

const connectDb = async (url, dbName) => {
    try {
        // mongodb://localhost:27017
        await mongoose.connect(`${url}/${dbName}`);
        console.log("connection created")
    } catch (error) {
        console.log('error occured during db connection');
    }
}

export default connectDb;
 