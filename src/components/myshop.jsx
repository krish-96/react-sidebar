import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import ShopCategories from "../common/merchant/shopCategories";
import ShopSubCategories from "../common/merchant/shopSubCategories";
import ShopProducts from "../common/merchant/ShopProducts";

import merchantServices from "./../services/merchant";

import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

export const ProdCatSubCatContext = createContext();

export default function MyShop() {
  const navigate = useNavigate();
  const [merchantData, setMerchantData] = useState({
    categories: [],
    subCategories: [],
    products: [],
  });
  const [isCreateDetailUpdateView, setIsCreateDetailUpdateView] =
    useState(false);
  const [action, setAction] = useState("");
  const [actionFor, setActionFor] = useState("");
  const [id, setId] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      toast.info("Login is Required!");
      navigate("/signin", { replace: true });
    } else {
      (async () => {
        const cats = await merchantServices.getMerchantCategories();
        const subCats = await merchantServices.getMerchantSubCategories();
        const products = await merchantServices.getMerchantProducts();
        console.log("Merchant:", cats, subCats, products);
        setMerchantData({
          categories: cats,
          subCategories: subCats,
          products: products,
        });
      })();
    }
  }, [token, action]);

  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  return (
    <>
      <ProdCatSubCatContext.Provider
        value={{
          isCreateDetailUpdateView,
          setIsCreateDetailUpdateView,
          action,
          setAction,
          actionFor,
          setActionFor,
          id,
          setId,
        }}
      >
        <div className="row mx-5">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <h5 className=" text-dark text-center p-2">
              Categories{" "}
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setActionFor("category");
                  setAction("create");
                  setIsCreateDetailUpdateView(true);
                  console.log(action, isCreateDetailUpdateView);
                }}
              >
                {" "}
                <FaPlus />
              </button>
              <hr />
            </h5>
            <div>
              <ShopCategories categories={merchantData.categories} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <h5 className=" text-dark text-center p-2">
              Sub Categories{" "}
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setActionFor("sub category");
                  setIsCreateDetailUpdateView(true);
                  console.log(action, isCreateDetailUpdateView);
                }}
              >
                {" "}
                <FaPlus />
              </button>
              <hr />
            </h5>
            <div>
              <ShopSubCategories subCategories={merchantData.subCategories} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6">
            <h5 className=" text-dark text-center p-2">
              Products{" "}
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setActionFor("product");
                  setAction("create");
                  setIsCreateDetailUpdateView(true);
                  console.log(action, isCreateDetailUpdateView);
                }}
              >
                {" "}
                <FaPlus />
              </button>
              <hr />
            </h5>
            <div>
              <ShopProducts products={merchantData.products} />
            </div>
          </div>
        </div>{" "}
      </ProdCatSubCatContext.Provider>
    </>
  );
}
