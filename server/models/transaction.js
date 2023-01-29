const mongoose = require("mongoose");
const { Schema } = mongoose;

const trasactionSchema = new Schema({
  amount: Number,
  description: String,
  date: { type: Date, default: new Date() },
  createdAt: { type: Date, default: new Date() },
  user_id: mongoose.Types.ObjectId,
  category_id: mongoose.Types.ObjectId,
});

module.exports = mongoose.model("Transaction", trasactionSchema);
