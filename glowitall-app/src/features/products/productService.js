import axios from 'axios';
import { base_url, config } from '../../utils/axiosConfig';
import { toast } from 'react-toastify';


const getProducts = async (data) => {
    console.log(data);
    const response = await axios.get(`${base_url}product?${data?.brand?`brand=${data?.brand}&&`:""}${data?.tag?`tags=${data?.tag}&&`:""}${data?.category?`category=${data?.category}&&`:""}`);
    if(response.data){
        return response.data;
    }
}

const getSingleProduct = async (id) => {
    const response = await axios.get(`${base_url}product/${id}`);
    if(response.data){
        return response.data;
    }
}

const addToWishlist = async (prodId) => {
    const header = localStorage.getItem("userToken");
const response = await axios.put(`${base_url}product/wishlist`,{prodId},{
    headers: {
        "userToken": header
    }
});
    if(response.data){
        toast.success("Product Added To wishlist")
        return response.data;
    }

}

const rateProduct = async (data) => {
    const header = localStorage.getItem("userToken");
    const response = await axios.put(`${base_url}product/rating`, data,{
        headers: {
            "userToken": header
        }
        });
    if(response.data){
        return response.data;
    }
}

export const productService = {
    getProducts,
    getSingleProduct,
    addToWishlist,
    rateProduct,
}