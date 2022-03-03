import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import PokeSearch from "./components/PokeSearch";
import PokeRandom from "./components/PokeRandom";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import useSearch from "./components/hooks/useSearch";

import Nav from "react-bootstrap/Nav";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [pokemon, search] = useSearch([]);

  const loginSuccess = () => {
    console.log("You are logged in!");
    setIsLoggedIn(true);
  };

  const logoutSuccess = () => {
    console.log("You are logged out!");
    setIsLoggedIn(false);
  };

  const handleFailure = () => {
    console.log("Something went wrong...");
  };

  const renderButton = () => {
    if (isLoggedIn === null || isLoggedIn === false) {
      return (
        <GoogleLogin
          clientId="946337887613-4vla7aci2leeiq00bi2c2d824b7e45ad.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={loginSuccess}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        />
      );
    } else if (isLoggedIn === true) {
      return (
        <Nav>
          <Nav.Link href="/poke-random">Generator</Nav.Link>
          <Nav.Link href="/poke-search">Search</Nav.Link>
          <GoogleLogout
            clientId="946337887613-4vla7aci2leeiq00bi2c2d824b7e45ad.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logoutSuccess}
            onFailure={handleFailure}
          ></GoogleLogout>
        </Nav>
      );
    }
  };
  console.log(pokemon);
  return (
    <div className="d-flex h-100 w-100 p-3 mx-auto flex-column">
      <Header button={renderButton} />
      <Routes>
        <Route path="/" exact element={<Home authorized={isLoggedIn} />} />
        <Route path="/poke-search" element={<PokeSearch onSubmit={search} pokemon={pokemon} />} />
        <Route path="/poke-random" element={<PokeRandom />} />
      </Routes>
    </div>
  );
};

export default App;
