import React from "react";

const SearchResult = ({ move }) => {
  console.log(move.move.name);
  return (
    <div>
      <li className="list-group-item">{move.move.name}</li>
    </div>
  );
};

export default SearchResult;
