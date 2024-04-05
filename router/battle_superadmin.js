const express = require("express");
const router = express.Router();
const wrapAsync = require("../controlError/wrapAsync");
const { verifyToken } = require("../helper/jwt_helper");
const { verifySuperAdmin } = require("../config/authentication/authJwt");

const {
  allBattle,
  addBattle,
  editBattle,
  deleteBattle,
} = require("../controller/battleController");

// for superadmin purpose.
router.get("/", [verifyToken, verifySuperAdmin], wrapAsync(allBattle));
router.post("/add", [verifyToken, verifySuperAdmin], wrapAsync(addBattle));
router.put("/edit/:id", [verifyToken, verifySuperAdmin], wrapAsync(editBattle));
router.delete(
  "/delete/:id",
  [verifyToken, verifySuperAdmin],
  wrapAsync(deleteBattle),
);

module.exports = router;
