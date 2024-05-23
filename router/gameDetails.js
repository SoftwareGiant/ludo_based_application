const express = require("express");
const router = express.Router();
const wrapAsync = require("../controlError/wrapAsync");
const { verifyToken } = require("../helper/jwt_helper");
const { admin } = require("../config/authentication/authJwt");
const { createBattle, matchUser, updateResult, updateCode, cancelGame, allGameHistory, openChallenge, deleteBattle } = require("../controller/newGame");

const { upload } = require("../helper/multer");

// game created by user itself
router.post(
  "/newgame",
  [verifyToken],
  wrapAsync((req, res, next) => createBattle(req, res, next))
);

router.post(
  "/deletebattle",
  [verifyToken],
  wrapAsync((req, res, next) => deleteBattle(req, res, next))
);

//once the user create game then user gets matched with this route.
router.post(
  "/matchuser",
  [verifyToken],
  wrapAsync((req, res, next) => matchUser(req, res, next))
);

//after match updating the code for playing game
router.post(
  "/updategamecode",
  [verifyToken],
  wrapAsync((req, res, next) => updateCode(req, res, next))
);

//updating result
router.post(
  "/updateresult",
  [verifyToken],
  upload.single("image"),
  wrapAsync((req, res, next) => updateResult(req, res, next))
);
//canceling game by user.
router.get(
  "/cancel",
  [verifyToken],
  wrapAsync((req, res, next) => cancelGame(req, res, next))
);

router.get(
  "/allgamehistory",
  [verifyToken, admin],
  wrapAsync((req, res, next) => allGameHistory(req, res, next))
);

router.get(
  "/openchallenge",
  [verifyToken],
  wrapAsync((req, res, next) => openChallenge(req, res, next))
);

module.exports = router;
