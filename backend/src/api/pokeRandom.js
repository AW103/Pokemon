const express = require("express");
const pokeRandom = express.Router();
const axios = require("axios");

async function getCharacter(num) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
}

const randomNum = () => {
  return Math.ceil(Math.random() * 100);
};
pokeRandom.get("/", async (req, res) => {
  try {
    const num = randomNum();
    console.log("Here's your random number my leige: " + num);
    const response = await getCharacter(num);
    console.log("request got sent");

    const responseObject = {
      abilities: response.data.abilities,
      name: response.data.name,
    };

    console.log("Response Object has been created!");
    console.log("Abilities: " + responseObject.abilities[0].ability.name);
    console.log("Name: " + responseObject.name);

    if (!responseObject.abilities || !responseObject.name) {
      console.error("All or a part of Response Object was null :(");
    } else {
      console.info("No errors occurred, sending Response Object to Client");
      res.status(200).send(responseObject);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});

module.exports = pokeRandom;
