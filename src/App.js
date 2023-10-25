import React from "react";

import { Link, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Account from "./components/account";
import DashBoard from "./components/dashboard";
import Product from "./components/product";
import Products from "./components/products";
import Categories from "./components/category";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars, faTwitter } from "@fortawesome/free-solid-svg-icons";

function App() {
  const currentPath = useLocation();
  console.log(currentPath.pathname === "/products");

  return (
    <>
      <NavBar />
      {/* <h1 className="text-center">Home</h1> */}
      <Outlet />
    </>
  );
}

export default App;
