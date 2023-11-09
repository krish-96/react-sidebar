import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import formFields from "./../../common/formFields";

import merchantServices from "../../services/merchant";
import { ProdCatSubCatContext } from "./../../components/myshop";

function ProductCRUDComponent({ formatHeading, formatButtons, details }) {
  const navigate = useNavigate();
  const {
    isCreateDetailUpdateView,
    setIsCreateDetailUpdateView,
    action,
    setAction,
    actionFor,
    setActionFor,
    id,
    setId,
  } = useContext(ProdCatSubCatContext);

  const [categoryData, setCategoryData] = useState({
    product_name: details.name || details.product_name || "",
    is_deleted: false,
    category: null,
    sub_category: null,
    price: null,
    discount: null,
    cover_photo: null,
  });

  useEffect(() => {
    setCategoryData({
      ...categoryData,
      product_name: details.name || details.product_name,
    });
  }, [details]);

  async function handleSubmit(e) {
    e.preventDefault();
    // alert(categoryData.name);
    if (action === "create") {
      const resp = await merchantServices.createProduct(categoryData);
      if (resp) {
        setIsCreateDetailUpdateView(false);
        // navigate("/my-shop", { replace: true });
        setAction("");
      }
    } else if (action === "detail") {
      const resp = await merchantServices.getProduct(categoryData);
      if (resp) {
        setIsCreateDetailUpdateView(false);
        // navigate("/my-shop", { replace: true });
        setAction("");
      }
    } else if (action === "update") {
      const resp = await merchantServices.updateProduct(categoryData, id);
      if (resp) {
        setIsCreateDetailUpdateView(false);
        // navigate("/my-shop", { replace: true });
        setAction("");
      }
    } else if (action === "delete") {
      const resp = await merchantServices.deleteProduct(id);
      if (resp) {
        setIsCreateDetailUpdateView(false);
        // navigate("/my-shop", { replace: true });
        setAction("");
      }
    } else console.log("Not Create method");
  }

  function formatForm() {
    if (id) {
      if (action === "detail") {
        return (
          <p className="lead">
            Name : {categoryData.name || details.name || details.product_name}{" "}
          </p>
        );
      } else if (action === "delete") {
        return <p>Are you sure to delete?</p>;
      } else if (action === "update") {
        return (
          <>
            <h5>Update</h5>
            <formFields.InputField
              name={categoryData.product_name}
              label="Product Name"
              value={
                categoryData.product_name ||
                details.name ||
                details.product_name
              }
              type="text"
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  product_name: e.currentTarget.value,
                })
              }
            />
          </>
        );
      }
    }
    return (
      <>
        <formFields.InputField
          name={categoryData.product_name}
          label="Product Name"
          value={categoryData.product_name}
          type="text"
          onChange={(e) =>
            setCategoryData({
              ...categoryData,
              product_name: e.currentTarget.value,
            })
          }
        />
      </>
    );
  }

  return (
    <>
      <div className="row ">
        <div className="d-flex justify-content-center my-auto">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">{formatForm()}</div>
            {formatButtons()}
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductCRUDComponent;
