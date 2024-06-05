const mongoose = require("mongoose");
// once user will matched then game detaills.
const GameDetailSchema = new mongoose.Schema({
  battleDetails: {
    battleTitle: String,
    amount: Number,
    battleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Battle",
    },
    roomId: String,
  },
  status: {
    type: String,
    enum: ["matched", "running", "cancelled", "closed"],
    default: "matched",
  },
  gameCode: String,
  player1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  player2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  matchingTimeStamp: Number,
  gameactivationTimestamp: Number,
  gameClosingTimeStamp:Number,
  gameResultDetail: {
    player1: {
      outcome: {
        type: String,
        enum: ["win", "lose"],
      },
      proofImage: String,
    },
    player2: {
      outcome: {
        type: String,
        enum: ["win", "lose"],
      },
      proofImage: String,
    },
  },
  paymentSettlement:{
    type:Boolean, 
    default:false
  }
});

module.exports = mongoose.model("GameDetails", GameDetailSchema);
