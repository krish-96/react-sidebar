import React, { useState, useContext, useEffect } from "react";
import { ProdCatSubCatContext } from "../../components/myshop";
import merchantServices from "../../services/merchant";
import CategoryCRUDComponent from "./catcrud";
import SubCategoryCRUDComponent from "./subcatcrud";
import ProductCRUDComponent from "./prodcrud";

import { toast } from "react-toastify";
// function CategoryComponent(){

// }

export default function ViewOrUpdate({ isProdCatSubCat }) {
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
  const [details, setDetails] = useState({});

  console.log(
    "isCreateDetailUpdateView & Action & ActionFor",
    isCreateDetailUpdateView,
    action,
    actionFor,
    id
  );

  useEffect(() => {
    (async () => {
      let data = {};
      if (action !== "create") {
        if (actionFor === "category")
          data = await merchantServices.getCategory(id);
        else if (actionFor === "product")
          data = await merchantServices.getProduct(id);
        else if (actionFor === "sub category")
          data = await merchantServices.getSubCategory(id);
        console.log(data);

        setDetails(data, action);
      }
    })();
  }, [id, actionFor, action]);

  console.log("details", details);

  function handleUpdate(e) {
    e.preventDefault();
    console.log("update");
  }

  function formatButtons() {
    // e.preventDefault();
    let fbutton = "";
    if (action === "create") {
      fbutton = (
        <button type="submit" className="btn btn-warning btn-sm px-4 mx-1">
          Create
        </button>
      );
    } else if (action === "update") {
      fbutton = (
        <button type="submit" className="btn btn-warning btn-sm px-4 mx-1">
          Update
        </button>
      );
    } else if (action === "delete") {
      fbutton = (
        <button
          type="submit"
          // onClick={handlePopUp}
          className="btn btn-danger btn-sm px-4 mx-1"
        >
          Confirm
        </button>
      );
    } else {
      fbutton = (
        <button
          onClick={handlePopUp}
          className="btn btn-primary btn-sm px-4 mx-1"
        >
          Ok
        </button>
      );
    }
    return (
      <p className="text-center mt-2">
        {fbutton}
        <button
          onClick={handlePopUp}
          className="btn btn-secondary btn-sm px-4 mx-1"
        >
          Cancel
        </button>
      </p>
    );
  }

  function handlePopUp(e) {
    setIsCreateDetailUpdateView(!isCreateDetailUpdateView);
    if (id) setId(null);
  }

  function formatAction() {
    if (action === "create") return <span> Create</span>;
    else if (action === "detail")
      return (
        <span>
          {" "}
          Details {details && `: ${details.name || details.product_name}`}
        </span>
      );
    else if (action === "update")
      return (
        <span>
          {" "}
          Update {details && `: ${details.name || details.product_name}`}
        </span>
      );
    else if (action === "delete")
      return (
        <span>
          {" "}
          Delete {details && `: ${details.name || details.product_name}`}
        </span>
      );
  }

  function formatHeading() {
    if (actionFor === "category") return <span>{formatAction()} Category</span>;
    else if (actionFor === "product")
      return <span>Product{formatAction()}</span>;
    else if (actionFor === "sub category")
      return <span>Sub Category{formatAction()}</span>;
  }

  return (
    <>
      <div
        className="row bg-light"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "1000",
        }}
      >
        <div style={{ position: "relative", padding: "20px" }}>
          <h5 className="display-5 text-center mt-5">{formatHeading()}</h5>
          <div>
            {/* <h5 className="text-center">Data</h5> */}
            {actionFor === "category" ? (
              <CategoryCRUDComponent
                formatHeading={formatHeading}
                formatButtons={formatButtons}
                handlePopUp={handlePopUp}
                details={details}
              />
            ) : (
              ""
            )}
            {actionFor === "sub category" ? (
              <SubCategoryCRUDComponent
                formatHeading={formatHeading}
                formatButtons={formatButtons}
                handlePopUp={handlePopUp}
                details={details}
              />
            ) : (
              ""
            )}
            {actionFor === "product" ? (
              <ProductCRUDComponent
                formatHeading={formatHeading}
                formatButtons={formatButtons}
                handlePopUp={handlePopUp}
                details={details}
              />
            ) : (
              ""
            )}
          </div>
          {/* <p className="text-center mt-2">{formatButtons()}</p> */}
        </div>
      </div>
    </>
  );
}
