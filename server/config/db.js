const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://nebojsa123:kreten123@nebojsacluster.jekkgj5.mongodb.net/test"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log("Connection succesful");
  } catch (error) {
    console.log(`Error is: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
