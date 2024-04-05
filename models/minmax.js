const mongoose = require("mongoose");
const minmaxSchema = new mongoose.Schema(
  {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("MinMax", minmaxSchema);
