import React, { useState, useId } from "react";
import ProductsList from "./productsList";
// import

const categoriesData = [
  {
    name: "All categories",
    icon: "icon 1",
  },
  {
    name: "Home Appliances",
    icon: "icon 2",
  },
  {
    name: "Electrics / Electronics",
    icon: "icon 3",
  },
  {
    name: "Furniture",
    icon: "icon 4",
  },
  {
    name: "Clothing",
    icon: "icon 5",
  },
  {
    name: "Others",
    icon: "icon 6",
  },
];

function Categories() {
  const newUniqueId = useId();
  const [currentCategory, setCurrentCategory] = useState("");

  return (
    <>
      {/* <div className="text-center">Categories</div> */}

      <div className="list-group" id="list-tab" role="tablist">
        <h4 className="text-center text-warning pb-3 border-bottom">
          Available Categories
        </h4>
        {categoriesData.map((category, index) => (
          //   <li key={`${newUniqueId}-${index}`}>{category.name}</li>
          <a
            // className="list-group-item list-group-item-action active"
            className={
              currentCategory === toString(category.name)
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            onClick={() => {
              setCurrentCategory(category.name);
            }}
            id="list-home-list"
            data-bs-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="list-home"
            key={`${newUniqueId}-${index}`}
          >
            {category.name}
          </a>
        ))}
      </div>
    </>
  );
}

export default Categories;
