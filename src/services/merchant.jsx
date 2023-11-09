import http from "./http";
import api from "./../api";
import { toast } from "react-toastify";

async function getMerchantCategories() {
  const res = await http.get(api.category);
  console.log("get Mer Cats ::: ", res);
  return res;
}

async function getMerchantSubCategories() {
  const res = await http.get(api.subcategory);
  console.log("get Mer subCats ::: ", res);
  return res;
}

async function getMerchantProducts() {
  const res = await http.get(api.product);
  console.log("get Mer Prods ::: ", res);
  return res;
}

async function getCategory(id) {
  const res = await http.get(`${api.category}${id}`);
  console.log("getCategory => res :: ", res);
  return res;
}

async function createCategory(categoryData) {
  const res = await http.post(api.category, categoryData);
  console.log("create categoty => res :: ", res);
  if (res) toast.success("Category created successfully");
  return res;
}

async function updateCategory(categoryData, id) {
  const res = await http.update(`${api.category}${id}/`, categoryData);
  console.log("update categoty => res :: ", res);
  if (res) toast.success("Category updated successfully");
  return res;
}

async function deleteCategory(id) {
  const res = await http.delete(`${api.category}${id}/`);
  console.log("delete categoty => res :: ", res);
  if (res) toast.success("Category deleted successfully");
  return res;
}

async function getSubCategory(id) {
  const res = await http.get(`${api.subcategory}${id}`);
  console.log("getSubCategory => res :: ", res);
  return res;
}

async function createSubCategory(categoryData) {
  const res = await http.post(api.subcategory, categoryData);
  console.log("create sub category => res :: ", res);
  if (res) toast.success("Sub Category created successfully");
  return res;
}

async function updateSubCategory(categoryData, id) {
  const res = await http.update(`${api.subcategory}${id}/`, categoryData);
  console.log("update sub cat => res :: ", res);
  if (res) toast.success("Sub Category updated successfully");
  return res;
}

async function deleteSubCategory(id) {
  const res = await http.delete(`${api.subcategory}${id}/`);
  console.log("delete subcat  => res :: ", res);
  if (res) toast.success("Sub Category deleted successfully");
  return res;
}

async function getProduct(id) {
  const res = await http.get(`${api.product}${id}`);
  console.log("getProduct => res :: ", res);
  return res;
}

async function createProduct(categoryData) {
  const res = await http.post(api.product, categoryData);
  console.log("create Product => res :: ", res);
  if (res) toast.success("Product created successfully");
  return res;
}

async function updateProduct(categoryData, id) {
  const res = await http.update(`${api.product}${id}/`, categoryData);
  console.log("update Product => res :: ", res);
  if (res) toast.success("Product updated successfully");
  return res;
}

async function deleteProduct(id) {
  const res = await http.delete(`${api.product}${id}/`);
  console.log("delete Product => res :: ", res);
  if (res) toast.success("Product deleted successfully");
  return res;
}

export default {
  getMerchantCategories,
  getMerchantSubCategories,
  getMerchantProducts,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getSubCategory,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
