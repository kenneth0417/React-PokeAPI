import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PokeInfo from "../Components/PokeInfo";
import Pagination from "../Components/Pagination";

function PokeDex() {
  const [pokemon, setPokemon] = useState([]);

  const [prevPage, setPrevPage] = useState("");

  const [nextPage, setNextPage] = useState("");

  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  const [loading, setLoading] = useState(true);

  const getPokemon = async () => {
    setLoading(true);
    const res = await axios.get(currentPage).catch((err) => {
      console.log("Err", err);
    });
    setPokemon(res.data.results);
    setPrevPage(res.data.previous);
    setNextPage(res.data.next);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage(prevPage);
  };

  const handleNext = () => {
    setCurrentPage(nextPage);
  };

  if (loading) return "Loading...";

  const App = styled.div`
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  `;

  return (
    <App>
      <PokeInfo pokemon={pokemon} />
      <Pagination
        handlePrevious={prevPage ? handlePrevious : null}
        handleNext={nextPage ? handleNext : null}
      />
    </App>
  );
}

export default PokeDex;
