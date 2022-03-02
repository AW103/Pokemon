import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PokeRandom from "./components/PokeRandom";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const loginSuccess = () => {
    console.log("You are logged in!");
    setIsLoggedIn(true)
  };

  const logoutSuccess = () => {
    console.log("You are logged out!");
    setIsLoggedIn(false)
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
    } else if (isLoggedIn === true ) {
      return (
        <GoogleLogout
          clientId="946337887613-4vla7aci2leeiq00bi2c2d824b7e45ad.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logoutSuccess}
          onFailure={handleFailure}
        ></GoogleLogout>
      );
      
    }
  };
 
  return (
<div className="d-flex h-100 w-100 p-3 mx-auto flex-column" >
<Header button={renderButton}/>
    <Routes>
   <Route path="/" exact element={<Home authorized={isLoggedIn}/>} />
   <Route path="/poke-search" element={<SearchBar />} />
   <Route path="/poke-random" element={<PokeRandom />} />
   </Routes>
   </div>
  );
};

export default App;
