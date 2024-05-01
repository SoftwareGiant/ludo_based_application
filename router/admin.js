const express = require("express");
const router = express.Router();
const {
  findGameAndChangeResult,
  finduserdetails,
  newKycVerification,
  depositDetails,
  withdrawnDetails,
  addSliderContent,
  removeSliderContent
} = require("../controller/adminController");
const wrapAsync = require("../controlError/wrapAsync");
const { verifyToken } = require("../helper/jwt_helper");
const { admin } = require("../config/authentication/authJwt");
const { upload } = require("../helper/multer");

// need to check for admin as well.
// changing the game result in case user has uploaded the image
// and wrongly get payment but he didn't win
router.post(
  "/findGameAndChangeResult",
  [verifyToken, admin],
  wrapAsync(findGameAndChangeResult)
);
// finding all the data of user from gamedetails and paymentdetails.
router.post(
  "/finduserdetails",
  [verifyToken, admin],
  wrapAsync(finduserdetails)
);

// new kycfor verification
// list of users who have applied for kyc verification
router.get(
  "/newkycforverification",
  [verifyToken, admin],
  wrapAsync(newKycVerification)
);

//deposit details of userr
router.get("/depositdetails", [verifyToken, admin], wrapAsync(depositDetails));

//withdrawn details of userr
router.get(
  "/withdrawndetails",
  [verifyToken, admin],
  wrapAsync(withdrawnDetails)
);

router.post(
  "/addslider",
  [verifyToken, admin],
  upload.array("image"),
  wrapAsync(addSliderContent)
);

router.post(
  "/removeslider",
  [verifyToken, admin],
  upload.single("image"),
  wrapAsync(removeSliderContent)
);

module.exports = router;
