import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"));
        mongoose.connection.on('disconnected', () => console.log("Database Disconnected"));
        mongoose.connection.on('error', (err) => console.log("DB Error:", err));
        await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`);
    } catch (error) {
        console.log(error.message);
    }
};

export default connectDB;