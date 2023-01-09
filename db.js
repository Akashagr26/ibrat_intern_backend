const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("connected to DB successfully");
  } catch (error) {
    console.log(error);
    console.log("could not connect to DB");
  }
};

module.exports = connectDB;
