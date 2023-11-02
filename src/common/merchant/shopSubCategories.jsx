import React, { useState, useId, useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GrView } from "react-icons/gr";

import ViewOrUpdate from "./createDetailUpdateView";
import { ProdCatSubCatContext } from "../../components/myshop";

export default function ShopSubCategories({ subCategories }) {
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
      {isCreateDetailUpdateView && (
        <ViewOrUpdate isProdCatSubCat="sub category" />
      )}

      {subCategories && subCategories.length > 0 ? (
        <table>
          <tbody>
            {subCategories.map((subCategory, index) => (
              <tr key={`${uniqueId}_${index}`}>
                <td className="w-50">
                  {subCategory.category.name}-{subCategory.name}
                </td>
                <td className="text-end">
                  <button
                    className="btn btn-primary  btn-sm ml-1"
                    onClick={() => {
                      setIsCreateDetailUpdateView(true);
                      setId(subCategory.id);
                      setAction("detail");
                      setActionFor("sub category");
                    }}
                  >
                    <GrView />
                  </button>
                  <button
                    className="btn btn-warning btn-sm mx-1"
                    onClick={() => {
                      setIsCreateDetailUpdateView(true);
                      setId(subCategory.id);
                      setAction("update");
                      setActionFor("sub category");
                    }}
                  >
                    <MdOutlineModeEdit />
                  </button>
                  <button
                    className="btn btn-danger btn-sm ml-1"
                    onClick={() => {
                      setIsCreateDetailUpdateView(true);
                      setId(subCategory.id);
                      setAction("delete");
                      setActionFor("sub category");
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
          <p className="text-center text-secondary p-3">
            No Sub Categories Yet
          </p>
        </div>
      )}
    </>
  );
}
