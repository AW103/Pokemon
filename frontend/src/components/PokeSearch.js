import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import RenderMoves from "./RenderMoves";

const SearchBar = ({ onSubmit, pokemon }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  console.log(term);

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="mb-auto">
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="searchForm">
          <Form.Label>Pokemon Search</Form.Label>
          <Form.Control size="lg" type="text" value={term} onChange={onInputChange} placeholder="Search for Pokemon" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Catch 'em!
        </Button>
      </Form>
      <div className="text-dark">
        <RenderMoves pokemon={pokemon} />
      </div>
    </div>
  );
};

export default SearchBar;
