import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import anonym from "../imgs/anonym.png";
import useLocalStorage from "./useLocalStorage.jsx";
export const BazosContext = createContext();

const BazosState = (props) => {
  const initialState = {
    loading: false,
    starterValues: [
      {
        zvirata: [
          {
            nadpis: "Kočka domácí",
            kategorie: "kocky",
            text: "je milá",
            cena: 500,
            psč: 64300,
            img: anonym,
            id: 1,
          },
          {
            nadpis: "Šemík nebojácný",
            kategorie: "kone",
            text: "je rychly",
            cena: 5000,
            psč: 63400,
            img: anonym,
            id: 2,
          },
          {
            nadpis: "Rex",
            kategorie: "psi",
            text: "Nabízím k prodeji štěňata pasteveckých psů, otec čuvač, matka pyrenejský horský pes.Oba rodiče vyrovnané povahy , využíváni k ochraně stáda. Štěňata jsou zvyklá na sítě, vhodná jak k hlídání stád před predátory, tak k ostraze objektů nebo na zahradu. Jsou řádně očkována, odčervena,již k odběru.",
            cena: 430,
            psč: 63300,
            img: anonym,
            id: 3,
          },
        ],
        auto: [
          {
            nadpis: "Náklaďák",
            kategorie: "uzitkova-auta",
            text: "Uveze vše",
            cena: 55500,
            psč: 55500,
            img: anonym,
            id: 4,
          },
          {
            nadpis: "Hyundai I20",
            kategorie: "osobni-auta",
            text: "Také se divím, že funguje",
            cena: 555000,
            psč: 22400,
            img: anonym,
            id: 5,
          },
          {
            nadpis: "Kola na focus MKII",
            kategorie: "nahradni-dily",
            text: "Sezónu to dá",
            cena: 220,
            psč: 33300,
            img: anonym,
            id: 6,
          },
        ],
        reality: [
          {
            nadpis: "barak",
            kategorie: "domy",
            text: "V top Stavu",
            cena: 5550000,
            psč: 15500,
            img: anonym,
            id: 7,
          },
        ],
      },
    ],
  };

  const [posts, setPosts] = useLocalStorage(
    "posts",
    initialState.starterValues[0]
  );
  const [newPost, setNewPost] = useState({
    nadpis: "",
    kategorie: "",
    text: "",
    cena: "",
    psč: "",
    img: anonym,
  });
  const [newTransPost, setNewTransPost] = useState({
    kategorie: [
      {
        nadpis: "",
        kategorie: "",
        text: "",
        cena: "",
        psč: "",
        img: "",
        id: "",
      },
    ],
  });
  const [categhory, setCateghory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewPost({
      nadpis: "",
      kategorie: "",
      text: "",
      cena: "",
      psč: "",
      img: anonym,
    });
    let cathegoryType = Object.keys(newTransPost)[0];
    const post1 = newTransPost[cathegoryType][0];
    setPosts((p) => {
      console.log(p[cathegoryType]);
      return {
        ...p,
        [cathegoryType]: [...p[cathegoryType], post1],
      };
    });
  };
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setNewPost((p) => {
      return {
        ...p,
        [name]: value,
        id: uuidv4(),
      };
    });
    transformObj(newPost);
  };
  const transformObj = (post) => {
    const { cena, nadpis, kategorie, text, psč, id } = post;
    const newPost = {
      [kategorie]: [{ nadpis, kategorie, text, cena, psč, img: anonym, id }],
    };
    setNewTransPost(newPost);
  };
  return (
    <BazosContext.Provider
      value={{
        setPosts,
        handleSubmit,
        posts,
        handleChange,
        setNewPost,
        newPost,
        categhory,
        setCateghory,
      }}
    >
      {props.children}
    </BazosContext.Provider>
  );
};

export default BazosState;
