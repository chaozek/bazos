import React, { useEffect, useContext } from "react";
import { BazosContext } from "../context/BazosState";

import styled from "styled-components";
import { animalData, carData, data, realityData } from "../data/SellSections";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  const { setCateghory, categhory } = useContext(BazosContext);
  const getId = props.match.params.slug;
  const getHugeId = props.match.url;
  const getCateghory = () => {
    if (getHugeId === "/pridat-inzerat") {
      setCateghory([]);
    } else if (getId === "/search") {
      setCateghory([]);
    } else if (getId === "zvirata") {
      setCateghory(animalData);
    } else if (getId === "auto") {
      setCateghory(carData);
    } else if (getId === "reality") {
      setCateghory(realityData);
    } else if (getId === undefined) {
      setCateghory([]);
    }
  };
  useEffect(() => {
    getCateghory();
    // eslint-disable-next-line
  }, [props]);

  return (
    <Side>
      <Head>Kategorie</Head>
      {categhory.length === 0
        ? data.map((data, i) =>
            data.url.length > 0 ? (
              <Link key={i} to={`/kategorie/${data.url}`}>
                <ul>
                  <li key={i}>{data.name}</li>
                </ul>
              </Link>
            ) : null
          )
        : categhory.map((data, i) => (
            <Link key={i} to={`/kategorie/${getId}/${data.url}`}>
              <ul>
                <li key={i}>{data.name}</li>
              </ul>
            </Link>
          ))}
    </Side>
  );
}
const Head = styled.div`
  background-color: #ff6600;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 0.5rem 0.3rem;
  border-radius: 0.3rem 0.3rem 0rem 0rem;
`;
const Side = styled.div`
  border-radius: 0.3rem 0.3rem 0rem 0rem;
`;
