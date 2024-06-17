const Message = require("../models/message");

const allChat = async (req, res, next) => {
  try {
    const userId = req.userId;
    const allChatList = await Message.find({
      $or: [{ "messageDetails.senderId": userId }, { "messageDetails.receiverId": userId }]
    })
      .sort({
        updatedAt: -1
      })
      .populate("messageDetails.senderId")
      .populate("messageDetails.receiverId");
    return res.status(200).json({ allChatList });
  } catch (err) {
    return next(err);
  }
};

const allMessage = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { id: otherUserId } = req.params;
    const allmessage = await Message.findOne({
      $and: [
        {
          $or: [{ "messageDetails.senderId": userId }, { "messageDetails.receiverId": userId }]
        },
        {
          $or: [{ "messageDetails.senderId": otherUserId }, { "messageDetails.receiverId": otherUserId }]
        }
      ]
    });
    return res.status(200).json(allmessage);
  } catch (error) {
    return next(error);
  }
};

const sendMessage = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { id: otherUserId } = req.params;
    const { message } = req.body;
    const messageToStore = {
      senderId: userId,
      receiverId: otherUserId,
      message
    };
    const allmessage = await Message.findOne({
      $and: [
        {
          $or: [{ "messageDetails.senderId": userId }, { "messageDetails.receiverId": userId }]
        },
        {
          $or: [{ "messageDetails.senderId": otherUserId }, { "messageDetails.receiverId": otherUserId }]
        }
      ]
    });
    if (allmessage) {
      allmessage.messageDetails.push(messageToStore);
      await allmessage.save();
      const newMessage = allmessage.messageDetails[allmessage.messageDetails.length - 1];
      if (global.onlineUsers[otherUserId]) {
        io.to(global.onlineUsers[otherUserId].id).emit("newMessage", newMessage);
      }
      return res.status(200).json(messageToStore);
    } else {
      const newMessage = new Message({
        messageDetails: [messageToStore]
      });
      await newMessage.save();

      if (global.onlineUsers[otherUserId]) {
        io.to(global.onlineUsers[otherUserId].id).emit("newMessage", newMessage);
      }
      return res.status(200).json(newMessage);
    }
  } catch (err) {
    return next(err);
  }
};

const makefavourite = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { id: otherUserId } = req.params;
    const allmessage = await Message.findOne({
      $and: [
        {
          $or: [{ "messageDetails.senderId": userId }, { "messageDetails.receiverId": userId }]
        },
        {
          $or: [{ "messageDetails.senderId": otherUserId }, { "messageDetails.receiverId": otherUserId }]
        }
      ]
    });
    if (allmessage) {
      allmessage.favourite.userId.push(otherUserId);
      allmessage.favourite.userId = [...new Set(allmessage.favourite.userId)];
      await allmessage.save();
      return res.status(200).json({ message: "Added in favourite list" });
    }
    return res.status(400).json({ message: "Please try again" });
  } catch (err) {
    return next(err);
  }
};

const removeFromFavourite = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { id: otherUserId } = req.params;
    const allmessage = await Message.findOne({
      $and: [
        {
          $or: [{ "messageDetails.senderId": userId }, { "messageDetails.receiverId": userId }]
        },
        {
          $or: [{ "messageDetails.senderId": otherUserId }, { "messageDetails.receiverId": otherUserId }]
        }
      ]
    });
    if (allmessage) {
      const indexof = allmessage.favourite.userId.indexOf(otherUserId);
      if (indexof !== -1) {
        allmessage.favourite.userId.splice(indexof, 1);
      }
      await allmessage.save();
      return res.status(200).json({ message: "Removed from favourite list" });
    }
    return res.status(400).json({ message: "Please try again" });
  } catch (err) {
    return next(err);
  }
};

const listOfFavourite = async (req, res, next) => {
  try {
    const userId = req.userId;
    const allChatList = await Message.find({
      $or: [{ "messageDetails.senderId": userId }, { "messageDetails.receiverId": userId }]
    });
    const filteredChatList = allChatList.filter((e) => e.favourite.userId.filter((id) => id != userId));
    if (allChatList.length > 0) {
      return res.status(200).json(allChatList);
    } else {
      return res.status(404).json({ message: "Not Found" });
    }
  } catch (err) {
    return next(err);
  }
};

const checkFavourite = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { id: otherUserId } = req.params;
    const allmessage = await Message.findOne({
      "favourite.userId": otherUserId,
      $and: [
        {
          $or: [{ "messageDetails.senderId": userId }, { "messageDetails.receiverId": userId }]
        },
        {
          $or: [{ "messageDetails.senderId": otherUserId }, { "messageDetails.receiverId": otherUserId }]
        }
      ]
    });
    if (allmessage) {
      return res.status(200).json({ message: "Favourite" });
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  allChat,
  allMessage,
  sendMessage,
  makefavourite,
  listOfFavourite,
  removeFromFavourite,
  checkFavourite
};
