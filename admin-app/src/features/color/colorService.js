import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";


const createColor = async(color) =>{
const header = localStorage.getItem("userToken");

    const response = await axios.post(`${base_url}color/`, color,{
      headers: {

          "userToken": `${header}`
      }
        });
   return response.data;
};

const updateColor = async (color) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.put(
    `${base_url}color/${color.id}`,
    { title: color.colorData.title },
    {
      headers: {

          "userToken": `${header}`
      }
        }
  );
  return response.data;
};

const getColors = async() =>{
    const response = await axios.get(`${base_url}color/`); //change in others if error/
   
   return response.data;
};

const getColor = async (id) => {
  const response = await axios.get(`${base_url}color/${id}`);

  return response.data;
};

const deleteColor = async (id) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.delete(`${base_url}color/${id}`, {
    headers: {

        "userToken": `${header}`
    }
      });

  return response.data;
};

const colorService ={
    getColors,
    getColor,
    createColor,
    updateColor,
    deleteColor
};

export default colorService;