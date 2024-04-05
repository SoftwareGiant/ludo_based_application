const mongoose = require("mongoose");
//payments related details...deposit and withdrawll
const PaymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  amount: Number,
  transactionId: String,
  payment_method: String,
  currency: String,
  status: {
    type: String,
    enum: ["pending", "success", "failed"],
  },
  paymentAction: {
    type: String,
    enum: ["deposit", "withdrawl", "manually"],
  },
  // it should be here as someone can do payment with other details
  payer_info: {
    email: String,
    first_name: String,
    last_name: String,
    payer_id: String,
  },

  payment_platform: {
    type: String,
    enum: ["Paytm", "PhonePay", "GooglePay"],
  },

  utrNo: String,
  transactionImg: String,
  payee_info: {
    merchant_id: String,
    email: String,
  },

  // fee taken by payment methods
  transaction_fee: Number,

  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Payment", PaymentSchema);
