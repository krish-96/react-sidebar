import React, { useState, useEffect, Suspense } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getProduct } from "./productsList";

import { MdWarningAmber, MdInfoOutline } from "react-icons/md";

import noImgAvailable from "./../assets/no-image-available.png";

export default function Product() {
  const location = useLocation();
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    async function fetchProductData() {
      const details = await getProduct(params.productId);
      setProductDetails(details);
    }
    fetchProductData();
  }, [params.productId]);
  console.log("from product location: ", location);
  console.log("from product params: ", params);
  console.log("from product productDetails: ", productDetails);

  if (productDetails) {
    return (
      <>
        <h1
          className="h1 text-center "
          data-toggle="tooltip"
          data-placement="top"
          title={`About the product ${productDetails.product_name}`}
        >
          <MdInfoOutline /> {productDetails.product_name}
        </h1>
        <hr />
        <div className="row">
          <div className="col-6 text-end px-5 py-2">
            <Suspense fallback={<div>Loading...</div>}>
              <img
                src={
                  productDetails.cover_photo &&
                  productDetails.cover_photo !== null
                    ? productDetails.cover_photo
                    : productDetails.cover_photo === null
                    ? noImgAvailable
                    : ""
                }
                alt=""
                style={{
                  width: "50%",
                  boxShadow: "rgb(105 105 105) 0px 0px 20px 2px",
                  borderRadius: "5px",
                }}
              />
            </Suspense>
          </div>
          <div className="col-6 text-center justify-content-center my-auto align-items-center">
            <div className="text-start h5">Price : {productDetails.price}</div>
            <div className="text-start">
              <span className="h5">Product details:</span> <br />
              <p className=" px-2">{productDetails.product_name}</p>
            </div>
          </div>
        </div>
        <div className="text-center m-3">
          <hr />
          <Link to="/" className="btn btn-primary btn-sm p-2 px-5 mx-2">
            Home
          </Link>
          <Link to="/shop" className="btn btn-primary btn-sm p-2 px-5 mx-2">
            Shop
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card my-auto text-center">
          <div className="card-body">
            <div>
              <MdWarningAmber fontSize="60" />

              <p className="card-title text-center">
                No products are available with product number :{" "}
                <b>{params.productId}</b>
              </p>
              <p className="card-text text-center">
                Please use one of the following options to select the proper
                product
              </p>
            </div>
          </div>
        </div>
        <div className="text-center m-3">
          <Link to="/" className="btn btn-primary btn-sm p-2 px-5 mx-2">
            Home
          </Link>
          <Link to="/shop" className="btn btn-primary btn-sm p-2 px-5 mx-2">
            Shop
          </Link>
        </div>
      </>
    );
  }
}
