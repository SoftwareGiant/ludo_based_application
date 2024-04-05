const { createLogger, format, transports } = require("winston");
const { prettyPrint } = format;
require("winston-mongodb");

const logger = createLogger({
  level: "error",
  format: format.combine(
    format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    prettyPrint(),
  ),
  defaultMeta: { service: "user-services" },
  transports: [
    new transports.File({ filename: "./logger/error.log", level: "error" }),
  ],
});


module.exports = logger;
