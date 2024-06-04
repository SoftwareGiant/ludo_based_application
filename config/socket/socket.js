const { Server } = require("socket.io");
const { createServer } = require("http");
const Battle = require("../../models/battle");
const Message = require("../../models/message");
const Socket = (app) => {
  const httpServer = createServer(app);
  global.io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"]
    }
  });
  // yaha me admin ko ek room id bana ke denge aur usme bhejenge yaha se 50 sec ke hatne ke bad
  // then agar khel pata hai to thik haii nhi to pls try again

  const roomId = () => {
    return "Chatting" + Date.now();
  };
  global.onlineUsers = new Map();
  global.io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    global.onlineUsers[userId] = socket;
    const changeStream = Battle.watch();

    changeStream.on("change", async (change) => {
      try {
        // const currentTime = Date.now();
        // { battleTimeStampOnUserScreen: { $gt: currentTime } }
        const filteredData = await Battle.find({
          $and: [{ userMatched: false }, { createdByUser: true }]
        }).sort({ battleTimeStamp: -1 });
        if (filteredData.length > 0) {
          const userBattle = filteredData.map((e) => e.player1 == userId);
          const filteredDataForAuser = filteredData.map((e) => e.player1 != userId);
          socket.emit("databaseChange", [...userBattle, ...filteredDataForAuser]);
        } else {
          socket.emit("databaseChange", []);
        }
      } catch (error) {
        socket.emit("error", err);
      }
    });

    socket.on("allNewGame", async () => {
      // const currentTime = Date.now();
      // { battleTimeStampOnUserScreen: { $gt: currentTime }}
      const allGameData = await Battle.find({
        $and: [{ userMatched: false }, { createdByUser: true } ]
      }).sort({ battleTimeStamp: -1 });
      if (allGameData.length > 0) {
        const userBattle = allGameData?.filter((e) => e.player1 == userId);
        const filteredDataForAuser = allGameData?.filter((e) => e.player1 != userId);
        socket.emit("allNewGame", [...userBattle, ...filteredDataForAuser]);
      } else {
        socket.emit("allNewGame", []);
      }
    });

    // for joiing chat room
    socket.on("joinRoom", async (gameSessionId) => {
      if (!gameSessionId) {
        const id = roomId();
        socket.join(id);
        const message = new Message({
          roomId
        });
        await message.save();
      } else {
        socket.join(gameSessionId);
      }
      socket.emit("RoomJoined", gameSessionId);
    });

    socket.on("sendMessage", async (data) => {
      const message = new Message({
        senderId: data.senderId,
        receiverId: data.receiverId,
        message: data.message,
        gameSessionId: data.gameSessionId
      });
      await message.save();
      io.to(data.gameSessionId).emit("message", data);
    });

    socket.on("disconnect", () => {
      delete global.onlineUsers[userId];
      console.log("user disconnecteddd", socket.id);
    });
  });

  httpServer.listen(8003, () => console.log("server connected with socket iio"));
};

module.exports = Socket;
