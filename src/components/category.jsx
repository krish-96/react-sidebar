import React, { useId } from "react";
import {
  MdCategory,
  MdOutlineKitchen,
  MdOutlineElectricalServices,
  MdOutlineChair,
} from "react-icons/md";

import user from "./../services/user";

import { GiClothes } from "react-icons/gi";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

async function formatCategories() {
  const categories = await user.getLiveCategories();
  console.log("Live categories : ", categories);
  return categories;
}

const categoriesData = [
  {
    name: "All categories",
    icon: <MdCategory />,
  },
  {
    name: "Home Appliances",
    icon: <MdOutlineKitchen />,
  },
  {
    name: "Electrics / Electronics",
    icon: <MdOutlineElectricalServices />,
  },
  {
    name: "Furniture",
    icon: <MdOutlineChair />,
  },
  {
    name: "Clothing",
    icon: <GiClothes />,
  },
  {
    name: "Others",
    icon: <PiDotsThreeOutlineFill />,
  },
  {
    name: "Others1",
    icon: <PiDotsThreeOutlineFill />,
  },
];

function Categories({
  selectedCategory,
  setSelectedCategory,
  searchProduct,
  setSearchProduct,
  totalProducts,
}) {
  const newUniqueId = useId();
  function formatClass(category) {
    if (selectedCategory === "" && category.name === "All categories")
      return "list-group-item list-group-item-action bg-primary";
    return category.name === selectedCategory
      ? "list-group-item list-group-item-action active"
      : "list-group-item list-group-item-action";
  }

  return (
    <>
      <div className="list-group" id="list-tab" role="tablist">
        <div className="h5">Seach by Product</div>
        <input
          type="text"
          onChange={(e) => {
            setSelectedCategory("");
            setSearchProduct(e.currentTarget.value);
          }}
          value={searchProduct}
          className="form-control my-2 px-2 text-success"
        />
        {/* {(searchProduct || selectedCategory) && totalProducts > 0 && (
          <div className="my-2">Total Products : {totalProducts}</div>
        )} */}
        {totalProducts > 0 && (
          <div className="my-2">Total Products : {totalProducts}</div>
        )}
        <div className="h5">Seach by Category</div>
        {categoriesData.map((category, index) => (
          <a
            className={formatClass(category)}
            onClick={() => {
              console.log(category.name, "  selected");
              setSearchProduct("");
              setSelectedCategory(category.name);
            }}
            // id="list-home-list"
            data-bs-toggle="list"
            href="#list-home"
            // role="tab"
            // aria-controls="list-home"
            key={`${newUniqueId}-${index}`}
          >
            {category.icon} {category.name}
          </a>
        ))}
      </div>
    </>
  );
}

export default Categories;
