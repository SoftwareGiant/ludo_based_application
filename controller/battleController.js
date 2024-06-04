const AppError = require("../controlError/AppError");
const customStatuandError = require("../controlError/httpStatusandError");
const error = customStatuandError();
const Battle = require("../models/battle");

const allBattle = async (req, res, next) => {
  const allBattle = await Battle.find({});
  return res.status(200).json({ allBattle });
};

const addBattle = async (req, res, next) => {
  try {
    const newBattle = new Battle({
      ...req.body,
    });
    await newBattle.save();
    if (!newBattle) {
      return next(new AppError("Please try again later", 500));
    } else {
      return res
        .status(200)
        .json({ message: "New Battle created successfully", newBattle });
    }
  } catch (e) {
    return next(e);
  }
};

const editBattle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBattle = await Battle.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true },
    );
    return res
      .status(200)
      .json({ message: "Battle Updated Successfully", updatedBattle });
  } catch (e) {
    return next(e);
  }
};

const deleteBattle = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Battle.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Battle deleted Successfully", deleteBattle });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  allBattle,
  addBattle,
  editBattle,
  deleteBattle,
};
