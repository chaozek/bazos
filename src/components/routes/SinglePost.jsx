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
  const { nadpis, text, img, cena, psč } = getData;

  return (
    <Single>
      <Side>{nadpis}</Side>
      <Image src={img} alt="product foto" />
      <p>{text}</p>
      <Detail>
        <ul>
          <li>
            <Left>Jméno:</Left>
            <Right>
              <strong>Test Testový</strong>
            </Right>
          </li>
          <li>
            {" "}
            <Left>Telefon:</Left>
            <Right>735 545 288</Right>
          </li>
          <li>
            {" "}
            <Left>PSČ:</Left>
            <Right>{psč}</Right>
          </li>
          <li>
            <Left>Cena:</Left>
            <Right>
              <strong>{cena} Kč</strong>
            </Right>
          </li>
        </ul>
      </Detail>
    </Single>
  );
}
const Side = styled.div`
  border-radius: 0.2rem;
  background-color: #ffd9bf;
  font-weight: bold;
  padding: 0.4rem 0.2rem;
  border: 1px solid #c7a995;
`;
const Image = styled.img`
  margin-top: 2rem;
`;
const Single = styled.div`
  border-left: 1px dashed #bbbbbb;
  padding-left: 1rem;
`;
const Left = styled.div`
  width: 50px;
`;
const Right = styled.div``;
const Detail = styled.div`
  ul {
    padding: 0;
    flex-direction: column;
  }
  li {
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
`;
