const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ticket: [{
  issueNo:Number,
  messages: [
    {
      message: String,
      createdAt: { type: Date, default: Date.now },
      sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
  status: { type: String, enum: ["open", "closed"], default: "open" },
  lastUpdated: { type: Date, default: Date.now },
}]
});

module.exports = mongoose.model("Support", supportSchema);