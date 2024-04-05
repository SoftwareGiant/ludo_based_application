require("dotenv").config();
const accountSid = "ACe874fa4cb841f3f9889c7b76fa1da10f";
const authToken = "d10c10d251b43a22bf0820864dc4f387";
const serviceSid = "VAcdb05ab87146756f459a332870bbceec";
const client = require("twilio")(accountSid, authToken);
const session = require("express-session");

const sendOtp = async ({ phoneNo }) => {
  client.verify.v2
    .services(serviceSid)
    .verifications.create({ to: phoneNo, channel: "sms" })
    .then((verification) => console.log(verification.status))
    .catch((err) => console.log(err, "inside catchhh "));
};

const verifyOtp = async ({ phoneNo, otp }) => {
  return client.verify.v2
    .services(serviceSid)
    .verificationChecks.create({ to: phoneNo, code: otp })
    .then((verification_check) => verification_check.status);
};

module.exports = {
  sendOtp,
  verifyOtp,
};
