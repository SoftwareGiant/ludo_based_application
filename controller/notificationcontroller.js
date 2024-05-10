const Notification = require("../models/notification");

const allNotification = async (req, res, next) => {
  try {
    const userId = req.userId;
    const allnotification = await Notification.find({ user: userId }).sort({
      createdAt: -1,
    });
    if (allnotification.length > 0)
      return res.status(200).json({ allnotification });
    return res.status(404).json({ message: "Notification not found" });
  } catch (err) {
    return next(err);
  }
};

const readNotification = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Notification.findByIdAndUpdate(
      id,
      { readStatus: true },
      { new: true }
    );
    return res.status(200).json({ message: "Notification status changed" });
  } catch (err) {
    return next(err);
  }
};

const clearNotification = async (req, res, next) => {
  try {
    const userId = req.userId;
    const allnotification = await Notification.deleteMany({ user: userId });
    return res.status(200).json({ allnotification });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  allNotification,
  readNotification,
  clearNotification,
};
