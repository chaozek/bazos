import React, { useContext } from "react";
import styled from "styled-components";
import { BazosContext } from "../../context/BazosState";
import { Link } from "react-router-dom";
export default function Cathegory(props) {
  const getId = props.match.params.slug;
  const getSection = props.match.params.section;
  const { posts } = useContext(BazosContext);
  // const getData = data.find((p) => p.url === getId);
  const section = posts[getId];
  const getSectionData = section.filter((p) => p.kategorie === getSection);
  // console.log(getSectionData);
  /* const getCathegory = (posts) => {
    const cathegory = posts[getId];
    if (cathegory === undefined) {
      return [{}];
    }
    return cathegory; 
  };*/
  return (
    <div>
      <H3>{getSection}</H3>
      {getSectionData.map((cat, i) => (
        <List key={i}>
          <LinkDiv to={`/kategorie/${getId}/${cat.kategorie}/${cat.id}`}>
            <H4>{cat.nadpis}</H4>
          </LinkDiv>
          <Left>
            <Img src={cat.img} alt="" />
            <p>{cat.text}</p>
          </Left>
          <Right>
            <p>{cat.cena} Kč</p>
            <p>{cat.psč}</p>
          </Right>
        </List>
      ))}
    </div>
  );
}
const H3 = styled.h3`
  text-align: center;
`;
const H4 = styled.h4`
  width: 100%;
  text-decoration: underline;
`;
const LinkDiv = styled(Link)`
  width: 100%;
  text-decoration: underline;
`;
const List = styled.div`
  padding: 0.2rem 0.4rem;
  border-top: 1px solid rgb(221, 221, 221);
  display: flex;
  flex-wrap: wrap;
  :hover {
    background-color: #fbf3e1;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
`;
const Img = styled.img`
  width: 100px;
  min-width: 100px;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;
