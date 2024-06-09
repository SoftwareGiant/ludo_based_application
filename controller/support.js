const Support = require("../models/support");
const AppError = require("../controlError/AppError");

const addSupport = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { message } = req.body;
    const support = await Support.findOneAndUpdate(
      { createdBy: userId },
      {
        $push: {
          messages: {
            message: message,
            sender: userId
          }
        }
      },
      {
        upsert: true,
        new: true
      }
    );
    if(support){
      if(support.status == "closed"){
        support.status = "open"
        await support.save()
      }
    }
    if (!support) {
      throw new AppError("Server is not responding!Please try again in sometime.", 500);
    }
    return res.status(200).json({ support });
  } catch (err) {
    // return next(
    //   new AppError(
    //     "Server is not responding!Please try again in sometime",
    //     500,
    //   ),
    // );
    return next(err);
  }
};

const replySupport = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { supportId, message } = req.body;
    const support = await Support.findByIdAndUpdate(
      supportId,
      {
        $push: {
          messages: {
            message: message,
            sender: userId
          }
        }
      },
      {
        new: true
      }
    );


    if (!support) {
      throw new AppError("Server is not responding!Please try again in sometime", 500);
    }
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    // return next(
    //   new AppError(
    //     "Server is not responding!Please try again in sometime",
    //     500,
    //   ),
    // );
    return next(err);
  }
};

const supportMessages = async (req, res, next) => {
  const userId = req.userId;
  const ticket = await Support.findOne({ createdBy: userId });
  return res.status(200).json({ ticket });
};

const listofAll = async (req, res, next) => {
  const listofall = await Support.find({}).populate("createdBy");
  if (listofall.length == 0) {
    return res.status(404).json({ message: "No support chat found" });
  }
  return res.status(200).json({ listofall });
};

const supportMessagesForAdmin = async (req, res, next) => {
  try {
    const {userId} = req.body;
    console.log(userId,"y8iurrfgvehjbj")
    const ticket = await Support.findOne({ createdBy: userId });
    return res.status(200).json({ ticket });
  } catch (err) {
    return next(err);
  }
};

const changeStatus = async (req, res, next) => {
  try {
    const { status, userId } = req.body;
    await Support.findOneAndUpdate({ createdBy: userId }, { status }, { new: true });
    return res.status(200).json({ message: "Status changed" });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  addSupport,
  replySupport,
  supportMessages,
  listofAll,
  supportMessagesForAdmin,
  changeStatus
};
