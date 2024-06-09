const Payment = require("../models/payment");
const User = require("../models/user");

//all deposit request in database.
const depositRequest = async (req, res, next) => {
  try {
    const allPendingPayment = await Payment.find({
      paymentAction: "deposit"
    }).sort({ timestamp: -1 });
    if (allPendingPayment.length == 0) {
      return res.status(404).json({ message: "Not Found any pending request" });
    }
    return res.status(200).json({ allPendingPayment });
  } catch (err) {
    return next(err);
  }
};

//all depositrequestofauser
const depositRequestOfUser = async (req, res, next) => {
  const userId = req.userId;
  try {
    const allPendingPayment = await Payment.find({
      paymentAction: "deposit",
      user: userId
    }).sort({ timestamp: -1 });
    if (allPendingPayment.length == 0) {
      return res.status(404).json({ message: "Not Found any pending request" });
    }
    return res.status(200).json({ allPendingPayment });
  } catch (err) {
    return next(err);
  }
};
//all verifieddepositofauser
const depositVerifiedOfUser = async (req, res, next) => {
  const userId = req.userId;
  try {
    const allPendingPayment = await Payment.find({
      status: "success",
      paymentAction: "deposit",
      user: userId
    }).sort({ timestamp: -1 });
    if (allPendingPayment.length == 0) {
      return res.status(404).json({ message: "Not Found any pending request" });
    }
    return res.status(200).json({ allPendingPayment });
  } catch (err) {
    return next(err);
  }
};

//all verified deposit
const depositVerified = async (req, res, next) => {
  try {
    const VerifiedPayment = await Payment.find({
      status: "success",
      paymentAction: "deposit"
    }).sort({ timestamp: -1 });
    if (VerifiedPayment.length == 0) {
      return res.status(404).json({ message: "Not Found any Verified Payment" });
    }
    return res.status(200).json({ VerifiedPayment });
  } catch (err) {
    return next(err);
  }
};
//user can start creating deposit request.
const depositAmount = async (req, res, next) => {
  try {
    const { amount, paymentPlatform } = req.body;
    if (amount < 50) {
      return res.status(200).json({ message: "Please deposit more than 50" });
    }
    const fileName = req.file?.fileName;
    const payment = new Payment({
      user: req.userId,
      amount: amount,
      payment_platform: paymentPlatform,
      depositImg: fileName,
      status: "pending",
      paymentAction: "deposit"
    });
    await payment.save();
    return res.status(200).json({ message: "You deposit request is accepted." });
  } catch (e) {
    return next(e);
  }
};
// deposit verification for a particular user from here.
const depositVerification = async (req, res, next) => {
  const { amount, utrNo, userId } = req.body;
  try {
    const payment = await Payment.findOne({ utrNo });
    if (payment) {
      return res.status(200).json({ message: " payment Detail was already found" });
    }
    const paymentOfUser = await Payment.findOne({
      user: userId,
      paymentAction: "deposit"
    }).sort({ timestamp: -1 });
    if (paymentOfUser.utrNo) {
      return res.status(200).json({ message: "Something went wrong!New Payment entry not found" });
    }
    if (paymentOfUser.amount != amount) {
      return res.status(200).json({
        message: "Record not found,Please enter the amount value correctly"
      });
    }
    if (paymentOfUser.amount == amount) {
      paymentOfUser.utrNo = utrNo;
      paymentOfUser.status = "success";
      await paymentOfUser.save();
      const user = await User.findById(userId);

      user.walletDetails.totalAmount += parseInt(amount);
      user.walletDetails.depositAmount += parseInt(amount);
      await user.save();
      return res.status(200).json({ message: "Amount added to user wallet", user });
    }
  } catch (err) {
    return next(err);
  }
};
//withdraw request by user
const withdrawl = async (req, res, next) => {
  try {
    const { amount } = req.body;
    const user = await User.findById(req.userId);
    if (user.userKyc.verificationStatus != "approved") {
      return res.status(200).json({ message: `Kyc is in ${user.userKyc.verificationStatus} after approval only you can withdrawn the payment!` });
    }
    if (user.walletDetails.totalAmount < amount) {
      return res.status(200).json({ message: "You don't have sufficient amount." });
    } else {
      const payment = new Payment({
        paymentAction: "withdrawl",
        user: req.userId,
        amount,
        status: amount >= 1000 ? "confirmationrequired" : "pending"
      });
      await payment.save();
      return res.status(200).json({
        message: "Withrawl Request generated,You will get payment back in sometime."
      });
    }
  } catch (e) {
    return next(e);
  }
};

//all withdrawl request.
const allWithdrawlRequest = async (req, res, next) => {
  try {
    const allPendingWithdrawl = await Payment.find({
      paymentAction: "withdrawl"
    }).sort({ timestamp: -1 });
    if (allPendingWithdrawl.length == 0) {
      return res.status(404).json({ message: "Not Found any pending request" });
    }
    return res.status(200).json({ allPendingWithdrawl });
  } catch (err) {
    return next(err);
  }
};

//all verified withdrawl
const allVerifiedWithdrawl = async (req, res, next) => {
  try {
    const allVerifiedWithdrawl = await Payment.find({
      status: "success",
      paymentAction: "withdrawl"
    });
    if (allVerifiedWithdrawl.length == 0) {
      return res.status(404).json({ message: "Not Found any Verified Payment" });
    }
    return res.status(200).json({ allVerifiedWithdrawl });
  } catch (err) {
    return next(err);
  }
};
//all verified withdrawl of user
const withdrawlVerifiedOfUser = async (req, res, next) => {
  try {
    const userId = req.userId;
    const allVerifiedWithdrawl = await Payment.find({
      status: "success",
      paymentAction: "withdrawl",
      user: userId
    });
    if (allVerifiedWithdrawl.length == 0) {
      return res.status(404).json({ message: "Not Found any Verified Payment" });
    }
    return res.status(200).json({ allVerifiedWithdrawl });
  } catch (err) {
    return next(err);
  }
};

//all withdrawl request of user.
const allWithdrawlRequestOfUser = async (req, res, next) => {
  try {
    const userId = req.userId;
    const allPendingWithdrawl = await Payment.find({
      paymentAction: "withdrawl",
      user: userId
    }).sort({ timestamp: -1 });
    if (allPendingWithdrawl.length == 0) {
      return res.status(404).json({ message: "Not Found any pending request" });
    }
    return res.status(200).json({ allPendingWithdrawl });
  } catch (err) {
    return next(err);
  }
};
// withdrawl verification of user
const withdrawlVerification = async (req, res, next) => {
  try {
    const { amount, userId, id, utrNo, update } = req.body;
    const payment = await Payment.findById(id);
    const user = await User.findById(userId);
    if (!update) {
      if (user.walletDetails.totalAmount < amount) {
        return res.status(200).json({ message: "Insufficient amount" });
      }
      if (payment.utrNo) {
        return res.status(200).json({ messege: "Record already exist" });
      }
      if (payment.amount == amount) {
        return res.status(200).json({ message: "Initiate the withdrawl" });
      }
      if (payment.amount > amount) {
        return res.status(200).json({ message: "Entered amount is not correct!" });
      }
      return res.status(200).json({ message: "Something went wrong!Please enter correct data" });
    } else if (update) {
      user.walletDetails.totalAmount -= parseInt(amount);
      user.walletDetails.withDrawlAmount += parseInt(amount);
      payment.status = "success";
      payment.utrNo = utrNo;
      // payment.transactionImg= req.file.fileName;
      await user.save();
      await payment.save();
      return res.status(200).json({ message: "Payment details added successfully" });
    }
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  depositAmount,
  depositVerification,
  withdrawl,
  depositRequest,
  depositVerified,
  allWithdrawlRequest,
  allVerifiedWithdrawl,
  depositRequestOfUser,
  depositVerifiedOfUser,
  allWithdrawlRequestOfUser,
  withdrawlVerifiedOfUser,
  withdrawlVerification
};
