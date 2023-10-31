import React, { useId } from "react";
import { Link } from "react-router-dom";

import { MdOutlineModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GrView } from "react-icons/gr";

export default function ShopProducts({ products }) {
  const uniqueId = useId();
  return (
    <>
      {products && products.length > 0 ? (
        <table>
          {/* <thead className="text-center">
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead> */}
          <tbody>
            {products.map((product, index) => (
              <tr key={`${uniqueId}_${index}`}>
                <td>
                  {product.category.name} - {product.sub_category.name} -{" "}
                  {product.product_name}
                </td>
                <td className="text-end">
                  <Link to="/" className="btn btn-primary btn-sm ml-1">
                    <GrView />
                  </Link>
                  <Link to="/" className="btn btn-warning btn-sm mx-1">
                    <MdOutlineModeEdit />
                  </Link>
                  <Link to="/" className="btn btn-danger btn-sm">
                    <RxCross2 />
                  </Link>
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
