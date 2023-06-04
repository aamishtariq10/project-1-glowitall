import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    return response.data;
  }
};
const verifyOTP = async (userData) => {
  const response = await axios.post(`${base_url}user/verifyotp`, userData);
  if (response.data) {
    return response.data;
  }
};
const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
     localStorage.setItem("userToken", JSON.stringify(response.data.userToken));
    return response.data;
  }
};
const getUserWishlist = async () => {
  const header = localStorage.getItem("userToken");
  const response = await axios.get(`${base_url}user/wishlist`, {
    headers: {
      userToken: header,
    },
  });
  if (response.data) {
    return response.data;
  }
};
const addToCart = async (cartData) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.post(`${base_url}user/cart`, cartData, {
    headers: {
      userToken: header,
    },
  });
  if (response.data) {
    return response.data;
  }
};

const getCart = async () => {
  const header = localStorage.getItem("userToken");
  const response = await axios.get(`${base_url}user/cart`, {
    headers: {
      userToken: header,
    },
  });
  if (response.data) {
    return response.data;
  }
};

const removeProductFromCart = async (cartItemId) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${cartItemId}`,
    {
      headers: {
        userToken: `${header}`,
      },
    }
  );
  if (response.data) {
    return response.data;
  }
};

const updateProductFromCart = async (cartDetail) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.delete(
    `${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.newQuantity}`,
    {
      headers: {
        userToken: `${header}`,
      },
    }
  );
  if (response.data) {
    return response.data;
  }
};

const createOrder = async (orderDetail) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    orderDetail,
    {
      headers: {
        userToken: `${header}`,
      },
    }
  );
  if (response.data) {
    return response.data;
  }
};

const getUserOrders = async () => {
  const response = await axios.get(`${base_url}user/getmyorders`, config);
  if (response.data) {
    return response.data;
  }
};

const updateUser = async (data) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.put(`${base_url}user/edit-user`, data, {
    headers: {
      userToken: `${header}`,
    },
  });

  if (response.data) {
    return response.data;
  }
};

const forgotPassToken = async (data) => {
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data
  );
  if (response.data) {
    return response.data;
  }
};

const resetPass = async (data) => {
  const response = await axios.put(
    `${base_url}user/reset-password/${data.token}`,
    { password: data?.password }
  );
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
  getUserOrders,
  createOrder,
  updateUser,
  verifyOTP,
  forgotPassToken,
  resetPass,
};