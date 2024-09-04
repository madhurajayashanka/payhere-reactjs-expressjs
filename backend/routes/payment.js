const express = require("express");
const crypto = require("crypto");

const router = express.Router();

// Merchant details
const merchant_id = "12345684"; // Replace with your actual Merchant ID
const merchant_secret = "MzA0NDE0MDc2MjIwMjg3MTwJyjkzODkwODgzNDQ3MTYyNzM2NjY2"; // Replace with your Merchant Secret

router.post("/start", (req, res) => {
  const { order_id, amount, currency } = req.body;
  console.log("Payment request for order:", order_id);
  

  // Generate the hash value
  const hash = crypto
    .createHash("md5")
    .update(
      merchant_id +
        order_id +
        amount +
        currency +
        crypto
          .createHash("md5")
          .update(merchant_secret)
          .digest("hex")
          .toUpperCase()
    )
    .digest("hex")
    .toUpperCase();

    console.log("Hash generated for order:", order_id);
    

  res.json({ hash, merchant_id });
});

// Payment notification endpoint
router.post("/notify", (req, res) => {

  console.log("Payment notification received");
  
  const {
    merchant_id,
    order_id,
    payhere_amount,
    payhere_currency,
    status_code,
    md5sig,
  } = req.body;

  const local_md5sig = crypto
    .createHash("md5")
    .update(
      merchant_id +
        order_id +
        payhere_amount +
        payhere_currency +
        status_code +
        crypto
          .createHash("md5")
          .update(merchant_secret)
          .digest("hex")
          .toUpperCase()
    )
    .digest("hex")
    .toUpperCase();

    console.log("Payment notification for order:", order_id);


    

  if (local_md5sig === md5sig && status_code == "2") {
    // Payment success - update the database
    console.log("Payment successful for order:", order_id);
    res.sendStatus(200);
  } else {
    // Payment verification failed
    console.log("Payment verification failed for order:", order_id);
    res.sendStatus(400);
  }
});

module.exports = router;
