import { Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import Nav from "../Nav";

export const HomeRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Header />
        <Nav />
        <Component {...props} />
      </Layout>
    )}
  />
);
export const HomeLayout = styled.div`
  width: 80vw;
  margin: 0 auto;
  max-width: 100%;
  min-height: 700px;
  background-position: 98% 100%;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
