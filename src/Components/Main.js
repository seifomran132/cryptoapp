import React from "react";
import Layout from "antd/lib/layout/layout";
import { Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import Exchange from "./Exchange";
import News from './News'
import Cryptocurrencies from './Cryptocurrencies'
import Cryptodetails from './Cryptodetails'

function Main(props) {
  return (
    <Layout>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Homepage />} exact></Route>
          <Route path="/exchange" element={<Exchange />} exact></Route>
          <Route
            path="/cryptocurrencies"
            element={<Cryptocurrencies />}
            exact
          ></Route>
          <Route
            path="/cryptodetails/:coinId"
            element={<Cryptodetails />}
            exact
          ></Route>
          <Route path="/news" element={<News />} exact></Route>
        </Routes>
      </div>
    </Layout>
  );
}

export default Main;
