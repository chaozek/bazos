import React, { useContext, useEffect } from "react";
import { BazosContext } from "../../context/BazosState";
import styled from "styled-components";
import { data } from "../../data/SellSections";

export default function AddPost(props) {
  const {
    handleSubmit,
    handleChange,
    newPost,
    states,
    setStates,
    loading,
    setLoading,
  } = useContext(BazosContext);
  // const [state, setstate] = useState("");
  // const getId = props.match.url;
  useEffect(() => {
    if (states.length <= 0) {
      getStates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getStates() {
    var headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "ZkU4Wk54ZXh5cFhXdEpkalp0VkpHY1ZYZzc0WVlpSFd5ZHVhQ0xxRw=="
    );
    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };
    try {
      fetch(
        "https://api.countrystatecity.in/v1/countries/CZ/states",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => result)
        .then((result) => setStates(result), setLoading(false));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <OrangeBlock>
        <p>Inzerát</p>
        <form onSubmit={handleSubmit}>
          <P>Kategorie *</P>
          <select
            type="select"
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
            onChange={handleChange}
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
            type="number"
            name="cena"
            value={newPost.cena}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <P>Město</P>
          <select
            required
            type="select"
            name="psč"
            value={newPost.psč}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option required value="Zvolte město">
              Zvolte město
            </option>
            ;
            {loading ? (
              <option>...loading</option>
            ) : (
              states.map((state) => {
                return (
                  <option key={state.id}>
                    {state.name}, {state.iso2}00
                  </option>
                );
              })
            )}
          </select>
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
