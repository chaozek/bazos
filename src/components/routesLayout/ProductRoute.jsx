import { Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import Nav from "../Nav";
import SideBar from "../SideBar";
export const ProductRoute = ({
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
        <FlexGrid>
          <SideBarWrap>
            <SideBar {...props} aapps />
          </SideBarWrap>
          <MainContent>
            <Component {...props} />
          </MainContent>
        </FlexGrid>
      </Layout>
    )}
  />
);
export const ProductLayout = styled.div`
  width: 98vw;
  margin: 0 auto;
  max-width: 100%;
  min-height: 700px;
  background-position: 98% 100%;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const FlexGrid = styled.div`
  display: flex;
  margin-top: 3rem;
`;
export const SideBarWrap = styled.div`
  width: 250px;
  background-color: #ffecbf;
`;
export const MainContent = styled.div`
  flex: 5;
  margin: 0rem 1rem;
`;
