const sendMail = require("../../helper/mailsending");
const logger = require("../../logger/index");
const RouteHandling = (app) =>{
  app.get("/", (_, res) => {
    return res.status(200).json({ message: "server started okayyy" });
  });
  app.use("/api/superadmin", require("../../router/superadmin"));
  app.use("/api/user", require("../../router/user"));
  app.use("/api/battle", require("../../router/battle_superadmin"));
  app.use("/api/admin", require("../../router/admin"));
  app.use("/api/userhistory", require("../../router/userhistory"));
  app.use("/api/game", require("../../router/gameDetails"));
  app.use("/api/payment", require("../../router/payment"));
  app.use("/api/message", require("../../router/message"));
  app.use("/api/notifier", require("../../router/notifier"));
  app.use("/api/support", require("../../router/support"));
  app.use("/api/notification",require("../../router/notification"));
  
  app.use(async(err, req, res, next) => {
    logger.error(
      `${err.status} - ${err.message} - ${req.originalUrl} - ${req.method}`,
    );
    // await sendMail();
    if(!err?.status){
      err.status = 404;
    }
    return res.status(err.status).json({ message: err.message });
  });
}

module.exports= RouteHandling;