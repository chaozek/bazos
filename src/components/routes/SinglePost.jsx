import React, { useContext } from "react";
import { BazosContext } from "../../context/BazosState";
import styled from "styled-components";

export default function SinglePost(props) {
  const { posts } = useContext(BazosContext);
  const getCathegory = props.match.params.slug;
  const getId = props.match.params.id;

  const getIdFun = (id) => {
    if (typeof id === Number) {
      return;
    } else {
      return id.toString();
    }
  };
  const cathegory = posts[getCathegory];
  const getData = cathegory.find((p) => getIdFun(p.id) === getId);
  const { nadpis, text, img } = getData;

  return (
    <div>
      <Side>{nadpis}</Side>
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}
const Side = styled.div`
  border-radius: 0.2rem;
  background-color: #ffd9bf;
  font-weight: bold;
  padding: 0.4rem 0.2rem;
  border: 1px solid #c7a995;
`;
