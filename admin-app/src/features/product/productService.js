import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";



const getProducts = async () => {
    const response = await axios.get(`${base_url}product/`);

    return response.data;
};

const createProducts = async (data) => {
    const tok = localStorage.getItem("userToken");
    const token = JSON.parse(tok)
    const response = await axios.post(`${base_url}product/`,data, {
        headers: {
            "userToken": token
        }
    });
    return response.data;
};
const productService = {
    getProducts,
    createProducts
};

export default productService;