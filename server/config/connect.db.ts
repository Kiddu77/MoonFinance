import mongoose from "mongoose";

const connectToDB = async (): Promise<void> => {
    try {
        if (!process.env.MONGOURI) {
            throw new Error("MONGO_URI not found. Please configure the .env file.");
        }
        await mongoose.connect(process.env.MONGOURI);
        console.log("Connection open");
    } catch (error) {
        console.error("Error in connection to the database:");
        console.error(error instanceof Error ? error.message : error);
    }
};

export default connectToDB;
