import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BazosContext } from "../context/BazosState";
import { useHistory } from "react-router-dom";

export default function Nav() {
  const { searchTerm, setSearchTerm } = useContext(BazosContext);
  const history = useHistory();

  const routeChange = (e) => {
    history.push(`/kategorie/${e.target.value}`);
    setSelect(e.target.value);
  };
  useEffect(() => {
    setSelect("AHOJ");
  }, [history]);
  const [select, setSelect] = useState("");

  const redirect = () => {
    if (
      history.location.pathname.includes("kategorie") === false &&
      !window.location.href.includes("search")
    ) {
      window.location.href = "/search";
    }
  };
  const handleChange = (e) => {
    redirect();
    setSearchTerm(e.target.value);
  };
  return (
    <Search>
      <form action="">
        Co:
        <Input
          autoFocus
          type="text"
          value={searchTerm}
          onClick={(event) => redirect(event)}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Select value={select} onChange={routeChange}>
          <option value=""> Všechny rubriky</option>
          <option value="zvirata">Zvířata</option>
          <option value="reality">Reality</option>
          <option value="auto">Auto</option>
        </Select>
        Lokalita:
        <Input width="50px" type="text" />
        Cena od:
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
  margin: 0rem 1rem;
  width: ${(props) => (props.width ? props.width : "auto")};
`;
const Select = styled.select`
  border-radius: 3px;
  margin: 0rem 1rem;
  width: ${(props) => (props.width ? props.width : "auto")};
`;
