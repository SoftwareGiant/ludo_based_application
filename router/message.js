const express = require("express");
const router = express.Router();
const { allChat, allMessage, sendMessage,makefavourite,listOfFavourite } = require("../controller/message");
const { verifyToken } = require("../helper/jwt_helper");
const wrapAsync = require("../controlError/wrapAsync");

router.get("/allmessages/:id", [verifyToken], wrapAsync(allMessage));

router.get("/allChat", [verifyToken], wrapAsync(allChat));

router.get("/favourite",[verifyToken],wrapAsync(makefavourite))

router.get("listoffavourite",[verifyToken],wrapAsync(listOfFavourite))

router.post("/sendmessage/:id", [verifyToken], wrapAsync(sendMessage));

module.exports = router;
