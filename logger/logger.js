const { createLogger, format, transports } = require("winston");
const { prettyPrint } = format;

const infoLogger = createLogger({
  format: format.combine(
    format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    prettyPrint(),
  ),
  transports: [
    //new transports.Console(),
    new transports.File({
      level: "info",
      filename: "./logger/info.log",
    }),
  ],
  statusLevels: true,
});

const warnLogger = createLogger({
  format: format.combine(
    format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    prettyPrint(),
  ),
  transports: [
    new transports.File({
      level: "warn",
      filename: "./logger/warn.log",
    }),
  ],
  statusLevels: true,
});

module.exports = {
  infoLogger,
  warnLogger,
};
