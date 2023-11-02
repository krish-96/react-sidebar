import http from "./http";
import api from "./../api";
import { toast } from "react-toastify";

async function getMerchantCategories() {
  const res = await http.get(api.category);
  console.log("res ::: ", res);

  return res;
}

async function getMerchantSubCategories() {
  const res = await http.get(api.subcategory);
  console.log("res ::: ", res);
  return res;
}

async function getMerchantProducts() {
  const res = await http.get(api.product);
  console.log("res ::: ", res);
  return res;
}

async function getCategory(id) {
  const res = await http.get(`${api.category}${id}`);
  console.log("getCategory => res :: ", res);
  return res;
}

async function createCategory(categoryData) {
  const res = await http.post(api.category, categoryData);
  console.log("createCategory => res :: ", res);
  if (res) toast.success("Category created successfully");
  return res;
}

async function updateCategory(categoryData, id) {
  const res = await http.update(`${api.category}${id}/`, categoryData);
  console.log("createCategory => res :: ", res);
  if (res) toast.success("Category updated successfully");
  return res;
}

async function deleteCategory(id) {
  const res = await http.delete(`${api.category}${id}/`);
  console.log("createCategory => res :: ", res);
  if (res) toast.success("Category deleted successfully");
  return res;
}

async function getSubCategory(id) {
  const res = await http.get(`${api.subcategory}${id}`);
  console.log("getSubCategory => res :: ", res);
  return res;
}

async function getProduct(id) {
  const res = await http.get(`${api.product}${id}`);
  console.log("getProduct => res :: ", res);
  return res;
}

export default {
  getMerchantCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getMerchantSubCategories,
  getMerchantProducts,
  getProduct,
  getSubCategory,
};
