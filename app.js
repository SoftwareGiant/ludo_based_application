const express = require("express");
const app = express();
const { expressMiddleware } = require("./config/middleware/express_middleware");
const connectDB = require("./config/database/db");
const Socket = require("./config/socket/socket");
const RouteHandling = require("./config/middleware/route_handling");
const startServer = async()=>{
expressMiddleware(app);
Socket(app)
await connectDB();
RouteHandling(app);
}
startServer();