import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BazosContext } from "../context/BazosState";
import { useHistory } from "react-router-dom";

export default function Nav() {
  const { searchTerm, setSearchTerm } = useContext(BazosContext);
  const history = useHistory();
  const focus = React.useRef(null);
  const routeChange = (e) => {
    history.push(`/kategorie/${e.target.value}`);
    setSelect(e.target.value);
  };
  useEffect(() => {
    handleFocus();
  }, []);

  const [select, setSelect] = useState("");
  console.log(window.location.pathname);
  const redirect = () => {
    if (
      history.location.pathname.includes("kategorie") === false &&
      !window.location.href.includes("search")
    ) {
      window.location.href = "/search";
    }
  };
  const handleFocus = () => {
    if (window.location.pathname === "/") {
      focus.current.focus();
      console.log(focus.current);
    } else if (window.location.pathname === "/search") {
      focus.current.focus();
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
          ref={focus}
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
