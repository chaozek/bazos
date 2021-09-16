import React from "react";
import { data } from "../../data/SellSections";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <Home>
      {data.map((data, index) =>
        data.url.length > 0 ? (
          <HomeDiv key={index}>
            <Link to={`/kategorie/${data.url}`}>
              <h4>{data.name}</h4>
              <Img src={data.img} alt="" />
            </Link>
          </HomeDiv>
        ) : null
      )}
    </Home>
  );
}
const Img = styled.img`
  width: 50px;
`;
const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const HomeDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
