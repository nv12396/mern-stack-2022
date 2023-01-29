const express = require("express");
const router = express.Router();
const passport = require("passport");
const sendUser = require("../controllers/userController");

router.get("/", passport.authenticate("jwt", { session: false }), sendUser);

module.exports = router;
