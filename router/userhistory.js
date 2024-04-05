const express = require("express");
const router = express.Router();
const wrapAsync = require("../controlError/wrapAsync");
const { verifyToken } = require("../helper/jwt_helper");
const {
  userGameHistory,
  userPaymentHistory,
} = require("../controller/userhistorycontroller");
//route for usergamehistory
router.get("/usergamehistory", [verifyToken], wrapAsync(userGameHistory));

//route for userpaymenthistory
router.get("/userpaymenthistory", [verifyToken], wrapAsync(userPaymentHistory));

module.exports = router;
