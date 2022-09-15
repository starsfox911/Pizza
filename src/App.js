import "./App.css";
import "./scss/app.scss";

import React from "react";

import { Header } from "./components/Header";
import { NotFound } from "./pages/NotFound";

import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import { AccountBasket } from "./pages/AccountBasket";
// import axios from "axios";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/account-basket"} element={<AccountBasket />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
