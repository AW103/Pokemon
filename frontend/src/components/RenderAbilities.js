import React from "react";

const RenderAbilities = ({ ability }) => {
  console.log("Ability inside the Render Ability component: " + ability);
  return (
    <div>
      <p className="card-text">{ability}</p>
    </div>
  );
};

export default RenderAbilities;
