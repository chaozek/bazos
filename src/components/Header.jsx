import React from "react";
import logo from "../imgs/bazos.gif";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <HeaderDiv>
      <Logo>
        <NavLink to="/">
          <Img src={logo} alt="logo" />
        </NavLink>
        <Claim>... inzerce pro každého</Claim>
      </Logo>
      <MenuLinks>
        <MenuUl>
          <MenuLi>
            <NavLink to="/oblibene-inzeraty">Oblíbené inzeráty</NavLink>
          </MenuLi>
          <MenuLi>
            <NavLink to="/moje-inzeraty">Moje inzeráty</NavLink>
          </MenuLi>
          <MenuLi>
            <NavLink to="/pridat-inzerat">Přidat inzerát</NavLink>
          </MenuLi>
        </MenuUl>
      </MenuLinks>
    </HeaderDiv>
  );
}

const Img = styled.img`
  width: 215px;
  padding-left: 5px;
`;
const Claim = styled.p`
  margin: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 1rem;
  font-weight: bold;
`;
const HeaderDiv = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const MenuLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const MenuUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  text-decoration: none;
  color: black;
`;
const MenuLi = styled.li`
  padding-right: 1rem;
`;
const Logo = styled.div`
  display: flex;
`;
const NavLink = styled(Link)`
  list-style: none;
  color: black;
  font-weight: bold;
  display: flex;
  text-decoration: none;
`;
