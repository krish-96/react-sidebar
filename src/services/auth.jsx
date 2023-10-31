import http from "./http";
import api from "./../api";

function setToken(token) {
  localStorage.setItem("token", token);
}

async function signIn(credentials) {
  try {
    console.log("Started signIn");
    const res = await http.post(api.signIn, { ...credentials });
    //   if (res && res.statusCode === 200)
    console.log("Auth res : ", res);
    //   if (res && res.statusCode === 200)
    if (res) setToken(res.token);
    return res;
  } catch (error) {
    console.log("Auth : Failed to login");
  }
}

export default { signIn };
