import http from "./http";
import api from "./../api";

async function getLiveProducts() {
  const res = await http.get(`${api.liveProducts}`);
  console.log("getLiveProducts => res :: ", res);
  return res;
}

async function getLiveCategories() {
  const res = await http.get(`${api.category}`);
  console.log("getLiveProducts => res :: ", res);
  return res;
}

export default {
  getLiveProducts,
  getLiveCategories,
};
