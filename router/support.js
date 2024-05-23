const express = require("express");
const router = express.Router();
const { verifyToken } = require("../helper/jwt_helper");
const { admin } = require("../config/authentication/authJwt");
const wrapAsync = require("../controlError/wrapAsync")
const {
  addSupport,
  replySupport,
  supportMessages,
  listofAll,
  supportMessagesForAdmin,
  changeStatus
} = require("../controller/support");
// add supportt
router.post(
  "/addsupport",
  [verifyToken],
  wrapAsync(addSupport)
);

// reply support
router.post(
  "/replysupport",
  [verifyToken, admin],
  wrapAsync(replySupport),
);

router.get("/supportmessages", [verifyToken],wrapAsync(supportMessages));

// for admin purpose

router.get("/listofall", [verifyToken,admin],wrapAsync(listofAll) );

// for admin uses

router.post("/admin/supportmessage", [verifyToken,admin], wrapAsync(supportMessagesForAdmin));

router.post("/admin/changestatus",[verifyToken,admin],wrapAsync(changeStatus));

module.exports = router;
