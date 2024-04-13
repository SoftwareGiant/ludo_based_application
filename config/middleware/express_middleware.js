const express = require("express");
const session = require("express-session");
const path = require("path");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const rateLimit = require("express-rate-limit");
module.exports.expressMiddleware = (app) => {
  app.use((req,res,next)=>{
    next();
  })
  app.use(
    session({
      secret: "Storing all the phoneNo of user",
      resave: false,
      saveUninitialized: true,
    }),
  );
  app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST"],
      credentials: true,
    }),
  );
  app.use(express.json({ limit: "50mb" }));
  app.use(express.static(path.join(__dirname, "public")));
  app.use(
    session({
      secret: "Ludo King Based Game",
      cookie: { maxAge: 60000 * 30 },
    }),
  );
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(__dirname + "/public"));
  app.use(cookieParser(process.env.COOKIE_SECRET));
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
};
