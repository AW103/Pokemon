const express = require("express");
const pokeSearch = express.Router();
const axios = require("axios");

async function getCharacter(searchTerm) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
}

pokeSearch.get("/", async (req, res) => {
  try {
    const searchTerm = req.query.term;
    const response = await getCharacter(searchTerm);
    console.log("request got sent");
    const data = { data: response.data };
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

module.exports = pokeSearch;
