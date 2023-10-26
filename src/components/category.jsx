import React, { useId } from "react";
import {
  MdCategory,
  MdOutlineKitchen,
  MdOutlineElectricalServices,
  MdOutlineChair,
} from "react-icons/md";

import { GiClothes } from "react-icons/gi";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

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

function Categories({ selectedCategory, setSelectedCategory }) {
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
        <h4 className="text-center pb-3 border-bottom">Available Categories</h4>
        {categoriesData.map((category, index) => (
          <a
            className={formatClass(category)}
            onClick={() => {
              console.log(category.name, "  selected");
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
