const express = require("express");
const health = express.Router();

health.get("/", (req, res) => {
  res.send({
    status: "OK",
    details: "Everything looks good",
    time: new Date().toISOString(),
  });
});

module.exports = health;
