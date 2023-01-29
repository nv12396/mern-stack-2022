const express = require("express");
const router = express.Router();
const TransactionRouters = require("./TransactionsApi");
const AuthApi = require("./AuthApi.js");
const UserApi = require("./UserApi.js");
const passport = require('passport')

router.use(
  "/transaction",
  passport.authenticate("jwt", { session: false }),
  TransactionRouters
);
router.use("/auth", AuthApi);
router.use("/user", UserApi);

module.exports = router;
