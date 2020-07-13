import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Frase from "./components/Frase";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  height: 100vh;
`;

const Btn = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.3s ease;
  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [quote, setQuote] = useState({});

  /* Con fetch
  const consultaApi = () => {
    const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const frase = api.then((respuesta) => respuesta.json());
    frase.then((resultado) => console.log(resultado));
  };
  */

  //Con async await
  const consultaApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    setQuote(frase[0]);
  };

  useEffect(() => {
    consultaApi();
  }, []);

  return (
    <Wrapper>
      <Frase quote={quote} />
      <Btn onClick={consultaApi}>Obtener Frase</Btn>
    </Wrapper>
  );
}

export default App;
