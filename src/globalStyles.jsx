import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: Verdana, Open-Sans, Helvetica, Sans-Serif;
    font-size: .75rem;
  }
  ul{
  list-style: none; 
  display: flex;
  text-decoration: none;
  color: black;

  }
  a{
    color: black;
    text-decoration: none;
  }
  input, textarea, select{
  border-radius: 3px;
  border: none;
  margin: 0rem 0;
  border: 1px solid gray
}
textarea{
  width: 50%;
  height: 150px;
}
`;

export const Section = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 100%;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 5px;
  min-height: 700px;
  background-position: 98% 100%;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
