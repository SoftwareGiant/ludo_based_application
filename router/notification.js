const express = require("express");
const router = express.Router();
const wrapAsync = require("../controlError/wrapAsync");
const {
  allNotification,
  readNotification,
  clearNotification,
} = require("../controller/notificationcontroller");
const { verifyToken } = require("../helper/jwt_helper");

router.get("/all", [verifyToken], wrapAsync(allNotification));

router.get("/clearall", [verifyToken], wrapAsync(clearNotification));

router.get("/read/:id", [verifyToken], wrapAsync(readNotification));

module.exports = router;
