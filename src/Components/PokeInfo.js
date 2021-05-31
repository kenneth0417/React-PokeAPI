import React from "react";
import PokePic from "./PokePic";
import styled from "styled-components";

function PokeInfo({ pokemon }) {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const Content = styled.div`
    flex: 0 0 33%;
  `;
  return (
    <Container>
      {pokemon.map((val, idx) => (
        <Content key={idx}>
          <PokePic pokemon={val} />
        </Content>
      ))}
    </Container>
  );
}

export default PokeInfo;
