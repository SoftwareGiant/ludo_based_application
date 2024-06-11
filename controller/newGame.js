const GameDetail = require("../models/gameDetails");
const User = require("../models/user");
const Battle = require("../models/battle");
const AdminWallet = require("../models/adminwallet");
const Notification = require("../models/notification");
const cron = require("node-cron");
const AppError = require("../controlError/AppError");
const Message = require("../models/message");

function generateRoomId() {
  return "roomid" + Date.now();
}

const createBattle = async (req, res, next) => {
  try {
    const { battleAmount } = req.body;
    if (parseInt(battleAmount) < 50 || parseInt(battleAmount) > 20000) {
      return res.status(400).json({
        message: "Battle amount should be greater than 50 and less than 20,000"
      });
    }
    const userId = req.userId;
    const user = await User.findById(userId);
    if (parseInt(battleAmount) > user?.walletDetails?.totalAmount) {
      return res.status(400).json({ message: "You don't have sufficient amount!" });
    }

    const battleDetail = await Battle.findOne({
      $or: [{ player1: userId }, { player2: userId }]
    });

    if (battleDetail && !battleDetail?.userMatched) {
      return res.status(200).json({ message: "You can't create other battle at same time!" });
    }
    const gameDetail = await GameDetail.findOne({
      $or: [{ player1: userId }, { player2: userId }]
    });

    if (gameDetail?.gameactivationTimestamp > Date.now() && (gameDetail?.status == "running" || gameDetail?.status == "matched")) {
      return res.status(400).json({ message: "You are already active in other game!" });
    }
    const currentTime = Date.now();
    await user.save();
    const battleTimeOnScreen = currentTime + 2 * 60 * 1000;
    const roomId = generateRoomId();
    const newBattle = new Battle({
      amount: parseInt(battleAmount),
      battleTimeStamp: currentTime,
      // battleTimeStampOnUserScreen: battleTimeOnScreen,
      player1: userId,
      roomId
    });

    global.onlineUsers[userId]?.join(roomId);

    await newBattle.save();
    const notification = new Notification({
      user: req.userId,
      message: "Battle created!"
    });
    await notification.save();

    return res.status(200).json({
      message: "Please wait we are searching a user for you",
      battleTimeOnScreen
    });
    // on frontend we need to create timer for it.
  } catch (err) {
    return next(err);
  }
};

const deleteBattle = async (req, res, next) => {
  try {
    const { battleId } = req.body;
    const deleteBattle = await Battle.findByIdAndDelete(battleId);
    if (deleteBattle) {
      return res.status(200).json({ message: "Battle deleted successfully" });
    }
    return res.status(500).json({ message: "Something went wrong!Try again later" });
  } catch (err) {
    return next(err);
  }
};

// IN MATCHUSER PART ALSO WE NEED TO USE SOCVKET IO
// MATCH HOTE HI AGLE USER KO DIKHANA HAII.

const matchUser = async (req, res, next) => {
  try {
    const { battleAmount, id, player1 } = req.body;
    const userId = req.userId;
    const user = await User.findById(userId);

    const battleDetail = await Battle.findOne({
      $or: [{ player1: userId }, { player2: userId }]
    });

    if (battleDetail && !battleDetail?.userMatched) {
      return res.status(400).json({ message: "You have created your own battle!Please wait for other user to join." });
    }

    if (parseInt(battleAmount) > user.walletDetails.totalAmount) {
      return res.status(400).json({
        message: "You don't have sufficient amount to play this game!"
      });
    }
    const gameDetail = await GameDetail.findOne({
      $and: [
        { $or: [{ player1: userId }, { player2: userId }] },
        { $or: [{ status: "running" }, { status: "matched" }] }
      ]
    });
   
    if (!user) {
      throw new AppError("Something went wrong!Please try again later", 500);
    } else if (gameDetail && (gameDetail?.gameactivationTimestamp > Date.now() || gameDetail?.status != "matched")) {
      return res.status(400).json({ message: "You are already active in other game!" });
    } else {
      const matchingTimeStamp = Date.now();
      const newGameDetail = new GameDetail({
        battleDetails: {
          battleTitle: "",
          amount: battleAmount,
          battleId: id
        },
        player1,
        player2: userId,
        matchingTimeStamp,
        gameactivationTimestamp: matchingTimeStamp + 1 * 60 * 1000,
        status: "matched"
      });

      //locking the amount.
      user.walletDetails.lockedAmount += parseInt(battleAmount);
      user.walletDetails.totalAmount -= parseInt(battleAmount);
      await user.save();

      //locking the amount

      const user1 = await User.findById(player1);
      user1.walletDetails.lockedAmount += parseInt(battleAmount);
      user1.walletDetails.totalAmount -= parseInt(battleAmount);
      await user1.save();

      const battle = await Battle.findByIdAndUpdate(id, { player2: userId, userMatched: true }, { new: true });
      newGameDetail.battleDetails.roomId = battle.roomId;
      const roomID = battle.roomId;

      global.onlineUsers[userId]?.join(roomID);

      global.io?.sockets.in(roomID).emit("match", { message: "You get matched!!", roomID: roomID });
      await newGameDetail.save();
      const notification = new Notification({
        user: req.userId,
        message: "You got a match!🥳Let's play the game"
      });
      await notification.save();
      return res.status(200).json({ newGameDetail });
    }
  } catch (err) {
    return next(err);
  }
};

const updatePayment = async (gameDetail) => {
  const adminWallet = await AdminWallet.findOneAndUpdate({}, {}, { upsert: true, new: true });
  if (gameDetail.gameResultDetail.player1.outcome == "win") {
    gameDetail.player1.walletDetails.totalAmount += gameDetail?.battleDetails?.amount * 1.95;
    gameDetail.player1.walletDetails.winingAmount += gameDetail?.battleDetails?.amount * 0.95;
    gameDetail.player1.walletDetails.lockedAmount -= gameDetail?.battleDetails?.amount;
    adminWallet.totalAmount += gameDetail.battleDetails.amount * 0.04;
    const player1 = gameDetail.player1;
    const user = await User.findOne({ "referralDetails.refferedUser": player1 });
    if (user) {
      user.walletDetails.referralAmount = user.walletDetails.referralAmount + gameDetail.battleDetails.amount * 0.01;
      user.walletDetails.totalAmount = user.walletDetails.totalAmount + gameDetail.battleDetails.amount * 0.01;
      await user.save();
    }
    // store extra 0.05 amount in admin wallet.
  }
  if (gameDetail.gameResultDetail.player2.outcome == "win") {
    gameDetail.player2.walletDetails.totalAmount += gameDetail?.battleDetails?.amount * 1.95;
    gameDetail.player2.walletDetails.winingAmount += gameDetail?.battleDetails?.amount * 0.95;
    gameDetail.player2.walletDetails.lockedAmount -= gameDetail?.battleDetails?.amount;
    adminWallet.totalAmount += gameDetail.battleDetails.amount * 0.04;
    const player2 = gameDetail.player2;
    const user = await User.findOne({ "referralDetails.refferedUser": player2 });
    if (user) {
      user.walletDetails.referralAmount = user.walletDetails.referralAmount + gameDetail.battleDetails.amount * 0.01;
      user.walletDetails.totalAmount = user.walletDetails.totalAmount + gameDetail.battleDetails.amount * 0.01;
      await user.save();
    }
    // store extra 0.05 amount in admin wallet.
  }
  if (gameDetail.gameResultDetail.player1.outcome == "lose") {
    gameDetail.player1.walletDetails.lockedAmount -= gameDetail?.battleDetails?.amount;
    // gameDetail.player1.walletDetails.totalAmount -= gameDetail?.battleDetails?.amount;
    gameDetail.player1.walletDetails.losingAmount += gameDetail?.battleDetails?.amount;
  }
  if (gameDetail?.gameResultDetail.player2.outcome == "lose") {
    gameDetail.player2.walletDetails.lockedAmount -= gameDetail?.battleDetails?.amount;
    // gameDetail.player2.walletDetails.totalAmount -= gameDetail?.battleDetails?.amount;
    gameDetail.player2.walletDetails.losingAmount += gameDetail?.battleDetails?.amount;
  }
  gameDetail.paymentSettlement = true;
  gameDetail.status = "closed";
  await gameDetail.save();
  await gameDetail.player1.save();
  await gameDetail.player2.save();
  await adminWallet.save();
};

// gameactivationTimestamp
cron.schedule("*/5 * * * *", async () => {
  const gameDetail = await GameDetail.find({
    gameactivationTimestamp: {
      $lt: Date.now()
    }
  }).populate("player1 player2");
  for (i = 0; i < gameDetail.length; i++) {
    if (gameDetail[i].status == "running" && gameDetail[i].gameResultDetail.player1.outcome == "win" && gameDetail[i].gameResultDetail.player2.outcome == null) {
      gameDetail[i].gameResultDetail.player2.outcome = "lose";
      await gameDetail[i].save();
      await updatePayment(gameDetail[i]);
    } else if (gameDetail[i].gameResultDetail.player2.outcome == "win" && gameDetail[i].gameResultDetail.player1.outcome == null) {
      gameDetail[i].gameResultDetail.player1.outcome = "lose";
      await gameDetail[i].save();
      await updatePayment(gameDetail[i]);
    }
  }
});

const updateResult = async (req, res, next) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    const { outcome } = req.body;
    if (!user) {
      throw new AppError("Something went wrong!Please try again later.", 500);
    }
    const gameDetail = await GameDetail.findOne({
      $or: [{ player1: userId }, { player2: userId }],
      status: "running"
    }).populate("player1 player2");

    if (!gameDetail) {
      throw new AppError("You are not active in any game!", 404);
    }

    // if (gameDetail.gameactivationTimestamp > Date.now()) {
    //   return res.status(500).json({ messaage: "Please first play the game!" });
    // }

    if (outcome === "win" && (gameDetail.gameResultDetail.player1.outcome === "win" || gameDetail.gameResultDetail.player2.outcome === "win")) {
      return res.status(200).json({ message: "Opponent Player is already updated it as win! " });
    }

    if (outcome === "win") {
      if (gameDetail.player1.id === userId) {
        gameDetail.gameResultDetail.player1.outcome = outcome;
        gameDetail.gameResultDetail.player1.proofImage = req.file.filename;
      } else if (gameDetail.player2.id === userId) {
        gameDetail.gameResultDetail.player2.outcome = outcome;
        gameDetail.gameResultDetail.player2.proofImage = req.file.filename;
      }
    } else {
      //agar khud se loose man leta hai to payment update kar doo okayyy.
      if (gameDetail.player1.id === userId) {
        gameDetail.gameResultDetail.player1.outcome = outcome;
        gameDetail.gameResultDetail.player2.outcome = "win";
      } else if (gameDetail.player2.id === userId) {
        gameDetail.gameResultDetail.player2.outcome = outcome;
        gameDetail.gameResultDetail.player1.outcome = "win";
      }
    }
    if ((gameDetail.gameResultDetail.player1.outcome == "win" && gameDetail.gameResultDetail.player2.outcome == "lose") || (gameDetail.gameResultDetail.player2.outcome == "win" && gameDetail.gameResultDetail.player1.outcome == "lose")) {
      await gameDetail.save();
      await updatePayment(gameDetail);
    }

    gameDetail.gameClosingTimeStamp = Date.now();
    await gameDetail.save();
    if (outcome == "win") {
      return res.status(200).json({
        message: "Result updated!In sometime you will get your winning cash."
      });
    }

    const roomID = gameDetail.battleDetails.roomId;

    global.onlineUsers[gameDetail.player1.id]?.join(roomID);
    global.onlineUsers[gameDetail.player2.id]?.join(roomID);

    global.io?.sockets.in(roomID).emit("gameupdate", { message: "Game Result updated!" });

    return res.status(200).json({ message: "Result updated" });
  } catch (err) {
    return next(err);
  }
};

const gameClosingTrack = async (req, res, next) => {
  try {
    const allGameDetails = await GameDetail.find({ gameClosingTimeStamp: { $lt: gameactivationTimestamp } });
    return res.status(200).json({ allGameDetails });
  } catch (err) {
    return next(err);
  }
};

// PLAYER1 OR PLAYER2 JISSE BHI CODE DALWANA AASAN HOGA
// AND I THINK PLAYER2 SE
const updateCode = async (req, res, next) => {
  try {
    const { gameCode } = req.body;
    const userId = req.userId;
    const gameDetail = await GameDetail.findOne({
      $or: [{ player1: userId }, { player2: userId }],
      status: "matched"
    });
    if (!gameDetail) {
      return res.status(404).json({ message: "Code is already set for this battle" });
    }
    gameDetail.gameCode = gameCode;
    gameDetail.status = "running";
    const roomId = gameDetail?.battleDetails.roomId;
    await gameDetail?.save();
    const player1 = gameDetail.player1;
    global.onlineUsers[player1]?.join(roomId);
    const player2 = gameDetail.player2;
    global.onlineUsers[player2].join(roomId);
    const message = await Message.findOne({
      $and: [
        {
          $or: [{ "messageDetails.senderId": player1 }, { "messageDetails.receiverId": player1 }]
        },
        {
          $or: [{ "messageDetails.senderId": player2 }, { "messageDetails.receiverId": player2 }]
        }
      ]
    });
    if (message) {
      message.messageDetails.push({
        senderId: player2,
        receiverId: player1,
        message: gameDetail.gameCode
      });
      await message.save();
    } else {
      const newMessage = new Message({
        messageDetails: [
          {
            senderId: player2,
            receiverId: player1,
            message: gameDetail.gameCode
          }
        ]
      });
      await newMessage.save();
    }
    global.io?.sockets.in(roomId).emit("updatecode", { gameCode, player2 });

    io.to(global.onlineUsers[userId]?.id).emit("newMessage", {
      senderId: player2,
      receiverId: player1,
      message: gameDetail.gameCode
    });

    return res.status(200).json({ gameDetail });
  } catch (err) {
    return next(err);
  }
};

// working is required in cancel partt

const afterCancellingGame = async (cancelanyway, id, userId) => {
  const gameDetail = await GameDetail.findById(id);
  if (!cancelanyway) {
    const player1_id = gameDetail.player1;
    const player1 = await User.findById(player1_id);
    const lockedAmount = gameDetail.battleDetails.amount;
    player1.walletDetails.totalAmount = player1.walletDetails.totalAmount + lockedAmount;
    player1.walletDetails.lockedAmount = player1.walletDetails.lockedAmount - lockedAmount;
    await player1.save();
    const player2_id = gameDetail.player2;
    const player2 = await User.findById(player2_id);
    const lockedAmount_2 = player2.walletDetails.lockedAmount;
    player2.walletDetails.totalAmount = player2.walletDetails.totalAmount + lockedAmount_2;
    player2.walletDetails.lockedAmount = player2.walletDetails.lockedAmount - lockedAmount_2;
    await player2.save();
  } else if (cancelanyway) {
    const adminWalletSchema = await AdminWallet.findOne({});
    if (gameDetail.player1 == userId) {
      const player1 = await User.findById(userId);

      const lockedAmount = gameDetail.battleDetails.amount;
      // player1.walletDetails.totalAmount = player1.walletDetails.totalAmount - lockedAmount;
      player1.walletDetails.lockedAmount = player1.walletDetails.lockedAmount - lockedAmount;
      await player1.save();
      const player2_id = gameDetail.player2;
      const player2 = await User.findById(player2_id);
      player2.walletDetails.totalAmount = player2.walletDetails.totalAmount + 1.95 * lockedAmount;
      player2.walletDetails.lockedAmount = player2.walletDetails.lockedAmount - lockedAmount;
      adminWalletSchema.totalAmount = adminWalletSchema.totalAmount + lockedAmount * 0.05;
      await player2.save();
      await adminWalletSchema.save();
    }

    if (gameDetail.player2 == userId) {
      const player2 = await User.findById(userId);
      const lockedAmount = player2.walletDetails.lockedAmount;
      // player2.walletDetails.totalAmount = player2.walletDetails.totalAmount - lockedAmount;
      player2walletDetails.lockedAmount = player2.walletDetails.lockedAmount - lockedAmount;
      await player2.save();
      const player1_id = gameDetail.player1;
      const player1 = await User.findById(player1_id);
      player1.walletDetails.totalAmount = player1.walletDetails.totalAmount + 1.95 * lockedAmount;
      player1.walletDetails.lockedAmount = player1.walletDetails.lockedAmount - lockedAmount;
      adminWalletSchema.totalAmount = adminWalletSchema.totalAmount + lockedAmount * 0.05;
      await player1.save();
      await adminWalletSchema.save();
    }
  }
};

const cancelGame = async (req, res, next) => {
  try {
    // in very starting only they can cancel the game once they will send the code then they wont
    // be able to cancel it.
    const { cancelanyway } = req.query ? req.query : false;
    const gameDetail = await GameDetail.findById(req.query.id);

    // { status: 'cancelled' },
    // { new: true }
    if (!gameDetail) {
      return res.status(404).json({ message: "No game found!" });
    }

    if (!gameDetail.gameCode) {
      await afterCancellingGame(cancelanyway, req.query.id, req.userId);
      gameDetail.status = "cancelled";
      await gameDetail.save();
      io.to(gameDetail.battleDetails.roomId).emit("game_cancelled", {
        message: "Game cancelled"
      });
      return res.status(200).json({ message: "Game cancelled successfully" });
    }

    if (gameDetail.gameCode && !cancelanyway) {
      return res.status(200).json({
        message: "You already receive the code.You couldn't cancel the game,If you will cancel it then opponent user would be winner"
      });
    }

    if (gameDetail.gameCode && cancelanyway) {
      afterCancellingGame(cancelanyway, req.query.id, req.userId);
      gameDetail.status = "cancelled";
      await gameDetail.save();
      io.to(gameDetail.battleDetails.roomId).emit("game_cancelled", {
        message: "Game cancelled"
      });
      return res.status(200).json({ message: "Game canelled successfully" });
    }
  } catch (err) {
    return next(err);
  }
};

const allGameHistory = async (req, res, next) => {
  try {
    const allGame = await GameDetail.find({});
    if (allGame.length == 0) {
      return res.status(200).json({});
    }
    return res.status(200).json({ allGame });
  } catch (err) {
    return next(err);
  }
};

const openChallenge = async (req, res, next) => {
  try {
    const userId = req.userId;
    const allOpenChallenge = await GameDetail.find({ status: "running", $or: [{ player1: userId }, { player2: userId }] });
    return res.status(200).json({ allOpenChallenge });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  createBattle,
  matchUser,
  updateResult,
  updateCode,
  cancelGame,
  allGameHistory,
  openChallenge,
  deleteBattle,
  gameClosingTrack
};
