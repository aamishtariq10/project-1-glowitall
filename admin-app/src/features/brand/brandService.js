import axios from "axios";
import {base_url} from "../../utils/base_url";
import {config} from "../../utils/axiosconfig";

const createBrand = async (brand) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.post(`${base_url}brand`, brand, {
    headers: {
        "userToken": header
    }
});
  return response.data;
};


const updateBrand = async (brand) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.put(
    `${base_url}brand/${brand.id}`,
    { title: brand.brandData.title },
    {
      headers: {
          "userToken": header
      }
  }
  );
  return response.data;
};

const getBrands = async () => {
  const response = await axios.get(`${base_url}brand/`);

  return response.data;
};

const getBrand = async (id) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.get(`${base_url}brand/${id}`, {
    headers: {
        "userToken": header
    }
});

  return response.data;
};


const deleteBrand = async (id) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.delete(`${base_url}brand/${id}`, {
    headers: {
        "userToken": header
    }
});

  return response.data;
};

const brandService = {

  createBrand,
  updateBrand,
  getBrands,
  getBrand,
  deleteBrand,
};

export default brandService;