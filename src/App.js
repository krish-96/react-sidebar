import React from "react";

import { useLocation } from "react-router-dom";
import "./App.css";
import AccordionsList from "./components/accordionList";

function App() {
  const currentPath = useLocation();
  console.log(currentPath.pathname === "/products");
  console.log("product", sessionStorage.getItem("products"));

  return (
    <>
      <h1 className="text-center display-6">Welcome to HGL Shop!</h1>
      <p className="lead text-center mt-4">
        Welcome to HGL Shop – Your One-Stop Shop for Everything You Need!
      </p>
      <div className="container">
        <h5 className="mt-5 mb-3">
          Currently we are working on the following features:
        </h5>
        <div className="">
          <AccordionsList />
        </div>
      </div>
    </>
  );
}

export default App;
