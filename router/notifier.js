const express = require("express");
const router = express.Router();
const { verifyToken } = require("../helper/jwt_helper");
const { upload } = require("../helper/multer");
const { admin } = require("../config/authentication/authJwt");
const Notifier = require("../models/notifier");
const wrapAsync = require("../controlError/wrapAsync");
const AppError = require("../controlError/AppError");

router.post(
  "/addnotifier",
  [verifyToken,admin],
  upload.single("image"),
  wrapAsync(async (req, res, next) => {
    try {
      const { message, anyAnnouncement } = req.body;
      const notifier = new Notifier({ message, noticeImage:req?.file?.filename, anyAnnouncement });
      await notifier.save();
      return res.status(200).json({ message: "Notifier message added" });
    } catch (err) {
      return next(err);
    }
  }),
);

router.get(
  "/",
  [verifyToken],
  wrapAsync(async (req, res, next) => {
    try {

      const notifier = await Notifier.find({});
      if (notifier.length == 0) {
        return next(new AppError("Notifier not found", 404));
      }
      return res.status(200).json({ notifier });
    } catch (err) {
      return next(err);
    }
  }),
);

router.delete(
  "/removenotifier",
  [verifyToken, admin],
  wrapAsync(async (req, res, next) => {
    try {
      const id = req.query.id;
      const notifier = await Notifier.findByIdAndDelete(id);
      if (notifier) {
        return res
          .status(200)
          .json({ message: "Notifier deleted successfully" });
      } else {
        new AppError("Something went wrong!Please try again later", 404);
      }
    } catch (err) {
      return next(err);
    }
  }),
);

module.exports = router;
