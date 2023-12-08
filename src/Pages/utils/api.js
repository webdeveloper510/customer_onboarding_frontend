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

// users/token
export const usertoken = async () => {
  const response = await Axios.get(`/users/token`, {
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

// users/bankCertificate
export const userbankCertificate = async (data) => {
  console.log("dataaaaaaaaaaaaaaa", data)
  const response = await Axios.post(`/users/representative`, data, {
    headers: {
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


export const userUploadDeed = async (data) => {
  console.log("dataaaaaaaaaaaaaaa", data)
  const response = await Axios.post(`/users/deed`, data, {
    headers: {
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

// users/vat
export const userUploadVat = async (data) => {
  console.log("dataaaaaaaaaaaaaaa", data)
  const response = await Axios.post(`/users/vat`, data, {
    headers: {
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

// users/annualAccounts
export const userannualAccounts = async (data) => {
  console.log("dataaaaaaaaaaaaaaa",data)
  const response = await Axios.post(`/users/annualAccounts`,data, {
    headers: {
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


export const userNaturalKyc = async (data) => {
  console.log("dataaaaaaaaaaaaaaa", data)
  const response = await Axios.post(`/users/naturalKyc`, data, {
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

export const userlegalKyc = async (data) => {
  console.log("dataaaaaaaaaaaaaaa", data)
  const response = await Axios.post(`/users/legalKyc`, data, {
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