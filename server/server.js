const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = 4000;

connectDB();
const app = express();
app.use(cors);

app.get("/", (req, res) => {
  res.send("Hello world");
});

// to start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
