import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function PokePic({ pokemon }) {
  const [eachPokemon, setEachPokemon] = useState({
    name: "",
    sprites: {
      front_default: "",
    },
  });

  const getPokemon = async (url) => {
    const res = await axios.get(url).catch((err) => {
      console.log("Err", err);
    });
    setEachPokemon(res.data);
  };

  useEffect(() => {
    getPokemon(pokemon.url);
  }, []);

  const Card = styled.div`
    border: 1px solid orange;
    background-color: beige;
    border-radius: 10px;
    margin: 30px;
  `;

  const Wrapper = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const Name = styled.p`
    font-size: 25px;
    margin-right: 20px;

    ::first-letter {
      text-transform: capitalize;
    }
  `;
  return (
    <Card>
      <Wrapper>
        <Name>{eachPokemon.name}</Name>
        <img alt={eachPokemon.name} src={eachPokemon.sprites.front_default} />
      </Wrapper>
    </Card>
  );
}

export default PokePic;
