const JWT = require("jsonwebtoken");
const AppError = require("../controlError/AppError");
const customStatuandError = require("../controlError/httpStatusandError");
const User = require("../models/user");
const error = customStatuandError();
const logger = require("../logger/index");
require("dotenv").config();
module.exports = {
  signAccessToken: async (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: "24h",
        issuer: "Kingstarludo",
        audience: userId,
      };
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          logger.error(
            `${err.status} - ${err.message} - inside signAccessToken of jwt helper`,
          );
          reject(new AppError(error["500"], 500));
          return;
        }
        resolve(token);
      });
    });
  },

  verifyToken: async (req, res, next) => {
    if (!req.headers["authorization"])
      return next(new AppError(error["401"], 401));
    const authHeader = req.headers["authorization"];
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, payload) => {
      if (err) {
        console.log(err, "error");
        logger.error(
          `${err.status} - ${err.message} - ${req.originalUrl} - ${req.method} inside verifyToken of jwt helper`,
        );
        const message =
          err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
        return next(
          new AppError(
            err.message == "jwt expired" ? error["401"] : message,
            401,
          ),
        );
      }
      req.payload = payload;
      req.userId = payload.aud;
      const user = await User.findById(req.userId);
      if (user?.abanDoned) {
        return res.status(200).json("Please login with correct credential!");
      }
      next();
    });
  },

  signRefreshToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.REFRESH_TOKEN_SECRET;

      const expiry = Date.now() + 10 * 24 * 60 * 60 * 1000;
      const options = {
        expiresIn: "10 days",
        issuer: "Kingstarludo",
        audience: userId,
      };
      JWT.sign(payload, secret, options, async (err, token) => {
        if (err) {
          logger.error(
            `${err.status} - ${err.message} - inside signrefreshtoken of jwt_helper`,
          );
          reject(new AppError(error["401"], 401));
        }

        // { $set: { "userKyc.proofOfAddress.url": imageName } },
        const user = await User.findByIdAndUpdate(
          userId,
          {
            $set: {
              "refreshTokenDetail.token": token,
              "refreshTokenDetail.expiresAt": expiry,
            },
          },
          { new: true },
        );
        if (!user) {
          reject(new AppError(error["500"], 500));
        }
        resolve(token);
        // client.SET(userId, token, "EX", 365 * 24 * 60 * 60, (err, reply) => {
        //   if (err) {
        //     console.log(err.message);
        //     reject(createError.InternalServerError());
        //     return;
        //   }
        //   resolve(token);
        // });
      });
    });
  },

  verifyRefreshToken: (refreshToken) => {
    return new Promise((resolve, reject) => {
      JWT.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, payload) => {
          if (err) {
            logger.error(
              `${err.status} - ${err.message} - inside verifyrefreshtoken of jwt_helper`,
            );
            return reject(new AppError(error["401"], 401));
          }

          const userId = payload.aud;

          const user = await User.findById(userId);
          if (!user) {
            reject(new AppError(error["500"], 500));
          }
          if (
            user.refreshTokenDetail.expiresAt > Date.now() &&
            user.refreshTokenDetail.token == refreshToken
          ) {
            user.refreshTokenDetail.token = null;
            user.refreshTokenDetail.expiresAt = null;
            return resolve(userId);
          }
          if (user.refreshTokenDetail.expiresAt < Date.now()) {
            reject(new AppError(error["401"], 401));
          }

          reject(new AppError(error["401"], 401));

          // client.GET(userId, (err, result) => {
          //   if (err) {
          //     console.log(err.message);
          //     reject(createError.InternalServerError());
          //     return;
          //   }
          //   if (refreshToken === result) return resolve(userId);
          //   reject(createError.Unauthorized());
          // });
        },
      );
    });
  },
  signBlockchainToken: async (account) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.BLOCKCHAIN_TOKEN_SECRET;
      const options = {
        expiresIn: "1h",
        issuer: "intelliblock.com",
        audience: account,
      };
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          logger.error(
            `${err.status} - ${err.message} - inside signAccessToken of jwt helper`,
          );
          reject(new AppError(error["500"], 500));
          return;
        }
        resolve(token);
      });
    });
  },
};
