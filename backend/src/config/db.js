import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("❌ MONGODB_URI environment variable is not configured.");
    return;
  }

  try {
    const maskedUri = mongoUri.replace(/\/\/([^:]+):([^@]+)@/, "//$1:********@");
    console.log(`MONGODB_URI: ${maskedUri}`);

    const conn = await mongoose.connect(mongoUri);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

    mongoose.connection.on("error", (err) => {
      console.error(`MongoDB connection error: ${err.message}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected.");
    });

  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
  }
};

export const closeDBConnection = async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
    process.exit(0);
  } catch (err) {
    console.error(`Error closing MongoDB connection: ${err.message}`);
    
  }
};

export default connectDB;