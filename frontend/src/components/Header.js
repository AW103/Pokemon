import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
// import GoogleLogin from "react-google-login";
// import { GoogleLogout } from "react-google-login";
import "../styles/header.css";

const Header = ({button}) => {
 

  return (
<div className="mb-auto">
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Item>
              <Navbar.Brand href="/">Pokemon</Navbar.Brand>
            </Nav.Item>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end float-md-end"
          >
            <Nav>
              <Nav.Link href="/poke-random">Generator</Nav.Link>
              <Nav.Link href="/poke-search">Search</Nav.Link>
              <Nav.Item>{button()}</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </div>

  );
};

export default Header;
