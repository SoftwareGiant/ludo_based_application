const express = require("express");
const router = express.Router();
const wrapAsync = require("../controlError/wrapAsync");
const { verifyToken } = require("../helper/jwt_helper");
const { upload } = require("../helper/multer");
const {
  depositVerification,
  depositAmount,
  withdrawl,
  depositRequest,
  depositVerified,
  allWithdrawlRequest,
  allVerifiedWithdrawl,
  depositRequestOfUser,
  depositVerifiedOfUser,
  allWithdrawlRequestOfUser,
  withdrawlVerifiedOfUser,
  withdrawlVerification,
} = require("../controller/payment");
const { admin } = require("../config/authentication/authJwt");
//deposit request by user
router.post(
  "/deposit",
  [verifyToken],
  upload.single("image"),
  wrapAsync(depositAmount),
);
//deposit verification by admin
router.post(
  "/deposit/verification",
  [verifyToken, admin],
  wrapAsync(depositVerification),
);
//withdrawl verification
router.post(
  "/withdrawl/verification",
  [verifyToken],
  // upload.single("image"),
  wrapAsync(withdrawlVerification),
);

//withdrawl request by userrr.
router.post("/withdrawl", [verifyToken], wrapAsync(withdrawl));

//all deposit request in database.
router.get(
  "/alldepositrequest",
  [verifyToken, admin],
  wrapAsync(depositRequest),
);

//all deposit request of user.
router.post(
  "/depositrequestofuser",
  [verifyToken],
  wrapAsync(depositRequestOfUser),
);
//verified desposit of user
router.post(
  "/verifieddepositofuser",
  [verifyToken],
  wrapAsync(depositVerifiedOfUser),
);
//verified withdrawl of user
router.post(
  "/verifiedwithdrawlofuser",
  [verifyToken],
  wrapAsync(withdrawlVerifiedOfUser),
);
//all withdrawl request of user.
router.post(
  "/withdrawlrequestofuser",
  [verifyToken],
  wrapAsync(allWithdrawlRequestOfUser),
);

//all verified depositt
router.get("/depositverified", [verifyToken], wrapAsync(depositVerified));

//all withdrawl requestt
router.get(
  "/allwithdrawlrequest",
  [verifyToken, admin],
  wrapAsync(allWithdrawlRequest),
);

//all verified witrhdrawl
router.get(
  "/verifiedwithdrawl",
  [verifyToken, admin],
  wrapAsync(allVerifiedWithdrawl),
);

module.exports = router;
