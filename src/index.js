import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppRouter from "./AppRouter";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/dashboard";
import Account from "./components/account";
import Product from "./components/product";
import Products from "./components/products";
import NotFound from "./components/notfound";
import EditPersonalInformation from "./components/editPersonalInfo";
import MyShop from "./components/myshop";

import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import SignOut from "./components/signOut";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRouter />}>
          <Route index element={<App />} />
          <Route path="/account" element={<Account />} />
          <Route path="/personal-info" element={<EditPersonalInformation />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/my-shop" element={<MyShop />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/shop" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer position="bottom-right" />
  </React.StrictMode>
);

reportWebVitals();

{
  /* <p className="alert alert-warning text-center">
<span className="text-danger">
  <strong>Note : </strong>
</span>
Still working on it! BackEnd API implementation is not completed.
</p> */
}

// import * as React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

// import Product from "./components/product";
// import Products from "./components/products";
// import Account from "./components/account";
// import DashBoard from "./components/dashboard";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "account",
//     element: <Account />,
//   },
//   {
//     path: "dashboard",
//     element: <DashBoard />,
//   },
//   {
//     path: "products",
//     element: <Products />,
//   },
//   {
//     path: "product",
//     element: <Product />,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
