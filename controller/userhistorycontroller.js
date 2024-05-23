const GameDetails = require("../models/gameDetails");
const PaymentDetails = require("../models/payment");
const Support = require("../models/support");
const userGameHistory = async (req, res, next) => {
  try {
    const userId = req.userId;
    const gameDetails = await GameDetails.find({
      $or: [{ player1: userId }, { player2: userId }]
    })
      .sort({ matchingTimeStamp: -1 })
      .populate("player1")
      .populate("player2");
    return res.status(200).json({ gameDetails });
  } catch (e) {
    next(e);
  }
};

const userPaymentHistory = async (req, res, next) => {
  try {
    const userId = req.userId;
    const paymentDetails = await PaymentDetails.find({ user: userId }).sort({ timestamp: -1 });
    return res.status(200).json({ paymentDetails });
  } catch (e) {
    next(e);
  }
};

const allTypeHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gameDetails = await GameDetails.find({
      $or: [{ player1: id }, { player2: id }]
    }).sort({matchingTimeStamp:-1})
      .populate("player1")
      .populate("player2");
    const paymentDetails = await PaymentDetails.find({ user: id }).sort({timestamp:-1});
    const supportHistory = await Support.findOne({ createdBy: id }).sort({timestamp:-1});
    return res.status(200).json({ gameDetails, paymentDetails, supportHistory });
  } catch (e) {
    return next(e);
  }
};

module.exports = { userGameHistory, userPaymentHistory, allTypeHistory };
