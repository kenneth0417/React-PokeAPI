import React from "react";
import styled from "styled-components";
import { SiPokemon } from "react-icons/si";
import { Link } from "react-router-dom";

function Navbar() {
  const Navbar = styled.nav`
    height: 50px;
    background-color: skyblue;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const Wrapper = styled.div`
    margin-left: 50px;
    margin-top: 20px;
  `;

  const StyledLink = styled(Link)`
    font-size: 100px;
  `;
  return (
    <>
      <Navbar>
        <Wrapper>
          <StyledLink to="/">
            <SiPokemon />
          </StyledLink>
        </Wrapper>
      </Navbar>
    </>
  );
}

export default Navbar;
