import http from "./http";
import api from "./../api";

async function merchantCategories() {
  const res = await http.get(api.category);
  console.log("res ::: ", res);

  return res;
}

async function merchantSubCategories() {
  const res = await http.get(api.subcategory);
  console.log("res ::: ", res);
  return res;
}

async function merchantProducts() {
  const res = await http.get(api.product);
  console.log("res ::: ", res);
  return res;
}

export default { merchantCategories, merchantSubCategories, merchantProducts };
