import React from "react";
import styled from "styled-components";
export default function Nav() {
  return (
    <Search>
      <form action="">
        Co:
        <Input type="text" />
        <Select>
          <option value="0">Všechny rubriky</option>
          <option value="2">Zvířata</option>
          <option value="3">Reality</option>
          <option value="4">Auto</option>
        </Select>
        Lokalita:
        <Input width="50px" type="text" />
        Okolí:
        <Input width="30px" type="text" defaultValue="25" />
        Cena: od:
        <Input width="50px" type="text" /> - do:
        <Input width="50px" /> Kč
        <Input type="button" value="hledat" />
      </form>
    </Search>
  );
}
const Search = styled.div`
  background-color: #ff6600;
  border-radius: 2px;
  min-height: 2rem;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  border-radius: 3px;
  border: none;
  margin: 0rem 1rem;
  width: ${(props) => (props.width ? props.width : "auto")};
`;
const Select = styled.select`
  border-radius: 3px;
  border: none;
  margin: 0rem 1rem;
  width: ${(props) => (props.width ? props.width : "auto")};
`;
