import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchBar = ({onSubmit}) => {
  const [ term, setTerm ] = useState("");

const onInputChange = (event) => {
  setTerm(event.target.value);
}

  const onFormSubmit = (event) => {
    event.preventDefault();

      onSubmit(term)
  };


    return(
<Form onSubmit={onFormSubmit} className="mb-auto">
        <Form.Group className="mb-3" controlId="searchForm">
          <Form.Label>Pokemon Search</Form.Label>
          <Form.Control 
          size="lg" 
          type="text"
          value={term}
          onChange={onInputChange}
          placeholder="Search for Pokemon"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
    Catch 'em!
  </Button>
     </Form>
    );
}    

export default SearchBar;