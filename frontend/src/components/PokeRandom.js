import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import poke from "../api/poke";
import PokeCard from "./RenderAbilities";

const PokeRandom = () => {
  const [pokemon, setPokemon] = useState([]);

  const handleClick = async () => {
    console.info("Button was clicked");

    const response = await poke.get("/poke-random");
    console.log(response.data);
    setPokemon(response.data);
  };

  return (
    <Container className="jumbotron text-center mb-auto">
      <Row>
        <div>
          <h3>Click the button to generate a pokemon!</h3>
          <Button onClick={handleClick}>Generate Pokemon</Button>
        </div>
      </Row>
      <Row>
        <PokeCard abilities={pokemon.abilities} name={pokemon.name} />
      </Row>
    </Container>
  );
};

export default PokeRandom;
