import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import AddToCart from "./pages/addToCart/addToCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/addToCart" element={<AddToCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
