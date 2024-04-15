const express = require("express");
const router = express.Router();
const Message = require("../models/message");
const { verifyToken } = require("../helper/jwt_helper");
// router.get("/:gameSessionId", async (req, res) => {
//   try {
//     const messages = await Message.find({
//       gameSessionId: req.params.gameSessionId,
//     }).sort("timestamp");
//     return res.status(200).json({ messages });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// });

router.get("/allmessages",[verifyToken],async(req,res,next)=>{
  try{
      const userId = req.userId;
      const otherUserId = req.params.otherUserId;
      const allmessage = await Message.findOne({
        $and: [{ $or: [{ "messageDetails.senderId":userId  }, { "messageDetails.receiverId": userId }] },
         { $or: [{ "messageDetails.senderId": otherUserId  }, { "messageDetails.receiverId": otherUserId }] }]
      });
      return res.status(200).json({allmessage});
  }
  catch(error){
    return next(error);
  }
});

router.get("/allChat",[verifyToken],async(req,res,next)=>{
  const userId = req.userId;
  const allChatList = await Message.find({
    $or: [{ "messageDetails.senderId":userId  }, { "messageDetails.receiverId": userId }]
  });
  return res.status(200).json({allChatList});
})

module.exports = router;
