const mongoose = require("mongoose");
// here we create battle....
const battleSchema = new mongoose.Schema({
  battleTitle: String,
  amount: Number,
  waitingPlayer: Number,
  livePlayer: Number,
  battleTimeStamp: Number,
  battleTimeStampOnUserScreen: Number,
  createdByUser: {
    type: Boolean,
    default: true,
  },
  userMatched: {
    type: Boolean,
    default: false,
  },
  player1: String,
  player2: String,
  roomId: String,
});
module.exports = mongoose.model("Battle", battleSchema);
