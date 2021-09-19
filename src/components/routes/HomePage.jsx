import React from "react";
import { data } from "../../data/SellSections";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
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
      <WarningAlertBlock>
        <h2>Warning</h2>
        <p>
          Iam trying to make clone close as possible to original site{" "}
          <a href="https://www.bazos.cz/">bazos.cz</a> so this website is not
          responsive same as original site. Iam adding just a minor changes of
          features I personally doesn't like.
        </p>
      </WarningAlertBlock>
      <AlertBlock>
        <h2>available features </h2>
        <ul>
          <li>Dynamic routing by cathegory</li>
          <li>You can add Item by cathegory</li>
          <li>Dynamic sidebar component</li>
          <li>You can sort by price</li>
          <li>Dynamic routing by sections (in sidebar)</li>
          <li>Individual route for items</li>
          <li>Using useLocalStorage hook to save data to browser cache</li>
          <li>Using different Layout of pages same as original bazos does</li>
        </ul>
        <h2>features to be added </h2>
        <ul>
          <li>
            Adding choice in form to choose section of cathegory for correct
            listing
          </li>
          <li>Possibility to add image for item in the form</li>
          <li>Make filter/search bar | favorite posts | my posts working</li>
          <li>Use regex for new items</li>
        </ul>
      </AlertBlock>
    </>
  );
}
const Img = styled.img`
  width: 50px;
`;
const AlertBlock = styled.div`
  background-color: #dcf3d7;
  border: 1px solid #91a489;
  border-radius: 1rem;
  padding: 2rem 1rem;
  h2 {
    color: #556c50;
    text-transform: uppercase;
  }
  ul {
    color: #98aa8f;
    display: flex;
    flex-direction: column;
  }
`;
const WarningAlertBlock = styled.div`
  background-color: #eec8c5;
  border: 1px solid #d0a4a2;
  color: #c67b75;
  border-radius: 1rem;
  padding: 2rem 1rem;
  margin: 1rem 0rem;

  h2 {
    text-transform: uppercase;
    color: #ad453f;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
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
  text-align: center;
`;
