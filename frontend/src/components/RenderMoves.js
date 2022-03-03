import React from "react";
import SearchResult from "./SearchResult";
import Card from "react-bootstrap/Card";

const RenderMoves = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }
  const pokeName = pokemon.data.name;

  const pokeMoves = pokemon.data.moves.slice(0, 5).map((move) => {
    return <SearchResult key={move.move.name} move={move} />;
  });
  return (
    <Card className="mt-5 mx-auto" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="text-dark">{pokeName}</Card.Title>
        <ul className="list-group list-group-flush">{pokeMoves}</ul>
      </Card.Body>
    </Card>
  );
};

export default RenderMoves;
