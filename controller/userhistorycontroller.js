const GameDetails = require("../models/gameDetails");
const User = require("../models/user");
const PaymentDetails = require("../models/payment");
const userGameHistory = async (req, res, next) => {
  try {
    const userId = req.userId;
    const gameDetails = await GameDetails.find({
      $or: [{ player1: userId }, { player2: userId }],
    })
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
    const paymentDetails = await PaymentDetails.find({ user: userId });
    return res.status(200).json({ paymentDetails });
  } catch (e) {
    next(e);
  }
};

const allTypeHistory = async(req,res,next)=>{
  try{
   const {id}= req.params;
   console.log(id,"id okay")
   const gameDetails = await GameDetails.find({
    $or: [{ player1: id }, { player2: id }],
  })
    .populate("player1")
    .populate("player2");
  const paymentDetails = await PaymentDetails.find({ user: id });
  return res.status(200).json({gameDetails,paymentDetails})

  }catch(e){
    return next(e)
  }
}

module.exports = { userGameHistory, userPaymentHistory, allTypeHistory };
