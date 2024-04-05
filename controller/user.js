const User = require("../models/user");
const AppError = require("../controlError/AppError");
const customStatuandError = require("../controlError/httpStatusandError");
const error = customStatuandError();
const { authSchema } = require("../helper/validation_schema");
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require("../helper/jwt_helper");
const { sendOtp, verifyOtp } = require("../config/authentication/otpverify");
const Notification = require("../models/notification");
const logger = require("../logger/index");
require("dotenv").config();

//just for manual registering till we are not registering with otp
const registerUser = async (req, res, next) => {
  const { mobileNo } = req.body;
  try {
    await authSchema.validateAsync({ mobileNo });
    let user = await User.findOne({ mobileNo });
    if (user?.abanDoned) {
      return res.status(200).json({ message: "You can't register with given credential!" });
    }
    if (user) {
      return next(new AppError(customStatuandError("user")["409"], 409));
    }

    //need to chnage following
    const newUser = new User({
      mobileNo: mobileNo,
      verficationDone: true
    });

    await newUser.save();
    const accessToken = await signAccessToken(newUser.id);
    const refreshToken = await signRefreshToken(newUser.id);
    // res.header
    // return res.status(200).json({
    //   message: "User Registered Successfully",
    //   accessToken,
    //   refreshToken,
    // });

    return res.cookie("refreshToken", refreshToken, { httpOnly: true, sameSite: "strict" }).header("Authorization", accessToken).status(200).json({ message: "User Registered Successfully" });
  } catch (err) {
    if (err.isJoi === true) {
      err.status = 422;
      throw new AppError("Length of Mobile No should be 10 character long!", 422);
    }
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    return next(new AppError("Something went wrong!Please try again.", 500));
  }
};

const verificationOfOtp = async (req, res, next) => {
  try {
    const mobileNo = req.session.mobileNo;
    delete req.session.mobileNo;
    const { otp } = req.body;
    const verifiedOtp = await verifyOtp(mobileNo, otp);
    if (verifiedOtp) {
      let user = await User.findOne({ mobileNo });
      if (user) {
        const accessToken = await signAccessToken(user.id);
        const refreshToken = await signRefreshToken(user.id);
        return res.status(200).json({
          message: "Otp verified successfully",
          user,
          accessToken,
          refreshToken
        });
      } else {
        user = new User({
          mobileNo
        });
        await user.save();
        const accessToken = await signAccessToken(user.id);
        const refreshToken = await signRefreshToken(user.id);
        return res.status(200).json({
          message: "Otp verified successfully",
          user,
          accessToken,
          refreshToken
        });
      }
    }
    return next(new AppError("Please enter correct otp", 401));
  } catch (err) {
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    return next(new AppError("Something went wrong!", 500));
  }
};

// const loginUser = async (req, res, next) => {
//   try {
//     const { mobileNo } = req.body;
//     await authSchema.validateAsync({ mobileNo });
//     const user = await User.findOne({ mobileNo });

//     if (!user) {
//       return next(new AppError("Please enter correct mobileNo", 401));
//     }

//     if (user?.abanDoned) {
//       return res
//         .status(200)
//         .json({ message: "You can't login with given credential!" });
//     }

//     await sendOtp(mobileNo);
//     req.session.mobileNo = mobileNo;
//     return res.status(200).json({ message: "Otp Sent Successfully" });
//   } catch (err) {
//     if (err.isJoi === true) {
//       err.status = 422;
//       throw new AppError(
//         "Length of Password should be 10 character long!",
//         422,
//       );
//     }
//     logger.error(
//       `${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`,
//     );
//     return next(new AppError("Something went wrong!Please try again.", 500));
//   }
// };

const loginUser = async (req, res, next) => {
  try {
    const { mobileNo } = req.body;
    await authSchema.validateAsync({ mobileNo });
    const user = await User.findOne({ mobileNo });

    if (!user) {
      return next(new AppError("Please enter correct mobileNo", 401));
    }

    if (user?.abanDoned) {
      return res.status(200).json({ message: "You can't login with given credential!" });
    }

    const accessToken = await signAccessToken(user.id);
    const refreshToken = await signRefreshToken(user.id);
    // return res.status(200).json({
    //   message: "User LoggedIn Successfully",
    //   accessToken,
    //   refreshToken,
    // });
    return res.cookie("refreshToken", refreshToken, { httpOnly: false, sameSite: "strict" }).header("Authorization", accessToken).status(200).json({ message: "User LoggedIn Successfully" });
  } catch (err) {
    if (err.isJoi === true) {
      err.status = 422;
      throw new AppError("Length of Password should be 10 character long!", 422);
    }
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    return next(new AppError("Something went wrong!Please try again.", 500));
  }
};

const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return next(new AppError(error["401"], 401));
    const userId = await verifyRefreshToken(refreshToken);
    if (!userId) {
      return next(new AppError(error["500"], 500));
    }
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "refreshTokenDetail.token": null,
          "refreshTokenDetail.expiresAt": null
        }
      },
      { new: true }
    );
    if (user) {
      return res.status(200).json({ message: "You are loggedout successfully" });
    } else {
      logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
      return next(new AppError(error["500"], 500));
    }
  } catch (err) {
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    return next(new AppError("Something went wrong!Please try again.", 500));
  }
};

const addKyc = async (req, res, next) => {
  try {
    const { aadharNo } = req.body;
    const id = req.userId;
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          "userKyc.aadharNo": aadharNo,
          "userKyc.aadharFront": req.files[0].filename,
          "userKyc.aadharBack": req.files[1].filename
        }
      },
      { new: true }
    );
    if (updateUser) {
      const notification = new Notification({
        user: req.userId,
        message: "Kyc detail added!"
      });
      await notification.save();
      return res.status(200).json({ message: "Kyc detail added successfully", updateUser });
    } else {
      return next(new AppError("Something went wrong!Please try again.", 500));
    }
  } catch (err) {
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    return next(new AppError("Something went wrong!Please try again.", 500));
  }
};

const verifyKyc = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const verify = await User.findByIdAndUpdate(userId, { $set: { "userKyc.verificationStatus": true } }, { new: true });
    if (verify) {
      const notification = new Notification({
        user: req.userId,
        message: "Kyc verified successfully🥳"
      });
      await notification.save();
      return res.status(200).json({ message: "Kyc verified", verify });
    }
  } catch (e) {
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    return next(new AppError("Something went wrong!Please try again.", 500));
  }
};

const allUser = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 10;
  const skip = (page - 1) * perPage;
  try {
    const users = await User.find({}).skip(skip).limit(perPage).sort({ createdAt: -1 });
    if (users.length == 0) {
      return res.status(200).json({ message: "User not found" });
    }
    // .toArray()
    return res.status(200).json({ users });
  } catch (err) {
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    throw new AppError(error["500"], 500);
  }
};

const currentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return next(new AppError(error["500"], 500));
    }
    return res.status(200).json({ user });
  } catch (err) {
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    throw new AppError(error["500"], 500);
  }
};

// addpicture.
const addPicture = async (req, res) => {
  try {
    const { userId } = req;
    await User.findByIdAndUpdate(userId, { profilePicture: req.file.filename }, { new: true });
    const notification = new Notification({
      user: req.userId,
      message: "🥳Your picture added successfully!🥳"
    });
    await notification.save();
    return res.status(200).json({ message: "Profile Picture added" });
  } catch (err) {
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    throw new AppError(error["500"], 500);
  }
};

//delete user and give him the status of abandoned
// this right will be maintained by admin and superadmin

const giveToAbandoned = async (req, res, next) => {
  try {
    const userId = req.body;
    const updateUser = await User.findOneAndUpdate(userId, { abanDoned: true }, { new: true });
    return res.status(200).json({ message: "Updated", updateUser });
  } catch (e) {
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    return next(new AppError(error["500"], 500));
  }
};

const removefromAbandoned = async (req, res, next) => {
  try {
    const userId = req.body;
    const updateUser = await User.findOneAndUpdate(userId, { abanDoned: false }, { new: true });
    return res.status(200).json({ message: "Updated", updateUser });
  } catch (e) {
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    return next(new AppError(error["500"], 500));
  }
};

const allAbandonedUser = async (req, res, next) => {
  try {
    const allAbandonedUser = await User.find({ abanDoned: true });
    if (allAbandonedUser.length == 0) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json({ allAbandonedUser });
  } catch (e) {
    logger.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`);
    return next(e);
  }
};

const kycVerificationStatus = async (req, res, next) => {
  try {
    const { kycstatus } = req.query;
    const allUser = await User.find({ "userKyc.verificationStatus": kycstatus });
    return res.status(200).json({ allUser });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
  logout,
  allUser,
  currentUser,
  addPicture,
  addKyc,
  verifyKyc,
  verificationOfOtp,
  giveToAbandoned,
  removefromAbandoned,
  allAbandonedUser,
  kycVerificationStatus
};
