import axios from "axios";
import { base_url } from "../../utils/base_url";


  // Retrieve the token from local storage and return it
  // Implement your logic to retrieve the token here



  const login = async (userData) => {
    const response = await axios.post(`${base_url}user/admin-login`, userData);
    if(response.data){
        localStorage.setItem("userToken",JSON.stringify(response.data.userToken))
        return response.data;
    }
}

const getOrders = async () => {
  const response = await axios.get(`${base_url}/user/getallorders`, );
  return response.data;
};


const getOrder = async (id) => {
  const response = await axios.post(
    `${base_url}user/getorderbyuser/${id}`,
    "",
    
  );
  return response.data;
};

const authService = {
  login,
  getOrders,
  getOrder,
};

export default authService;
