const BASE_URL = "http://localhost:9999/";

const api = {
  signIn: BASE_URL + "api/accounts/user/user_login/",
  category: BASE_URL + "api/product/category/",
  categoryDetails: BASE_URL + "api/product/category/{:id}/",
  subcategory: BASE_URL + "api/product/subcategory/",
  subcategoryDetails: BASE_URL + "api/product/subcategory/{:id}/",
  product: BASE_URL + "api/product/product/",
  productDetails: BASE_URL + "api/product/product/{:id}/",
};

export default api;
