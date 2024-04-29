const express = require("express");
const router = express.Router();
const wrapAsync = require("../controlError/wrapAsync");
const { verifyToken } = require("../helper/jwt_helper");
const { verifySuperAdmin } = require("../config/authentication/authJwt");
const {
  addRole,
  removeRole,
  depositManually,
  minMax,
  withdrawnbySuperAdmin,
  allPendingWithdrawl,
  approvePendingWithdrawl,
  allAdminAndSuperAdmin
} = require("../controller/superadmincontroller");

router.post("/addrole", [verifyToken, verifySuperAdmin], wrapAsync(addRole));

router.post(
  "/removerole",
  [verifyToken, verifySuperAdmin],
  wrapAsync(removeRole),
);

router.post(
  "/depositmanually",
  [verifyToken, verifySuperAdmin],
  wrapAsync(depositManually),
);

router.post("/min-max", [verifyToken, verifySuperAdmin], wrapAsync(minMax));

router.post(
  "/withdrawn",
  [verifyToken, verifySuperAdmin],
  wrapAsync(withdrawnbySuperAdmin),
);

router.get("/allwithdrawltocheck",[verifyToken,verifySuperAdmin],wrapAsync(allPendingWithdrawl));

router.post("/approvewithdrawl/:id",[verifyToken,verifySuperAdmin],wrapAsync(approvePendingWithdrawl));

router.post("/alladminandsuperadmin",[verifyToken,verifySuperAdmin],wrapAsync(allAdminAndSuperAdmin));

module.exports = router;
