import React, { Suspense } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getProduct } from "./productsList";

import { MdWarningAmber, MdInfoOutline } from "react-icons/md";

export default function Product() {
  const location = useLocation();
  const params = useParams();
  const productDetails = getProduct(params.productNumber);
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
          title={`About the product ${productDetails.productName}`}
        >
          <MdInfoOutline /> {productDetails.productName}
        </h1>
        <hr />
        <div className="row">
          <div className="col-6 text-end px-5 py-2">
            <Suspense fallback={<div>Loading...</div>}>
              <img
                src={productDetails.productImage}
                alt=""
                style={{
                  // width: "50%",
                  boxShadow: "rgb(105 105 105) 0px 0px 20px 2px",
                  borderRadius: "5px",
                }}
              />
            </Suspense>
          </div>
          <div className="col-6 text-center justify-content-center my-auto align-items-center">
            <div className="text-start h5">
              Price : {productDetails.productPrice}
            </div>
            <div className="text-start">
              <span className="h5">Product details:</span> <br />
              <p className=" px-2">{productDetails.productDescription}</p>
            </div>
          </div>
        </div>
        <div className="text-center m-3">
          <hr />
          <Link to="/" className="btn btn-primary btn-sm p-2 px-5 mx-2">
            Home
          </Link>
          <Link to="/products" className="btn btn-primary btn-sm p-2 px-5 mx-2">
            Products
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
                <b>{params.productNumber}</b>
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
          <Link to="/products" className="btn btn-primary btn-sm p-2 px-5 mx-2">
            Products
          </Link>
        </div>
      </>
    );
  }
}
