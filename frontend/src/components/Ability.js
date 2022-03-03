import React from "react";

const Ability = ({ ability }) => {
  console.log("Ability inside the Render Ability component: " + ability);
  return (
    <div>
      <p className="card-text">{ability}</p>
    </div>
  );
};

export default Ability;
