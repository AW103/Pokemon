import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = ({ authorized }) => {
  const renderAdmin = () => {
    if (authorized === true) {
      return (
        <div>
          <Link to="/poke-random" className="btn btn-lg btn-secondary fw-bold border-white">
            Random
          </Link>
          <Link to="/poke-search" className="btn btn-lg btn-secondary fw-bold border-white">
            Search
          </Link>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <main className="px-3 mb-auto">
      <div className="welcome-div">
        <h3 className="greeting">Welcome to Pokemon!</h3>
        <p className="lead">Please login to begin.</p>
      </div>
      <div>{renderAdmin()}</div>
    </main>
  );
};

export default Home;
