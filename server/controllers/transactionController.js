const Transaction = require("../models/transaction");

const index = async (req, res) => {
  //////////////////ovako se radi uslov> polje user_id = req.user_id
  const transaction = await Transaction.find({ user_id: req.user._id }).sort({
    createdAt: -1,
  });
  res.json(transaction);
};

const create = async (req, res) => {
  const { amount, description, date } = req.body;
  const transaction = new Transaction({
    amount,
    description,
    date,
    user_id: req.user._id,
    category_id: req.category_id,
  });
  console.log(`User is ${req.user}`);
  transaction.save();
  res.json({ message: "success" });
};

const destroy = async (req, res) => {
  await Transaction.deleteOne({ _id: req.params.id });
  console.log(req.params.id);
  res.status(201).json({ message: "Deleted succesfully" });
};

const update = async (req, res) => {
  const { form } = req.body;
  await Transaction.updateOne({ _id: req.params.id }, { $set: form });
  console.log(form.amount);
  res.status(200).json({ message: "sucess" });
};

module.exports = { index, create, destroy, update };
