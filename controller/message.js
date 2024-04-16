const Message = require("../models/message");

const allChat = async (req, res, next) => {
  const userId = req.userId;
  const allChatList = await Message.find({
    $or: [{ "messageDetails.senderId": userId }, { "messageDetails.receiverId": userId }]
  });
  return res.status(200).json({ allChatList });
};

const allMessage = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { id: otherUserId } = req.params;
    const allmessage = await Message.findOne({
      $and: [{ $or: [{ "messageDetails.senderId": userId }, { "messageDetails.receiverId": userId }] }, { $or: [{ "messageDetails.senderId": otherUserId }, { "messageDetails.receiverId": otherUserId }] }]
    });
    return res.status(200).json(allmessage);
  } catch (error) {
    return next(error);
  }
};

const sendMessage = async (req, res, next) => {
  const userId = req.userId;
  const { id: otherUserId } = req.params;
  console.log(otherUserId);
  const { message } = req.body;
  const messageToStore = {
    senderId: userId,
    receiverId: otherUserId,
    message
  };
  const allmessage = await Message.findOne({
    $and: [{ $or: [{ "messageDetails.senderId": userId }, { "messageDetails.receiverId": userId }] }, { $or: [{ "messageDetails.senderId": otherUserId }, { "messageDetails.receiverId": otherUserId }] }]
  });
  if (allmessage) {
    allmessage.messageDetails.push(messageToStore);
    await allmessage.save();
    const newMessage = allmessage.messageDetails[allmessage.messageDetails.length - 1];
    console.log(global.onlineUsers, "global.onlineUsersglobal.onlineUsers");
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
      console.log("hello world okayy");
      io.to(global.onlineUsers[otherUserId].id).emit("newMessage", newMessage);
    }
    return res.status(200).json(newMessage);
  }
};

module.exports = {
  allChat,
  allMessage,
  sendMessage
};
