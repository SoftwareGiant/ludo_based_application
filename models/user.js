const mongoose = require("mongoose");
//user related detaills
const UserSchema = new mongoose.Schema(
  {
    mobileNo: String,
    role: {
      type: String,
      enum: [null, "admin", "superAdmin"],
    },
    userName:String,
    refreshTokenDetail: {
      token: String,
      expiresAt: Number,
    },
    verficationDone: {
      type: Boolean,
      default: false,
    },
    userKyc: {
      aadharNo: String,
      aadharUrl: String,
      aadharFront: String,
      aadharBack: String,
      verificationStatus: {
        type: String,
        enum: ["pending","inprogress","approved"],
        default : "pending"   
      },
    },
    referralDetails: {
      referralCode: String,
      refferedUser: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
      ],
    },
    depositPayment: {
      type: mongoose.Schema.ObjectId,
      ref: "Payment",
    },
    withdrawPayment: {
      type: mongoose.Schema.ObjectId,
      ref: "Payment",
    },
    abanDoned: {
      type: Boolean,
      default: false,
    },
    walletDetails: {
      totalAmount: {
        type: Number,
        default: 0,
      },
      winingAmount: {
        type: Number,
        default: 0,
      },
      losingAmount: {
        type: Number,
        default: 0,
      },
      depositAmount: {
        type: Number,
        default: 0,
      },
      withDrawlAmount: {
        type: Number,
        default: 0,
      },
      referralAmount: {
        type: Number,
        default: 0,
      },
      lockedAmount: {
        type: Number,
        default: 0,
      },
    },
    socketId: String,
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", UserSchema);
