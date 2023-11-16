import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "./category";
import ProductsList from "./productsList";
import userService from "./../services/user";
import authCheck from "./../utils/auth";

export const ProductsContext = createContext();
console.log("ProductsContext==> ", ProductsContext);

export default function Products() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);

  const data = "Gopi";
  console.log("searchProduct : ", searchProduct);
  useEffect(() => {
    // if (!token) navigate("/signin", { replace: true });
    // else {
    async function fetchData() {
      const productsData = await userService.getLiveProducts();
      console.log("ProductsList Products ::: ", productsData);
      setProducts(productsData);
    }
    fetchData();
    // }
  }, []);

  // if (!token) return;

  return (
    <>
      <ProductsContext.Provider value={{ user: "Krish", age: 27 }}>
        <h1 className="text-center">
          Products {selectedCategory ? `(${selectedCategory})` : ""}
        </h1>
        <div className="row m-4">
          <div className="col-xs-6 col-sm-6  col-md-4  col-lg-3">
            <Categories
              selectCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchProduct={searchProduct}
              setSearchProduct={setSearchProduct}
              totalProducts={totalProducts}
            />
          </div>
          <div className="col-xs-6  col-sm-6  col-md-8 col-lg-9">
            <ProductsList
              selectedCategory={selectedCategory}
              searchProduct={searchProduct}
              setTotalProducts={setTotalProducts}
              setProducts={setProducts}
              products={products}
            />
          </div>
        </div>
      </ProductsContext.Provider>
    </>
  );
}
