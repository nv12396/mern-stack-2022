const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  index,
  create,
  destroy,
  update,
} = require("../controllers/transactionController");

router.get("/", index);

router.post("/", create);

router.delete("/:id", destroy);

router.patch("/:id", update);

module.exports = router;
