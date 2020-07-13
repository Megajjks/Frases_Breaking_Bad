import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 16rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    &::before {
      content: open-quote;
      font-size: 5rem;
      color: black;
      position: absolute;
      left: -0.5rem;
      top: -1rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Frase = ({ quote }) => {
  return (
    <Wrapper>
      <h1> {quote.quote} </h1>
      <p> -{quote.author}</p>
    </Wrapper>
  );
};

export default Frase;
