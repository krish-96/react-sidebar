import React, { useId } from "react";

import { MdOutlineModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GrView } from "react-icons/gr";

export default function ShopProducts({ products }) {
  const uniqueId = useId();
  return (
    <>
      {products && products.length > 0 ? (
        <ul style={{ listStyle: "none" }}>
          {products.map((product, index) => (
            <li key={`${uniqueId}_${index}`} className="mb-1">
              {product.category} - {product.subCategory} - {product.name}{" "}
              <span className="btn btn-primary btn-sm ml-1">
                <GrView />
              </span>
              <span className="btn btn-warning btn-sm mx-1">
                <MdOutlineModeEdit />
              </span>
              <span className="btn btn-danger btn-sm">
                <RxCross2 />
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="">
          <p className="text-center text-secondary p-3">No Products Yet</p>
        </div>
      )}
    </>
  );
}
