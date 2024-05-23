const express = require("express");
const router = express.Router();
const Support = require("../models/support");
const { verifyToken } = require("../helper/jwt_helper");
const AppError = require("../controlError/AppError");
const { admin } = require("../config/authentication/authJwt");
const wrapAsync = require("../controlError/wrapAsync")

// add supportt
router.post(
  "/addsupport",
  [verifyToken],
  wrapAsync(async (req, res, next) => {
    try {
      const userId = req.userId;
      const {message } = req.body;
      const support = await Support.findOneAndUpdate(
        {createdBy:userId},
        {
          $push: {
            messages: {
              message: message,
              sender: userId,
            },
          },
        },
        {
          upsert: true,
          new: true,
        },
      );
      if (!support) {
        throw new AppError(
          "Server is not responding!Please try again in sometime.",
          500,
        );
      }
      return res.status(200).json({ support });
    } catch (err) {
      // return next(
      //   new AppError(
      //     "Server is not responding!Please try again in sometime",
      //     500,
      //   ),
      // );
      return next(err)
    }
  }),
);

// reply support
router.post(
  "/replysupport",
  [verifyToken, admin],
  wrapAsync(async (req, res, next) => {
    try {
      const userId = req.userId;
      const { supportId, message } = req.body;
      const support = await Support.findByIdAndUpdate(
        supportId,
        {
          $push: {
            messages: {
              message: message,
              sender: userId,
            },
          },
        },
        {
          new: true,
        },
      );
      if (!support) {
        throw new AppError(
          "Server is not responding!Please try again in sometime",
          500,
        );
      }
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (err) {
      // return next(
      //   new AppError(
      //     "Server is not responding!Please try again in sometime",
      //     500,
      //   ),
      // );
      return next(err)
    }
  }),
);

router.get("/supportmessages", [verifyToken], async (req, res, next) => {
  const userId = req.userId;
  const ticket = await Support.findOne({createdBy:userId});
  return res.status(200).json({ ticket });
});

// for admin purpose

router.get("/listofall", [verifyToken,admin], async (req, res, next) => {
  const listofall = await Support.find({});
  if (listofall.length == 0) {
    return res.status(404).json({ message: "No support chat found" });
  }
  return res.status(200).json({ listofall });
});

// for admin uses

router.post("/admin/supportmessage", [verifyToken,admin], async (req, res, next) => {
  try{
  const userId = req.body;
  const ticket = await Support.findOne({createdBy:userId});
  return res.status(200).json({ ticket });
  }
  catch(err){
    return next(err);
  }
});

router.post("/admin/changestatus",[verifyToken,admin],async(req,res,next)=>{
  try{
    const {status,userId} = req.body;
    await Support.findOneAndUpdate({createdBy:userId},{status},{new:true})
    return res.status(200).json({message:"Status changed"});
  }
  catch(err){
    return next(err)
  }
})

module.exports = router;
