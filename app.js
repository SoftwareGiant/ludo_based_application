const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const { expressMiddleware } = require("./config/middleware/express_middleware");
const connectDB = require("./config/database/db");
const Battle = require("./models/battle");
const Message = require("./models/message");
const rateLimit = require("express-rate-limit");
const logger = require("./logger/index");
const sendMail = require("./helper/mailsending");



const httpServer = createServer(app);

const startServer = async()=>{

expressMiddleware(app);
await connectDB();


const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use((req, res, next) => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if (hours >= 0 && minutes > 0) {
    // return res.status(200).json({
    //   message: "The website is under service. Please come back later.",
    // });
    next();
  } else {
    next();
  }
});

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 1000,
  message: "You have exceeded the 100 requests in 24 hrs limit!",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// yaha me admin ko ek room id bana ke denge aur usme bhejenge yaha se 50 sec ke hatne ke bad
// then agar khel pata hai to thik haii nhi to pls try again

const roomId = () => {
  return "Chatting" + Date.now();
};

io.on("connection", (socket) => {
  // const changeStream = Battle.watch();
  // changeStream.on("change", async (change) => {
  //   try {
  //     const currentTime = Date.now();
  //     const filteredData = await Battle.find({
  //       userMatched: false,
  //       createdByUser: true,
  //       battleTimeStampOnUserScreen: { $gt: currentTime },
  //     });
  //     socket.emit("databaseChange", filteredData);
  //   } catch (error) {
  //     console.log(error,"okayy")
  //     socket.emit("error", err);
  //   }
  // });
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
    console.log("user disconnecteddd", socket.id);
  });
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: "server started okayyy" });
});

app.use("/api/superadmin", require("./router/superadmin"));
app.use("/api/user", require("./router/user"));
app.use("/api/battle", require("./router/battle_superadmin"));
app.use("/api/admin", require("./router/admin"));
app.use("/api/userhistory", require("./router/userhistory"));
app.use("/api/game", require("./router/gameDetails")(io));
app.use("/api/payment", require("./router/payment"));
app.use("/api/message", require("./router/message"));
app.use("/api/notifier", require("./router/notifier"));
app.use("/api/support", require("./router/support"));

app.use(async(err, req, res, next) => {
  logger.error(
    `${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`,
  );
  
  // await sendMail();
  return res.status(err.status).json({ message: err.message });
});

httpServer.listen(8003, () => console.log("server connected with socket iio"));
}

startServer();