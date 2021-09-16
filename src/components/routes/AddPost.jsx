import React, { useContext, useEffect } from "react";
import { BazosContext } from "../../context/BazosState";
import styled from "styled-components";
import { data } from "../../data/SellSections";

export default function AddPost(props) {
  const { handleSubmit, handleChange, newPost } = useContext(BazosContext);
  // const [state, setstate] = useState("");
  // const getId = props.match.url;

  useEffect(() => {}, []);
  return (
    <div>
      <OrangeBlock>
        <p>Inzerát</p>
        <form onSubmit={handleSubmit}>
          <P>Kategorie *</P>
          <select
            value={newPost.kategorie}
            name="kategorie"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          >
            {data.map((data, i) => (
              <option key={i} value={data.url} required>
                {data.name}
              </option>
            ))}
          </select>
          <P>Nadpis</P>
          <input
            type="text"
            name="nadpis"
            value={newPost.nadpis}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <P>Text </P>
          <textarea
            type="text"
            name="text"
            value={newPost.text}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <P>Cena v Kč </P>
          <input
            type="text"
            name="cena"
            value={newPost.cena}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <P>PSČ</P>
          <input
            type="text"
            name="psč"
            value={newPost.psč}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <input type="submit" value="Odeslat" />
        </form>
      </OrangeBlock>
    </div>
  );
}
export const OrangeBlock = styled.div`
  background-color: #ffd9bf;
  border: 2px solid #e4c2ab;
  border-radius: 4px;
  padding: 0.7rem 0.5rem;
`;
const P = styled.p`
  margin: 0;
  padding: 0;
`;
