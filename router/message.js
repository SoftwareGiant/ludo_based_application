const express = require("express");
const router = express.Router();
const { allChat, allMessage, sendMessage } = require("../controller/message");
const { verifyToken } = require("../helper/jwt_helper");
const wrapAsync = require("../controlError/wrapAsync");

router.get("/allmessages/:id", [verifyToken], wrapAsync(allMessage));

router.get("/allChat", [verifyToken], wrapAsync(allChat));

router.post("/sendmessage/:id", [verifyToken], wrapAsync(sendMessage));

module.exports = router;
