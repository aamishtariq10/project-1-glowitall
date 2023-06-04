import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const createBlogCategory = async (bcat) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.post(`${base_url}blogcategory/`, bcat, {
    headers: {

        "userToken": `${header}`
    }
      });

  return response.data;
};

const getBlogCategories = async () => {
  const response = await axios.get(`${base_url}blogcategory/`);

  return response.data;
};

const getBlogCategory = async (id) => {
  const response = await axios.get(`${base_url}blogcategory/${id}`);

  return response.data;
};

const updateCategory = async (blogCat) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.put(
    `${base_url}blogcategory/${blogCat.Id}`,
    { title: blogCat.blogCatData.title },
    {
      headers: {
  
          "userToken": `${header}`
      }
        }
  );
  return response.data;
};

const deleteCategory = async (id) => {
  const header = localStorage.getItem("userToken");
  const response = await axios.delete(`${base_url}blogcategory/${id}`, {
    headers: {

        "userToken": `${header}`
    }
      });

  return response.data;
};

const bCategoryService = {
  getBlogCategories,
  createBlogCategory,
  getBlogCategory,
  updateCategory,
  deleteCategory,
};

export default bCategoryService;
