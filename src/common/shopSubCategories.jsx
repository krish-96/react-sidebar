import React, { useId } from "react";

import { MdOutlineModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GrView } from "react-icons/gr";

export default function ShopSubCategories({ subCategories }) {
  const uniqueId = useId();
  return (
    <>
      {subCategories && subCategories.length > 0 ? (
        <ul style={{ listStyle: "none" }}>
          {subCategories.map((subCategory, index) => (
            <li key={`${uniqueId}_${index}`} className="mb-1">
              {subCategory.category} - {subCategory.name}{" "}
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
          <p className="text-center text-secondary p-3">
            No Sub Categories Yet
          </p>
        </div>
      )}
    </>
  );
}
