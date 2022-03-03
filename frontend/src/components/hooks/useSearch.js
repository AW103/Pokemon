import { useState } from "react";
import poke from "../../api/poke";

const useSearch = () => {
  const [pokemon, setPokemon] = useState(null);

  const search = async (term) => {
    const response = await poke.get("/poke-search", {
      params: {
        term: term,
      },
    });
    setPokemon(response.data);
  };
  console.log(pokemon);

  return [pokemon, search];
};

export default useSearch;
