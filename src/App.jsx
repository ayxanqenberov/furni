import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './assets/Components/Header'
import Sect1 from "./assets/Components/SectHome";
import Products from "./assets/Components/Products";
import Footer from "./assets/Components/Footer";
import Detail from "./assets/pages/Detail";

const App = () => {
  return (
    // <Header/>,
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
      <Sect1 />
      <Products />
      <Footer/>
    </>
  );
};

export default App;