const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
    bannerContent:[String]
}
)

module.exports = mongoose.model("Slider",sliderSchema);