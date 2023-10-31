import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShopCategories from "../common/shopCategories";
import ShopSubCategories from "../common/shopSubCategories";
import ShopProducts from "../common/ShopProducts";

import merchantServices from "./../services/merchant";

import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

export default function MyShop() {
  const navigate = useNavigate();
  const [merchantData, setMerchantData] = useState({
    categories: [],
    subCategories: [],
    products: [],
  });
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      toast.info("Login is Required!");
      navigate("/signin", { replace: true });
    } else {
      (async () => {
        const cats = await merchantServices.merchantCategories();
        const subCats = await merchantServices.merchantSubCategories();
        const products = await merchantServices.merchantProducts();
        console.log("Merchant:", cats, subCats, products);
        setMerchantData({
          categories: cats,
          subCategories: subCats,
          products: products,
        });
      })();
    }
  }, []);

  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  return (
    <>
      <div className="row mx-5">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          <h5 className=" text-dark text-center p-2">
            Categories{" "}
            <span className="btn btn-primary btn-sm">
              {" "}
              <FaPlus />
            </span>
            <hr />
          </h5>
          <div>
            <ShopCategories categories={merchantData.categories} />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          <h5 className=" text-dark text-center p-2">
            Sub Categories{" "}
            <span className="btn btn-primary btn-sm">
              {" "}
              <FaPlus />
            </span>
            <hr />
          </h5>
          <div>
            <ShopSubCategories subCategories={merchantData.subCategories} />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6">
          <h5 className=" text-dark text-center p-2">
            Products{" "}
            <span className="btn btn-primary btn-sm">
              {" "}
              <FaPlus />
            </span>
            <hr />
          </h5>
          <div>
            <ShopProducts products={merchantData.products} />
          </div>
        </div>
      </div>{" "}
    </>
  );
}
