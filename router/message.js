const express = require("express");
const router = express.Router();
const Message = require("../models/message");

router.get("/:gameSessionId", async (req, res) => {
  try {
    const messages = await Message.find({
      gameSessionId: req.params.gameSessionId,
    }).sort("timestamp");
    return res.status(200).json({ messages });
  } catch (error) {
    returnres.status(500).json({ message: error.message });
  }
});

module.exports = router;
