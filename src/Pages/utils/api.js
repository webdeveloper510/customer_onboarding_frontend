import Axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
Axios.defaults.baseURL = API_URL;
let token = localStorage.getItem("token");

export const userRegister = async (data) => {
    const response = await Axios.post(`/users/register`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error?.response;
      });
      return response
};


export const userLogin = async (data) => {
  const response = await Axios.post(`/users/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      token = res.data.token
      return res;
    })
    .catch((error) => {
      return error?.response;
    });
    return response
};


export const userNatural = async (data) => {
  console.log("dataaaaaaaaaaaaaaa", data)
  const response = await Axios.post(`/users/natural`, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error?.response;
    });
    return response
};

export const userLegal = async (data) => {
  console.log("dataaaaaaaaaaaaaaa", data)
  const response = await Axios.post(`/users/legal`, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error?.response;
    });
    return response
};