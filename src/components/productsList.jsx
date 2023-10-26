import React, { useId, useMemo } from "react";
import { Link } from "react-router-dom";
import { MdInfoOutline } from "react-icons/md";
const existingProducts = [
  {
    productNumber: "1",
    productName: "Kitchen Blender",
    productPrice: 49.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Home Appliances",
    productDescription:
      "Effortlessly prepare smoothies and shakes with this powerful kitchen blender. It's easy to use and clean, making it a must-have in your kitchen.",
  },
  {
    productNumber: "2",
    productName: "Smartphone",
    productPrice: 299.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Electrics / Electronics",
    productDescription:
      "Stay connected with the latest smartphone technology. Featuring a stunning display, high-performance processor, and advanced camera capabilities.",
  },
  {
    productNumber: "3",
    productName: "Leather Sofa",
    productPrice: 799.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Furniture",
    productDescription:
      "Add elegance to your living room with this luxurious leather sofa. Its ergonomic design and premium materials ensure both comfort and style.",
  },
  {
    productNumber: "4",
    productName: "Denim Jeans",
    productPrice: 39.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Clothing",
    productDescription:
      "Upgrade your wardrobe with these classic denim jeans. They offer a perfect fit, durability, and timeless fashion appeal.",
  },
  {
    productNumber: "5",
    productName: "Garden Tools Set",
    productPrice: 69.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Others",
    productDescription:
      "Nurture your garden with this comprehensive garden tools set. It includes everything you need for gardening, from planting to pruning.",
  },
  {
    productNumber: "6",
    productName: "Coffee Maker",
    productPrice: 79.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Home Appliances",
    productDescription:
      "Brew your favorite coffee at home with this efficient coffee maker. It offers multiple brewing options and easy maintenance.",
  },
  {
    productNumber: "7",
    productName: "Wireless Earbuds",
    productPrice: 59.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Electrics / Electronics",
    productDescription:
      "Enjoy immersive audio with these wireless earbuds. They feature noise cancellation and a comfortable, secure fit.",
  },
  {
    productNumber: "8",
    productName: "Modern Dining Table",
    productPrice: 349.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Furniture",
    productDescription:
      "Upgrade your dining area with this sleek and modern dining table. It's perfect for family gatherings and dinner parties.",
  },
  {
    productNumber: "9",
    productName: "Summer Dress",
    productPrice: 29.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Clothing",
    productDescription:
      "Step into summer with this fashionable summer dress. It's lightweight, comfortable, and available in vibrant colors.",
  },
  {
    productNumber: "10",
    productName: "Outdoor Grill",
    productPrice: 199.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Others",
    productDescription:
      "Host a perfect barbecue with this outdoor grill. It's equipped with various cooking features for your grilling needs.",
  },
  {
    productNumber: "11",
    productName: "Vacuum Cleaner",
    productPrice: 89.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Home Appliances",
    productDescription:
      "Effortlessly clean your home with this powerful vacuum cleaner. It offers advanced filtration and easy maneuverability.",
  },
  {
    productNumber: "12",
    productName: "Smart Watch",
    productPrice: 129.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Electrics / Electronics",
    productDescription:
      "Stay connected and monitor your health with this feature-rich smartwatch. It tracks your fitness and provides notifications.",
  },
  {
    productNumber: "13",
    productName: "Cozy Sofa Set",
    productPrice: 999.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Furniture",
    productDescription:
      "Create a comfortable living space with this cozy sofa set. It includes a sofa, loveseat, and armchair for ultimate relaxation.",
  },
  {
    productNumber: "14",
    productName: "Athletic Shoes",
    productPrice: 49.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Clothing",
    productDescription:
      "Stay active with these athletic shoes. They provide excellent support, cushioning, and durability for your workouts.",
  },
  {
    productNumber: "15",
    productName: "Camping Gear Bundle",
    productPrice: 159.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Others",
    productDescription:
      "Get ready for your outdoor adventures with this comprehensive camping gear bundle. It includes a tent, sleeping bag, and more.",
  },
  {
    productNumber: "16",
    productName: "Refrigerator",
    productPrice: 599.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Home Appliances",
    productDescription:
      "Store your food with ease in this spacious refrigerator. It features adjustable shelving and energy-saving technology.",
  },
  {
    productNumber: "17",
    productName: "Noise-Canceling Headphones",
    productPrice: 149.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Electrics / Electronics",
    productDescription:
      "Experience premium audio quality with these noise-canceling headphones. They offer long battery life and comfort for extended use.",
  },
  {
    productNumber: "18",
    productName: "Vintage Bookshelf",
    productPrice: 279.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Furniture",
    productDescription:
      "Add a touch of nostalgia with this vintage bookshelf. It's perfect for displaying your book collection and collectibles.",
  },
  {
    productNumber: "19",
    productName: "Winter Jacket",
    productPrice: 79.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Clothing",
    productDescription:
      "Stay warm in style with this winter jacket. It's insulated, water-resistant, and designed to keep you cozy in cold weather.",
  },
  {
    productNumber: "20",
    productName: "Toolbox Set",
    productPrice: 49.99,
    productImage: "https://picsum.photos/200/300",
    productCategory: "Others",
    productDescription:
      "Complete your DIY projects with this toolbox set. It includes a variety of essential tools for your home improvement tasks.",
  },
];

export default function ProductsList({ selectedCategory }) {
  const newUniqueId = useId();

  // function filterProducts() {
  //   if (selectedCategory === "" || selectedCategory === "All categories") {
  //     return existingProducts;
  //   } else {
  //     return existingProducts.filter(
  //       (product) => product.productCategory === selectedCategory
  //     );
  //   }
  // }
  // const filteredProducts = filterProducts();
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "" || selectedCategory === "All categories") {
      return existingProducts;
    } else {
      return existingProducts.filter(
        (product) => product.productCategory === selectedCategory
      );
    }
  }, [selectedCategory]);

  console.log("filteredProducts => :", filteredProducts);
  return (
    <>
      {filteredProducts && filteredProducts.length >= 1 ? (
        <div className="row">
          {filteredProducts.map((product, index) => {
            return (
              <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
                key={`${newUniqueId}-${index}`}
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img src={product.productImage} alt="" />
                  <div className="card-body">
                    <div className="card-title">
                      <span className="text-normal">
                        {" "}
                        {product.productName}{" "}
                      </span>{" "}
                      <br />
                      <span className="text-normal"> in </span>
                      <span>{product.productCategory}</span>
                    </div>
                    <p className="card-text">{product.productDescription}</p>
                    <Link
                      to={`/product/${product.productNumber}`}
                      className="btn btn-primary btn-sm"
                    >
                      <MdInfoOutline fontSize={"24"} />
                      See full details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="row text-center" style={{ height: "500px" }}>
          <div className="col-12 mx-auto  my-auto " key={`${newUniqueId}`}>
            <div className="h5 text-secondary ">
              Currently No products available{" "}
              {selectedCategory
                ? `under the selected category:  ${selectedCategory}`
                : " "}
            </div>
          </div>
        </div>
      )}
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
