import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <Search>
      <form action="">
        Co:
        <Input type="text" />
        <Select>
          <option value="0">Všechny rubriky</option>

          <option value="1">
            <Link to="/">Auto</Link>
          </option>

          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
          <option value="5">Honda</option>
          <option value="6">Jaguar</option>
          <option value="7">Land Rover</option>
          <option value="8">Mercedes</option>
          <option value="9">Mini</option>
          <option value="10">Nissan</option>
          <option value="11">Toyota</option>
          <option value="12">Volvo</option>
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
