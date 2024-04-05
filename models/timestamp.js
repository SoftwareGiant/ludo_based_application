const mongoose = require("mongoose");
const timestampSchema = new mongoose.Schema({
  date: Date,
  depositAmount: {
    type: Number,
    default: 0,
  },
  withDrawlAmount: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("TimeStamp", timestampSchema);
