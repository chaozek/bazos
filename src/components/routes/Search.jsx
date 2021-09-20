import React, { useContext } from "react";
import { BazosContext } from "../../context/BazosState";
import {
  Right,
  List,
  LinkDiv,
  H4,
  Left,
  ImageLink,
  Img,
  H3,
} from "../routesLayout/Cathegory";
export default function Search(props) {
  const { posts, searchTerm } = useContext(BazosContext);

  return (
    <div>
      <H3>Vše</H3>
      {posts.zvirata
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
        .map((post, i) => (
          <List key={i}>
            {console.log(post)}
            <LinkDiv to={`/kategorie/zvirata/${post.kategorie}/${post.id}`}>
              <H4>{post.nadpis}</H4>
            </LinkDiv>
            <Left>
              <ImageLink to={`/kategorie/zvirata/${post.kategorie}/${post.id}`}>
                <Img src={post.img} alt="" />
              </ImageLink>
              <p>{post.text}</p>
            </Left>
            <Right>
              <p>{post.cena} Kč</p>
              <p>{post.psč}</p>
            </Right>
          </List>
        ))}
    </div>
  );
}
