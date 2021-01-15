import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Header from "./containers/Header/Header";
import Borodinski from "./containers/Borodinski/Borodinski";
import PraceList from "./containers/praceList/PraceList";
import Shop from "./containers/shop/Shop";
import News from "./containers/news/News";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Layout>
          <Switch>
            <Route path="/" exact component={Borodinski} />
            <Route path="/PraceList" component={PraceList} />
            <Route path="/Shop" component={Shop} />
            <Route path="/News" component={News} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
