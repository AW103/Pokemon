import { useState, useEffect } from "react";
import poke from "../../api/poke";

const useSearch = (defaultPokemon) => {
    const [ pokemon, setPokemon ] = useState([]);
  
    useEffect(() => {
search(defaultPokemon);
    }, [defaultPokemon]);

    const search = async (term) => {
      const response = await poke.get("/poke-search", {
          params: {
              q:term
          }
      });
      setPokemon(response.data);
    };

    return [ pokemon, search ]
};
    export default useSearch;
  