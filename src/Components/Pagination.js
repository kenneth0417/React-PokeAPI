import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 25px;
  background-color: beige;
  width: 10rem;
  border: 2px solid orange;
  border-radius: 10px;
  outline: none;
  margin: 20px;
  cursor: pointer;
`;
function Pagination({ handlePrevious, handleNext }) {
  return (
    <Wrapper>
      {handlePrevious && <Button onClick={handlePrevious}>Prev</Button>}
      {handleNext && <Button onClick={handleNext}>Next</Button>}
    </Wrapper>
  );
}

export default Pagination;
