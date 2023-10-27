import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";

export default function AppRouter() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
