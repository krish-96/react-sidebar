import React, { useId, useState, useEffect, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { MdInfoOutline } from "react-icons/md";
import PaginatedItems from "./../common/pagination";
import userService from "./../services/user";

import ProductsContext from "./products";
import noImgAvailable from "./../assets/no-image-available.png";

export default function ProductsList({
  products,
  selectedCategory,
  searchProduct,
  setTotalProducts,
  setProducts,
}) {
  const user = useContext(ProductsContext);
  console.log("userContext==> ", user);

  const newUniqueId = useId();
  const filteredProducts = useMemo(() => {
    let new_products = [];
    if (
      (searchProduct != null || searchProduct !== "") &&
      searchProduct.length > 0
    ) {
      new_products = products.filter((product) =>
        product.product_name.toLowerCase().includes(searchProduct.toLowerCase())
      );
    } else {
      if (
        selectedCategory === null ||
        selectedCategory === "" ||
        selectedCategory === "All categories"
      ) {
        new_products = products;
      } else {
        new_products = products.filter(
          (product) => product.category === selectedCategory
        );
      }
    }
    console.log("new_products.length : ", new_products.length);
    setTotalProducts(parseInt(new_products.length));
    setProducts(new_products);
    return new_products;
  }, [selectedCategory, searchProduct, products]);
  console.log("filteredProducts => :", filteredProducts);
  function formatCoverPhotoStyling() {
    let styles = {};
    return styles;
  }

  if (!(filteredProducts && filteredProducts.length >= 1)) {
    return (
      <div className="row text-center" style={{ height: "500px" }}>
        <div className="col-12 mx-auto  my-auto " key={`${newUniqueId}`}>
          <div className="h5 text-secondary ">
            {searchProduct
              ? "No products matching...!"
              : "No products are available"}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      {filteredProducts.map((product, index) => {
        return (
          <div
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
            key={`${newUniqueId}-${index}`}
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={
                  product.cover_photo && product.cover_photo !== null
                    ? product.cover_photo
                    : noImgAvailable
                }
                height={"200px"}
                alt=""
                style={{ formatCoverPhotoStyling }}
              />
              <div className="card-body">
                <div className="card-title">
                  <span className="text-normal">
                    <strong> {product.product_name} in </strong>
                  </span>
                  <br />
                  {/* <span className="text-normal"> in </span><br /> */}
                  <span>Category: {product.category.name}</span>
                  <br />
                  <span>Sub Category : {product.sub_category.name}</span>
                </div>
                <p className="card-text">
                  <span>
                    ₹<strong>{product.price - product.discount}</strong>{" "}
                    <strike className="text-danger"> {product.price}</strike>
                  </span>
                  <br />
                  {/* <span>Discount : {product.discount}</span> */}
                </p>
                {/* <p>{product.price - product.discount}</p> */}
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-primary btn-sm"
                >
                  <MdInfoOutline fontSize={"24"} />
                  See full details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getProduct(productNumber) {
  const fetchdProducts = await userService.getLiveProducts();
  console.log("fetchdProducts ::: ", fetchdProducts);
  return fetchdProducts.find((eProduct) => {
    console.log(
      "eProduct.productNumber ",
      eProduct.product_number,
      productNumber
    );
    return eProduct.id === parseInt(productNumber) && eProduct;
  });
}
