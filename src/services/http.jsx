import axios from "axios";
import { toast } from "react-toastify";
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && token !== null && token !== undefined && token !== "")
      // if (token)
      config.headers.Authorization = `Token ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else if (response.status >= 400 || response.status < 500) {
      alert("something went wrong!");
    } else {
      alert("Error in axios interceptor response : ", response.status);
    }
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 400) {
        // Handle 400 Bad Request errors here
        // You can log the error, display a message, or perform other actions.
        console.error(
          "Bad Request Error = : ",
          // error.response.data,
          error.response.data.data
        );
        toast.error(error.response.data.data);
      } else if (error.response.status === 401) {
        // Handle 400 Bad Request errors here
        // You can log the error, display a message, or perform other actions.
        console.error(
          "UnAuthorized= : ",
          // error.response.data,
          error.response.data.data
        );
        toast.error(error.response.data.detail);
        return;
      } else if (error.response.status === 404) {
        // Handle 400 Bad Request errors here
        // You can log the error, display a message, or perform other actions.
        console.error(
          "Not Found  = : ",
          // error.response.data,
          error.response.data.data
        );
        toast.error(error.response.data.data);
      }

      // Pass the error response to the next catch block
      // throw error.response;
    }
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  update: axios.update,
};
