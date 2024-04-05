const mongoose = require("mongoose");
// this will be used for tracking player in waiting
// for the game that will be created by admin
const WaitingQueueSchema = new mongoose.Schema(
  {
    battleId: String,
    waitingQueue: [
      {
        playerId: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("WaitingQueue", WaitingQueueSchema);
