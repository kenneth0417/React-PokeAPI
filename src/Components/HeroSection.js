import React from "react";
import styled from "styled-components";
import HeroImage from "../Assets/HeroImg.jpg";
import { Link } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";

function HeroSection() {
  const Section = styled.section`
    background-image: url(${HeroImage});
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
  `;

  const SecWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: yellow;
    line-height: 150px;
  `;

  const Title = styled.p`
    font-size: 100px;
  `;

  const Desc = styled.p`
    font-size: 60px;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 50px;
    margin-top: 225px;
  `;

  return (
    <Section>
      <SecWrapper>
        <Title>Pokemon</Title>
        <Desc>Gotta catch 'em all!</Desc>
        <StyledLink to="/pokedex">
          <CgPokemon />
          PokeDex
        </StyledLink>
      </SecWrapper>
    </Section>
  );
}

export default HeroSection;
