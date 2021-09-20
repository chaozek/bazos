import React, { useContext, useEffect } from "react";
import { data } from "../../data/SellSections";
import styled from "styled-components";
import { BazosContext } from "../../context/BazosState";
import { Link } from "react-router-dom";
export default function Cathegory(props) {
  const getId = props.match.params.slug;
  const { posts, setCurrentCateghory, sort, searchTerm, setSearchTerm } =
    useContext(BazosContext);
  const getData = data.find((p) => p.url === getId);
  setCurrentCateghory(getId);

  const getCathegory = (posts) => {
    try {
      return posts[getId];
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setSearchTerm("");
  }, [getId, setSearchTerm]);
  return (
    <div>
      <H3>{getData.name}</H3>
      <Listing>
        <Left>
          <Text>Název inzerátu</Text>
        </Left>
        <Right>
          <FilterText onClick={sort}>Cena</FilterText>
          <Text>Lokalita</Text>
        </Right>
      </Listing>
      {getCathegory(posts)
        /* eslint-disable */
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.nadpis.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.text.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((cat, i) => (
          <List key={i}>
            <LinkDiv to={`/kategorie/${getId}/${cat.kategorie}/${cat.id}`}>
              <H4>{cat.nadpis}</H4>
            </LinkDiv>
            <Left>
              <ImageLink to={`/kategorie/${getId}/${cat.kategorie}/${cat.id}`}>
                <Img src={cat.img} alt="" />
              </ImageLink>
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
export const H3 = styled.h3`
  text-align: center;
`;
export const H4 = styled.h4`
  width: 100%;
  text-decoration: underline;
`;
export const LinkDiv = styled(Link)`
  width: 100%;
  text-decoration: underline;
`;
export const ImageLink = styled(Link)`
  text-decoration: underline;
`;
export const List = styled.div`
  padding: 0.2rem 0.4rem;
  border-top: 1px solid rgb(221, 221, 221);
  display: flex;
  padding-bottom: 2rem;
  flex-wrap: wrap;
  :hover {
    background-color: #fbf3e1;
  }
`;
export const Listing = styled.div`
  padding: 0.2rem 0.4rem;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffd9bf;
  border-radius: 5px;
  padding: 0.3rem 0.2 rem;
  border: 1px solid #c7a995;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
export const Text = styled.p`
  margin: 0;
`;
export const FilterText = styled.p`
  margin: 0;
  cursor: pointer;
  :hover {
    color: #ff6600;
    font-weight: bold;
    text-decoration: underline;
  }
`;
export const Img = styled.img`
  width: 100px;
  border: 1px solid black;
  margin-right: 1rem;
`;
export const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;
