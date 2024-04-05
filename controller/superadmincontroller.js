const User = require("../models/user");
const Payment = require("../models/payment");
const AppError = require("../controlError/AppError");
const customStatuandError = require("../controlError/httpStatusandError");
const error = customStatuandError();
const logger = require("../logger/index");
const MinMax = require("../models/minmax");
const AdminWallet = require("../models/adminwallet");
const TimeStamp = require("../models/timestamp");
require("dotenv").config();

const addRole = async (req, res) => {
  const { id, role } = req.body;
  const user = await User.findByIdAndUpdate(id, { role }, { new: true });
  if (!user) {
    throw new AppError(customStatuandError("user")["404"], 404);
  }
  return res.status(201).json({ message: "Role given to user successfully" });
};

const removeRole = async (req, res, next) => {
  try {
    const { id, removeRole } = req.body;
    const user = await User.findById(id);
    const role = user.role;
    if (role && !removeRole) {
      return res.status(200).json({ message: `user has ${role} role` });
    } else {
      user.role = null;
      await user.save();
      return res.status(200).json({ message: "user role removed" });
    }
  } catch (err) {
    return next(err);
  }
};

const depositManually = async (req, res, next) => {
  const { id, amount } = req.body;
  try {
    const payment = new Payment({
      user: id,
      amount: parseInt(amount),
      status: "success",
      paymentAction: "manually",
    });
    await payment.save();
    const user = await User.findById(id);
    user.walletDetails.totalAmount += parseInt(amount);
    user.walletDetails.depositAmount += parseInt(amount);
    await user.save();
    return res
      .status(200)
      .json({ message: "Amount added to user wallet", user });
  } catch (err) {
    return next(err);
  }
};

const minMax = async (req, res, next) => {
  try {
    const { min, max } = req.body;
    // await new MinMax({ min: parseInt(min), max: parseInt(max) }).save()
    const minmax = await MinMax.findOneAndUpdate(
      {},
      { min: parseInt(min), max: parseInt(max) },
      { new: true,upsert:true },
    );
    return res
      .status(200)
      .json({ message: "Min Max updated successfully", minmax });
  } catch (err) {
    return next(err);
  }
};

const withdrawnbySuperAdmin = async (req, res, next) => {
  try {
    const { amount } = req.body;
    const adminWallet = await AdminWallet.findOne({});
    if (amount > adminWallet.totalAmount) {
      return res.status(200).json({ message: "Insufficient amount" });
    }
    adminWallet.totalAmount = adminWallet.totalAmount - parseInt(amount);
    adminWallet.withDrawlAmount = adminWallet.withDrawlAmount + parseInt(amount);
    await adminWallet.save();
    const timeStamp = new TimeStamp({
      date: new Date(),
      withDrawlAmount: amount,
    });
    await timeStamp.save();
    return res.status(200).json({ message: "Withdrawn Successfully" });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  addRole,
  removeRole,
  depositManually,
  minMax,
  withdrawnbySuperAdmin,
};
