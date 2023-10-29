function merchantCategories() {
  return [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
  ];
}
function merchantSubCategories() {
  return [
    { id: 1, name: "Sub Category 1", category: "Category 1" },
    { id: 2, name: "Sub Category 2", category: "Category 2" },
    { id: 3, name: "Sub Category 3", category: "Category 3" },
    { id: 4, name: "Sub Category 4", category: "Category 4" },
  ];
}
function merchantProducts() {
  return [
    {
      id: 1,
      subCategory: "Sub Category 1",
      category: "Category 1",
      name: "Product 1",
    },
    {
      id: 2,
      subCategory: "Sub Category 2",
      category: "Category 2",
      name: "Product 2",
    },
    {
      id: 3,
      subCategory: "Sub Category 3",
      category: "Category 3",
      name: "Product 3",
    },
    {
      id: 4,
      subCategory: "Sub Category 4",
      category: "Category 4",
      name: "Product 4",
    },
    {
      id: 5,
      subCategory: "Sub Category 5",
      category: "Category 5",
      name: "Product 5",
    },
  ];
}

export default { merchantCategories, merchantSubCategories, merchantProducts };
