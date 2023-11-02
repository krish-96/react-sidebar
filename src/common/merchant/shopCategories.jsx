import React, { useState, useEffect, useId, useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GrView } from "react-icons/gr";

import ViewOrUpdate from "./createDetailUpdateView";
import { ProdCatSubCatContext } from "./../../components/myshop";

export default function ShopCategories({ categories }) {
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
  const uniqueId = useId();
  const [isMouseHover, setIsMouseHover] = useState(false);

  function mouseHover() {
    setIsMouseHover(true);
  }

  // useEffect(() => {}, [action, categories]);

  console.log(
    "isCreateDetailUpdateView & Action & ActionFor",
    isCreateDetailUpdateView,
    action,
    actionFor,
    id
  );

  return (
    <>
      {isCreateDetailUpdateView && <ViewOrUpdate isProdCatSubCat="category" />}
      {categories && categories.length > 0 ? (
        <table>
          <tbody>
            {categories.map((category, index) => (
              <tr key={`${uniqueId}_${index}`}>
                <td className="w-50">{category.name}</td>
                <td className="text-end">
                  <button
                    className="btn btn-primary  btn-sm ml-1"
                    onClick={() => {
                      setIsCreateDetailUpdateView(true);
                      setId(category.id);
                      setAction("detail");
                      setActionFor("category");
                    }}
                  >
                    <GrView />
                  </button>
                  <button
                    className="btn btn-warning btn-sm mx-1"
                    onClick={() => {
                      setIsCreateDetailUpdateView(true);
                      setId(category.id);
                      setAction("update");
                      setActionFor("category");
                    }}
                  >
                    <MdOutlineModeEdit />
                  </button>
                  <button
                    className="btn btn-danger btn-sm ml-1"
                    onClick={() => {
                      setIsCreateDetailUpdateView(true);
                      setId(category.id);
                      setAction("delete");
                      setActionFor("category");
                    }}
                  >
                    <RxCross2 />
                  </button>
                </td>
                {isMouseHover && (
                  <td className="text-end">
                    <button
                      className="btn btn-primary  btn-sm ml-1"
                      onClick={() => {
                        setIsCreateDetailUpdateView(true);
                        setId(category.id);
                        setAction("detail");
                        setActionFor("category");
                      }}
                    >
                      <GrView />
                    </button>
                    <button
                      className="btn btn-warning btn-sm mx-1"
                      onClick={() => {
                        setIsCreateDetailUpdateView(true);
                        setId(category.id);
                        setAction("update");
                        setActionFor("category");
                      }}
                    >
                      <MdOutlineModeEdit />
                    </button>
                    <button
                      className="btn btn-danger btn-sm ml-1"
                      onClick={() => {
                        setIsCreateDetailUpdateView(true);
                        setId(category.id);
                        setAction("delete");
                        setActionFor("category");
                      }}
                    >
                      <RxCross2 />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="">
          <p className="text-center text-secondary p-3">No Categories Yet</p>
        </div>
      )}
    </>
  );
}
