import React, { useState, createContext } from "react";
import Categories from "./category";
import ProductsList from "./productsList";

export const ProductsContext = createContext();
console.log("ProductsContext==> ", ProductsContext);
export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const data = "Gopi";
  console.log("searchProduct : ", searchProduct);

  return (
    <>
      <ProductsContext.Provider value={{ user: "Krish", age: 27 }}>
        <h1 className="text-center">
          Products {selectedCategory ? `(${selectedCategory})` : ""}
        </h1>
        <div className="row container">
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
        {/* <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </ProductsContext.Provider>
    </>
  );
}
