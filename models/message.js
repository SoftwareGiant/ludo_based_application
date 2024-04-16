const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  messageDetails: [
    {
      senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      message: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Message", MessageSchema);
