import http from "./http";
import api from "./../api";
import { toast } from "react-toastify";
function setToken(token) {
  localStorage.setItem("token", token);
}

function setUserDetails(response) {
  if (response.token) setToken(response.token);
  if (response.username) localStorage.setItem("username", response.username);
  if (response.user_type) localStorage.setItem("user_type", response.user_type);
  if (response.user_type === "merchant" && response.merchant_id)
    localStorage.setItem("merchant_id", response.merchant_id);
}

async function signIn(credentials) {
  try {
    console.log("Started signIn");
    const res = await http.post(api.signIn, { ...credentials });
    console.log("Auth res : ", res);
    if (res) {
      setUserDetails(res);
    }
    toast.success("You're logged in.");
    return res;
  } catch (error) {
    console.log("Auth : Failed to login");
  }
}

async function signUp(credentials) {
  try {
    console.log("Started signUp");
    const res = await http.post(api.signUp, { ...credentials });
    console.log("Auth res : ", res);
    toast.success("Registration successful, You can login now!");
    return res;
  } catch (error) {
    console.log("Auth : Failed to login");
  }
}

function signOut() {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
    localStorage.removeItem("username");
    localStorage.removeItem("merchant_id");
  } catch (error) {
    alert(`Error in SignOut : ${error}`);
  }
}

export default { signIn, signUp, signOut };
