import http from "./http";
import api from "./../api";

async function getLiveProducts() {
  const res = await http.get(`${api.liveProducts}`);
  console.log("getLiveProducts => res :: ", res);
  return res;
}

async function getLiveCategories() {
  const res = await http.get(`${api.liveCategories}`);
  console.log("getLiveCategories => res :: ", res);
  return res;
}

async function getLiveSubCategories() {
  const res = await http.get(`${api.liveSubCategories}`);
  console.log("getLiveSubCategories => res :: ", res);
  return res;
}

export default {
  getLiveProducts,
  getLiveCategories,
  getLiveSubCategories,
};
