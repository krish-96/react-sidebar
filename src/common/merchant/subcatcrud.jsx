import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import formFields from "./../../common/formFields";

import merchantServices from "../../services/merchant";
import { ProdCatSubCatContext } from "./../../components/myshop";

function SubCategoryCRUDComponent({ formatHeading, formatButtons, details }) {
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
    categories,
    getCategoryName,
  } = useContext(ProdCatSubCatContext);

  const [categoryData, setCategoryData] = useState({
    name: details.name || details.product_name || "",
    is_deleted: false,
    category: "",
  });

  useEffect(() => {
    setCategoryData({
      ...categoryData,
      name: details.name || details.product_name,
      category: details.category || "",
    });
  }, [details]);

  async function handleSubmit(e) {
    e.preventDefault();
    // alert(categoryData.name);
    if (action === "create") {
      const resp = await merchantServices.createSubCategory(categoryData);
      if (resp) {
        setIsCreateDetailUpdateView(false);
        // navigate("/my-shop", { replace: true });
        setAction("");
      }
    } else if (action === "detail") {
      const resp = await merchantServices.createSubCategory(categoryData);
      if (resp) {
        setIsCreateDetailUpdateView(false);
        // navigate("/my-shop", { replace: true });
        setAction("");
      }
    } else if (action === "update") {
      const resp = await merchantServices.updateSubCategory(categoryData, id);
      if (resp) {
        setIsCreateDetailUpdateView(false);
        // navigate("/my-shop", { replace: true });
        setAction("");
      }
    } else if (action === "delete") {
      const resp = await merchantServices.deleteSubCategory(id);
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
            <formFields.SelectField
              name={categoryData.category}
              label="Category"
              value={categoryData.category}
              selectOptions={categories}
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  category: e.currentTarget.value,
                })
              }
              defaultOption={categoryData.category}
            />
            <formFields.InputField
              name={categoryData.name}
              label="Sub Category Name"
              value={categoryData.name || details.name || details.product_name}
              type="text"
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  name: e.currentTarget.value,
                })
              }
            />
          </>
        );
      }
    }
    return (
      <>
        <formFields.SelectField
          name={categoryData.category}
          label="Category"
          value={categoryData.category}
          selectOptions={categories}
          onChange={(e) =>
            setCategoryData({
              ...categoryData,
              category: e.currentTarget.value,
            })
          }
        />
        <formFields.InputField
          name={categoryData.name}
          label="Sub Category Name"
          value={categoryData.name}
          type="text"
          onChange={(e) =>
            setCategoryData({
              ...categoryData,
              name: e.currentTarget.value,
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

export default SubCategoryCRUDComponent;
