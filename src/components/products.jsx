import React from "react";
import Categories from "./category";
import ProductsList from "./productsList";

export default function Products() {
  return (
    <>
      <h1 className="text-center">Products</h1>
      <div className="row container">
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <Categories />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <ProductsList />
        </div>
      </div>
      <nav aria-label="Page navigation example">
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
      </nav>
    </>
  );
}
