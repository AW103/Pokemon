const express = require("express");
const cors = require("cors");
const health = require("./api/health");
const pokeRandom = require("./api/pokeRandom");
const pokeSearch = require("./api/pokeSearch");

// Initialize express
const app = express();

// All extensions needed to handle api routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes that will be used for this app
app.use("/health", health);
app.use("/poke-random", pokeRandom);
app.use("/poke-search", pokeSearch);

// Generic catch all for unknown routes
app.use("*", (_req, res) => {
  res.sendStatus(404);
});

module.exports = app;
