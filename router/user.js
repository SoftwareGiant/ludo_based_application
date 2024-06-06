const express = require("express");
const router = express.Router();
const wrapAsync = require("../controlError/wrapAsync");
const { verifyToken } = require("../helper/jwt_helper");
const { admin } = require("../config/authentication/authJwt");
const { upload } = require("../helper/multer");

const {
  registerUser,
  loginUser,
  logout,
  allUser,
  currentUser,
  addPicture,
  addKyc,
  verifyKyc,
  verificationOfOtp,
  giveToAbandoned,
  removefromAbandoned,
  allAbandonedUser,
  kycVerificationStatus,
  allSlider,
  addUserName,
  allReferral,
  alluserReferallCode
} = require("../controller/user");

router.post("/register", wrapAsync(registerUser));

router.post("/verify", wrapAsync(verificationOfOtp));

router.post("/login", wrapAsync(loginUser));

// for admin access only
router.get("/", [verifyToken,admin], wrapAsync(allUser));

//currentuserr
router.get("/currentUser", [verifyToken], wrapAsync(currentUser));

//adding profilepic.
router.post(
  "/addPicture",
  [verifyToken],
  upload.single("image"),
  wrapAsync(addPicture),
);

//adding kycdetail. adding aadhar and aadhar images.
router.post(
  "/addKycdetail",
  [verifyToken],
  upload.array("image", 2),
  wrapAsync(addKyc),
);

// following will be managed by admin.
router.post("/verifyKyc", [verifyToken, admin], wrapAsync(verifyKyc));

// following will be managed by admin and superadmin.
// when we are deleting the user we are giving abandoned status
router.post("/abandoned", [verifyToken, admin], wrapAsync(giveToAbandoned));

router.post(
  "/removefromabandoned",
  [verifyToken, admin],
  wrapAsync(removefromAbandoned),
);


router.post("/logout", [verifyToken], wrapAsync(logout));

router.get(
  "/allabandoneduser",
  [verifyToken, admin],
  wrapAsync(allAbandonedUser),
);

//finding kyc verified user and pending users on sorting basis

router.get("/kycstatus",[verifyToken,admin],wrapAsync(kycVerificationStatus));

router.get("/allSlider",wrapAsync(allSlider));

router.post("/addusername",[verifyToken],wrapAsync(addUserName));

router.get("/allreferral",[verifyToken],wrapAsync(allReferral));

router.get("/alluserReferallCode",[verifyToken],wrapAsync(alluserReferallCode));


module.exports = router;
