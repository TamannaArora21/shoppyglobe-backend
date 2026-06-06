const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // MongoDB connection
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error.message);
  }
};

module.exports = connectDB;