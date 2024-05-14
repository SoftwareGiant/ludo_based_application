const express = require("express");
const router = express.Router();
const {
  allChat,
  allMessage,
  sendMessage,
  makefavourite,
  listOfFavourite,
  removeFromFavourite,
  checkFavourite
} = require("../controller/message");
const { verifyToken } = require("../helper/jwt_helper");
const wrapAsync = require("../controlError/wrapAsync");

router.get("/allmessages/:id", [verifyToken], wrapAsync(allMessage));

router.get("/allChat", [verifyToken], wrapAsync(allChat));

router.get("/favourite/:id", [verifyToken], wrapAsync(makefavourite));
router.get("/checkfavourite/:id", [verifyToken], wrapAsync(checkFavourite));

router.get(
  "/removefromfavourite/:id",
  [verifyToken],
  wrapAsync(removeFromFavourite)
);

router.get("/listoffavourite", [verifyToken], wrapAsync(listOfFavourite));

router.post("/sendmessage/:id", [verifyToken], wrapAsync(sendMessage));

module.exports = router;
