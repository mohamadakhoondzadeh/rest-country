import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Filter from "./components/Filter";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/c/:name" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
