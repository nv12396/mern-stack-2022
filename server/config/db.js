const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(
    //   "mongodb+srv://nebojsa123:kreten123@nebojsacluster.jekkgj5.mongodb.net/test"
    // );
    const conn = await mongoose.connect(
      "mongodb+srv://nebojsa123:kreten123@nebojsacluster.jekkgj5.mongodb.net/transactions?retryWrites=true&w=majority"
      // "mongodb+srv://nebojsa123:kreten123@nebojsacluster.jekkgj5.mongodb.net/transactions?retryWrites=true&w=majority"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log("Connection succesful");
  } catch (error) {
    console.log(`Error is: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
