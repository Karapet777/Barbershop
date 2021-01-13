import React from "react";

import Layout from "./components/Layout/Layout";
import Header from "./containers/Header/Header";
import Borodinski from "./containers/Borodinski/Borodinski";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Borodinski />
      </Layout>
    </div>
  );
}

export default App;
