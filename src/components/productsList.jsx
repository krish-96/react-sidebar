import React, { useId } from "react";
import { Link } from "react-router-dom";

const existingProducts = [
  {
    productNumber: 1,
    productName: "Product 1",
    productPrice: 1000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
  {
    productNumber: 2,
    productName: "Product 2",
    productPrice: 2000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
  {
    productNumber: 3,
    productName: "Product 3",
    productPrice: 3000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
  {
    productNumber: 4,
    productName: "Product 4",
    productPrice: 4000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
  {
    productNumber: 5,
    productName: "Product 5",
    productPrice: 5000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
  {
    productNumber: 6,
    productName: "Product 6",
    productPrice: 6000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
  {
    productNumber: 7,
    productName: "Product 7",
    productPrice: 7000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
  {
    productNumber: 8,
    productName: "Product 8",
    productPrice: 8000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
  {
    productNumber: 9,
    productName: "Product 9",
    productPrice: 9000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
  {
    productNumber: 10,
    productName: "Product 10",
    productPrice: 10000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
  {
    productNumber: 11,
    productName: "Product 11",
    productPrice: 11000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
  {
    productNumber: 12,
    productName: "Product 12",
    productPrice: 12000,
    productImage: "https://picsum.photos/200/300",
    productDescription:
      "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.",
  },
];

export default function ProductsList() {
  const newUniqueId = useId();
  return (
    <>
      <div className="row">
        {existingProducts.map((product, index) => {
          return (
            <div className="col" key={`${newUniqueId}-${index}`}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={product.productImage} alt="" />
                <div className="card-body">
                  <div className="card-title">{product.productName}</div>
                  <p className="card-text">{product.productDescription}</p>
                  <Link
                    to={`/product/${product.productNumber}`}
                    className="btn btn-primary btn-sm"
                  >
                    See full details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function getProduct(productNumber) {
  return existingProducts.find((eProduct) => {
    console.log(
      "eProduct.productNumber ",
      eProduct.productNumber,
      productNumber
    );
    return eProduct.productNumber === parseInt(productNumber) && eProduct;
  });
}
