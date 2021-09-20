import { GlobalStyle } from "./globalStyles";
import { HomeLayout, HomeRoute } from "./components/routesLayout/HomeRoute";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./components/routes/HomePage";
import Section from "./components/routesLayout/Section";
import MyPosts from "./components/routes/MyPosts";
import FavoritePosts from "./components/routes/FavoritePosts";
import AddPost from "./components/routes/AddPost";
import NotFound from "./components/routes/NotFound";
import Cathegory from "./components/routesLayout/Cathegory";
import BazosState from "./context/BazosState";
import {
  ProductLayout,
  ProductRoute,
} from "./components/routesLayout/ProductRoute";
import SinglePost from "./components/routes/SinglePost";
import Search from "./components/routes/Search";
function App() {
  return (
    <>
      <GlobalStyle />
      <BazosState>
        <Router>
          <Switch>
            <HomeRoute
              exact
              layout={HomeLayout}
              path="/"
              component={HomePage}
            />
            <HomeRoute
              exact
              layout={HomeLayout}
              path="/moje-inzeraty"
              component={MyPosts}
            />
            <HomeRoute
              exact
              layout={HomeLayout}
              path="/oblibene-inzeraty"
              component={FavoritePosts}
            />
            <ProductRoute
              exact
              layout={ProductLayout}
              path="/pridat-inzerat"
              component={AddPost}
            />
            <ProductRoute
              exact
              layout={ProductLayout}
              path="/kategorie/:slug/"
              component={(props) => <Cathegory {...props} />}
            />
            <ProductRoute
              exact
              layout={ProductLayout}
              path="/search"
              component={(props) => <Search {...props} />}
            />
            <ProductRoute
              exact
              layout={ProductLayout}
              path="/kategorie/:slug/:section"
              component={(props) => <Section {...props} />}
            />
            <ProductRoute
              exact
              layout={ProductLayout}
              path="/kategorie/:slug/:section/:id"
              component={(props) => <SinglePost {...props} />}
            />
            <HomeRoute
              exact
              layout={HomeLayout}
              path="*"
              component={NotFound}
            />
          </Switch>
        </Router>
      </BazosState>
    </>
  );
}

export default App;
