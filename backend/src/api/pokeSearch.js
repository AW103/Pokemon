const express = require("express");
const pokeSearch = express.Router();
const axios = require("axios");

async function getCharacter() {
  return axios.get("https://pokeapi.co/api/v2/pokemon/raichu"); 
}

pokeSearch.get("/", async (req, res) => {
  try {
    const response = await getCharacter();
    console.log("request got sent");
    const data = {data: response.data};
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({error: err.message})
  }
});

module.exports = pokeSearch;