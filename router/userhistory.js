const express = require("express");
const router = express.Router();
const wrapAsync = require("../controlError/wrapAsync");
const { verifyToken } = require("../helper/jwt_helper");
const {
  userGameHistory,
  userPaymentHistory,
  allTypeHistory
} = require("../controller/userhistorycontroller");
const { admin } = require("../config/authentication/authJwt");
//route for usergamehistory
router.get("/usergamehistory", [verifyToken], wrapAsync(userGameHistory));

//route for userpaymenthistory
router.get("/userpaymenthistory", [verifyToken], wrapAsync(userPaymentHistory));

//route for all type of history
router.get("/alltypehistory/:id", [verifyToken,admin], wrapAsync(allTypeHistory));

module.exports = router;
