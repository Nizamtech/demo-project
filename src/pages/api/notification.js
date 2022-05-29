const webpush = require("web-push");
const path = require("path");

const publicVapidKey =
  "BNBEafQfNJIbFDkGO8NGrv2R-M8Gq36xkleSym3nqDXCPTbYnXQ2hnLpuQ5DV8Al-pe4j_mXd258KxAkTIk067k";

const privateVapidKey = "oio761vh1Wc4u3yCxj2DIU_ADWkBOC8_m3I_lTHh2RM";

// Setup the public and private VAPID keys to web-push library.
webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

export default function handler(req, res) {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({
    title: "Aamar Taka",
    body: "Welcome to Aamar Taka",
  });

  webpush.sendNotification(subscription, payload).catch(console.log);
}
