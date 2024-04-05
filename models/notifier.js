const mongoose = require("mongoose");

const notifierSchema = new mongoose.Schema(
  {
    message: String,
    noticeImage: String,
    anyAnnouncement: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Notifier", notifierSchema);
