import React from "react";
import RenderAbilities from "./RenderAbilities";

const PokeCard = ({ abilities, name }) => {
  if (!name && !abilities) {
    return null;
  }
  const abilitiesList = abilities.map((ability) => {
    return (
      <RenderAbilities key={ability.slot} ability={ability.ability.name} />
    );
  });
  return (
    <div className="card border-primary mt-5 mx-auto" style={{ width: "18rem" }}>
      <div className="card-header text-dark">You got...</div>
      <div className="card-body text-dark">
        <h5 className="card-title">{name}</h5>
        {abilitiesList}
      </div>
    </div>
  );
};

export default PokeCard;
