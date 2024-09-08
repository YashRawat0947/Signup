import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Ensure dotenv is configured to load environment variables
dotenv.config();

export const connectDB = async () => {
  try {
    // Log the MongoDB URI for debugging purposes
    console.log("MONGO_URI: ", process.env.MONGO_URI);

    // Check if MONGO_URI is defined
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined');
    }

    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI);


    // Log connection success
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log connection error
    console.error("Error connecting to MongoDB: ", error.message);
    process.exit(1); // Exit with failure status code
  }
};
