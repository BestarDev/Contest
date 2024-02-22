import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn  = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database...");
    } catch (error) {
        console.log(error?.data?.message || error.error)
        process.exit(1);
    }
}

export default connectDB;