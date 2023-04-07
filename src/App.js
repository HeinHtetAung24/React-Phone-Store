import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={ProductList}></Route>
        <Route path="/detail" Component={Detail}></Route>
        <Route path="/cart" Component={Cart}></Route>
        <Route path="*" Component={Default}></Route>
      </Routes>
      <Modal />
    </>
  );
}

export default App;
