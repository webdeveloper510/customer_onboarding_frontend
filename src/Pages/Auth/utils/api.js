import Axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
Axios.defaults.baseURL = API_URL;
let token = localStorage.getItem("token");

export const userLogin = async (data) => {
    const response = await Axios.post(`/admin/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log("USER-LOGIN", error);
      });
      return response
  };