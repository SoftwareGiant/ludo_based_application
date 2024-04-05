const mongoose = require("mongoose");
// admin wallet for admin control onlyyyy
const adminWalletSchema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    default: 0,
  },
  depositAmount: {
    type: Number,
    default: 0,
  },
  withDrawlAmount: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("AdminWallet", adminWalletSchema);
