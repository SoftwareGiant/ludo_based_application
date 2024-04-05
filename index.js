const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");
const user = require("./router/user");
const { expressMiddleware } = require("./config/middleware/express_middleware");
const connectDB = require("./config/database/db");

expressMiddleware(app);
connectDB();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const generateUniqueId = () => {
  const id = Math.random().toString(36).substring(2, 10);
  return id;
};

const waitingQueue = [];
io.on("connection", (socket) => {
  socket.on("playgame", (e) => {
    waitingQueue.push(socket.id);
    const timeout = setTimeout(() => {
      const index = waitingQueue.indexOf(socket.id);
      if (index !== -1) {
        // If the user is still in the waiting queue after the timeout, remove them and notify.
        waitingQueue.splice(index, 1);
        socket.emit("noOpponentFound", "Please try again later.");
      }
    }, 45000);

    for (const opponentSocketId of waitingQueue) {
      if (opponentSocketId !== socket.id) {
        // Match found! Remove both players from the queue and start the game.
        clearTimeout(timeout);
        waitingQueue.splice(waitingQueue.indexOf(socket), 1);
        waitingQueue.splice(waitingQueue.indexOf(opponentSocketId), 1);
        const gameRoomId = generateUniqueId();
        socket.emit("user_matched", gameRoomId);

        // Create a game room and notify players.
        const gameRoom = io.of(`/game/${gameRoomId}`);
        gameRoom.on("connection", (playerSocket) => {
          const roomName = generateUniqueId();
          playerSocket.join(roomName);
          io.to(socket.id).emit("matchFound", roomName);
          io.to(opponentSocketId).emit("matchFound", roomName);

          playerSocket.on("sendMessage", (message) => {
            // gameRoom.to(playerSocket.room).emit("receiveMessage", message);
            gameRoom.to(roomName).emit("receiveMessage", message);
          });
        });
      }
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnecteddd", socket.id);
  });
});

app.get("/", (req, res) => {
  console.log("hello worldd");
  return res.status(200).json({ message: "server started okayyy" });
});

app.get("/playgame", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});
app.use("/api/user", user);
app.use("/api/battle", user);

httpServer.listen(8001, () => console.log("server connected with socket iio"));
