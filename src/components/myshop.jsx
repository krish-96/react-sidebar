import React, { useState, useEffect } from "react";
import ShopCategories from "../common/shopCategories";
import ShopSubCategories from "../common/shopSubCategories";
import ShopProducts from "../common/ShopProducts";

import merchantServices from "./../services/merchant";

import { FaPlus } from "react-icons/fa";

export default function MyShop() {
  const [merchantData, setMerchantData] = useState({
    categories: [],
    subCategories: [],
    products: [],
  });

  useEffect(() => {
    setMerchantData({
      categories: merchantServices.merchantCategories() || [],
      subCategories: merchantServices.merchantSubCategories() || [],
      products: merchantServices.merchantProducts() || [],
    });
  }, []);

  return (
    <>
      <div className="container row">
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
