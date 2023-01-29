const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const categories = [
  { label: "Travel", icon: "user" },
  { label: "Shopping", icon: "user" },
  { label: "Investment", icon: "user" },
  { label: "Bills", icon: "user" },
];

const register = async (req, res) => {
  // get form data
  const { formData } = req.body;
  console.log(formData);

  // check if user exists with same email
  const { email, firstName, lastName, password } = formData;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(406).json({ message: "User already exist" });
    console.log(userExist);
    return;
  }
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // store user
  const user = await User({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    categories,
  });
  await user.save();
  res.status(201).json({ message: "user is created" });
};

const login = async (req, res) => {
  const { formData } = req.body;
  const { email, password } = formData;
  console.log(email, password);

  const userExist = await User.findOne({ email });
  if (!userExist) {
    res.status(406).json({ message: "user does not exist" });
    return;
  }

  //compare hashed password
  const matched = await bcrypt.compare(password, userExist.password);

  if (!matched) {
    res.status(406).json({ message: "Credential not found" });
    return;
  }
  // if matched true = we need to create jwt
  const payload = {
    username: email,
    _id: userExist._id,
  };
  const token = jwt.sign(payload, "some secret.");
  console.log(token);
  res.json({ message: "succesfully logged in ", token, userExist });
};

module.exports = { register, login };
