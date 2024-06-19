const https = require("https");
const PaytmChecksum = require("./PaytmChecksum");
const express = require("express");
const router = express.Router();

router.get("/initiatepay", async (req, res) => {
  let orderId = "Order_" + new Date().getTime();
  console.log(orderId, "orderIddd");

  const initiatePayment = async () => {
    const paytmParams = {
      body: {
        requestType: "Payment",
        mid: "bbQIzF29591902062446",
        websiteName: "WEBSTAGING",
        orderId: orderId,
        // callbackUrl: "http://139.84.169.91:8001/",
        // callbackUrl: "https://merchant.com/callback",
        txnAmount: {
          value: "1.00",
          currency: "INR"
        },
        userInfo: {
          custId: "CUST_001"
        }
      }
    };

    try {
      const checksum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), "PWnRzFfgokrWpZLN");

      paytmParams.head = {
        signature: checksum
      };

      const post_data = JSON.stringify(paytmParams);
      // hostname: "securegw-stage.paytm.in" /* for Production */,

      const options = {
        hostname: "securegw-stage.paytm.in",
        port: 443,
        path: `/theia/api/v1/initiateTransaction?mid=bbQIzF29591902062446&orderId=${orderId}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": post_data.length
        }
      };

      const response = await new Promise((resolve, reject) => {
        const post_req = https.request(options, function (post_res) {
          let response = "";
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            resolve(response);
          });
        });

        post_req.on("error", function (err) {
          reject(err);
        });

        post_req.write(post_data);
        post_req.end();
      });

      console.log("Response:", response);
      return res.status(200).json({ response, paytmParams });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  await initiatePayment();
});

module.exports = router;
