const webpush = require("web-push");
const path = require("path");

const publicVapidKey =
  "BLNSBQ2KPnD_FIA2BzeJH3EfViLV76CJbsgsaJcuLaIGotcLHf0iY2qY1duSxD0DOS-aRpU19IBmKJBloIEZ9io";

const privateVapidKey = "oPLr1XTHSq2gZdp8PsEciT9eyI9QyZA0MTgntLfHb9M";

// Setup the public and private VAPID keys to web-push library.
webpush.setVapidDetails(
  "mailto:nizamtech@aamartaka.com",
  publicVapidKey,
  privateVapidKey
);

export default function handler(req, res) {
  const subscription = req.body;

  console.log("from API");
  res.status(201).json({});
  const payload = JSON.stringify({
    title: "Aamar Taka",
    body: "Welcome to Aamar Taka..",
  });

  webpush.sendNotification(subscription, payload).catch(console.log);
}
