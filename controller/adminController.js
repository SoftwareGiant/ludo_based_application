const AppError = require("../controlError/AppError");
const GameDetails = require("../models/gameDetails");
const PaymentDetails = require("../models/payment");
const User = require("../models/user");
const httpStatusandError = require("../controlError/httpStatusandError");
const error = httpStatusandError();

const updateAmount = async (gameDetail) => {
  console.log(gameDetail,"hiiiiiiii")
  if (gameDetail.gameResultDetail.player1.outcome == "win") {
    console.log("hekkkk");
    const totalAmount = gameDetail.player1.walletDetails.totalAmount;
    const balletAmount = gameDetail.battleDetails.amount;
    const winningAmount = gameDetail.player1.walletDetails.winningAmount;
    gameDetail.player1.walletDetails.totalAmount =
      totalAmount + 1.95 * balletAmount;

    gameDetail.player1.walletDetails.winningAmount =
      winningAmount + 0.95 * balletAmount;
    gameDetail.player2.walletDetails.winningAmount =
      winningAmount - 0.95 * balletAmount;
    gameDetail.player2.walletDetails.totalAmount =
      totalAmount - 1.95 * balletAmount;
  } else if (gameDetail.gameResultDetail.player2.outcome == "win") {
    console.log("huhhhh");
    const totalAmount = gameDetail?.player2.walletDetails.totalAmount;
    const balletAmount = gameDetail?.battleDetails?.amount;
    const winningAmount = gameDetail?.player2.walletDetails.winningAmount;
    gameDetail.player2.walletDetails.totalAmount =
      totalAmount + 1.95 * balletAmount;
    gameDetail.player2.walletDetails.winningAmount =
      winningAmount + 0.95 * balletAmount;
    gameDetail.player1.walletDetails.winningAmount =
      winningAmount - 0.95 * balletAmount;
    gameDetail.player1.walletDetails.totalAmount =
      totalAmount - 1.95 * balletAmount;
  }
  await gameDetail.player1.save();
  await gameDetail.player2.save();
};

const findGameAndChangeResult = async (req, res, next) => {
  try {
    const { gameId, changeTheResult } = req.body;
    const gameDetail = await GameDetails.findById(gameId).populate(
      "player1 player2",
    );
    if (changeTheResult) {
      if (gameDetail.gameResultDetail.player1.outcome === "win") {
        gameDetail.gameResultDetail.player1.outcome = "lose";
        gameDetail.gameResultDetail.player2.outcome = "win";
        gameDetail.gameResultDetail.player2.proofImage =
          gameDetail.gameResultDetail.player1.proofImage;
        gameDetail.gameResultDetail.player1.proofImage = "";
      } else if (gameDetail.gameResultDetail.player1.outcome === "lose") {
        gameDetail.gameResultDetail.player1.outcome = "win";
        gameDetail.gameResultDetail.player2.outcome = "lose";
        gameDetail.gameResultDetail.player1.proofImage =
          gameDetail.gameResultDetail.player2.proofImage;
        gameDetail.gameResultDetail.player2.proofImage = "";
      }
      await gameDetail.save();
      await updateAmount(gameDetail);
      return res.status(200).json({ message: "Result changed successfully" });
    }
    return res.status(200).json({ gameDetail });
  } catch (err) {
    next(err);
  }
};

const finduserdetails = async (req, res, next) => {
  try {
    const {userId} = req.body;
    const gameDetails = await GameDetails.find({
      $or: [{ player1: userId }, { player2: userId }],
    })
      .populate("player1")
      .populate("player2");
    const paymentDetails = await PaymentDetails.find({ user: userId });
    return res.status(200).json({ gameDetails, paymentDetails });
  } catch (err) {
    next(err);
  }
};

const newKycVerification = async (_, res) => {
  try {
    const users = await User.find({ "userKyc.verificationStatus": false }).sort(
      {
        createdAt: -1,
      },
    );
    if (!users || users.length === 0) {
      throw new AppError("User data not found", 404);
    }
    return res.status(200).json({ users });
  } catch (e) {
    throw e;
  }
};

const depositDetails = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 10;
  const skip = (page - 1) * perPage;
  try {
    const depositDetails = await PaymentDetails.find({
      paymentAction: "deposit",
    })
      .skip(skip)
      .limit(perPage)
      .sort({ createdAt: -1 })
    return res.status(200).json({ depositDetails });
  } catch (err) {
    throw new AppError(error[500], 500);
  }
};

const withdrawnDetails = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 10;
  const skip = (page - 1) * perPage;
  try {
    const withdrawnDetails = await PaymentDetails.find({
      paymentAction: "withdrawl",
    })
      .skip(skip)
      .limit(perPage)
      .sort({ createdAt: -1 })
    return res.status(200).json({ withdrawnDetails });
  } catch (err) {
   
    throw new AppError(error["500"], 500);
  }
};

module.exports = {
  findGameAndChangeResult,
  finduserdetails,
  newKycVerification,
  depositDetails,
  withdrawnDetails,
};
