const { Server } = require("socket.io");
const { createServer } = require("http");
const Battle = require("../../models/battle");
const Message = require("../../models/message");
const Socket = (app) =>{
  const httpServer = createServer(app);
  global.io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });
  // yaha me admin ko ek room id bana ke denge aur usme bhejenge yaha se 50 sec ke hatne ke bad
  // then agar khel pata hai to thik haii nhi to pls try again
  
  const roomId = () => {
    return "Chatting" + Date.now();
  };
  global.onlineUsers = new Map();
  global.io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    global.onlineUsers[userId]= socket;
    const roomIds = JSON.parse(socket.handshake.query.roomIds);
    for(let i =0; i<roomIds?.length;i++){
      global.onlineUsers[userId].join(roomIds[i])
    } 
    const changeStream = Battle.watch();
    changeStream.on("change", async (change) => {
      try {
        const currentTime = Date.now();
        const filteredData = await Battle.find({
          userMatched: false,
          createdByUser: true,
          battleTimeStampOnUserScreen: { $gt: currentTime },
        });
        socket.emit("databaseChange", filteredData);
      } catch (error) {
        socket.emit("error", err);
      }
    });
    socket.on("allNewGame",async()=>{
      const currentTime = Date.now();
      const allGameData = await Battle.find({
        userMatched: false,
        createdByUser: true,
        battleTimeStampOnUserScreen: { $gt: currentTime },
      });
      socket.emit("allNewGame", allGameData);
    })
  
    // for joiing chat room
    socket.on("joinRoom", async (gameSessionId) => {
      if (!gameSessionId) {
        const id = roomId();
        socket.join(id);
        const message = new Message({
          roomId,
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
        gameSessionId: data.gameSessionId,
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

}

module.exports= Socket;