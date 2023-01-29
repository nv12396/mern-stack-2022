const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const passport = require("passport");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const PORT = 4000;
const passportConfig = require("./config/passport.js");

connectDB();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", routes);
app.use(passport.initialize());
passportConfig(passport);
// to start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
