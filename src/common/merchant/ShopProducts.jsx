import React, { useState, useId, useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GrView } from "react-icons/gr";

import ViewOrUpdate from "./createDetailUpdateView";
import { ProdCatSubCatContext } from "../../components/myshop";

export default function ShopProducts({ products }) {
  const uniqueId = useId();

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

  console.log(
    "isCreateDetailUpdateView & Action & ActionFor",
    isCreateDetailUpdateView,
    action,
    actionFor,
    id
  );

  return (
    <>
      {isCreateDetailUpdateView && <ViewOrUpdate isProdCatSubCat="product" />}

      {products && products.length > 0 ? (
        <table>
          <tbody>
            {products.map((product, index) => (
              <tr key={`${uniqueId}_${index}`}>
                <td className="w-50">
                  {product.category.name} - {product.sub_category.name} -{" "}
                  {product.product_name}
                </td>
                <td className="text-end">
                  <button
                    className="btn btn-primary  btn-sm ml-1"
                    onClick={() => {
                      setIsCreateDetailUpdateView(true);
                      setId(product.id);
                      setAction("detail");
                      setActionFor("product");
                    }}
                  >
                    <GrView />
                  </button>
                  <button
                    className="btn btn-warning btn-sm mx-1"
                    onClick={() => {
                      setIsCreateDetailUpdateView(true);
                      setId(product.id);
                      setAction("update");
                      setActionFor("product");
                    }}
                  >
                    <MdOutlineModeEdit />
                  </button>
                  <button
                    className="btn btn-danger btn-sm ml-1"
                    onClick={() => {
                      setIsCreateDetailUpdateView(true);
                      setId(product.id);
                      setAction("delete");
                      setActionFor("product");
                    }}
                  >
                    <RxCross2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="">
          <p className="text-center text-secondary p-3">No Products Yet</p>
        </div>
      )}
    </>
  );
}
