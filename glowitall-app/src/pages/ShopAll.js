import React, { useState, useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import Container from "../components/Container";
import { TfiLayoutColumn4 } from "react-icons/tfi";
import { TfiLayoutColumn3 } from "react-icons/tfi";
import { TfiLayoutColumn2 } from "react-icons/tfi";
import { Link } from "react-router-dom";
import FaceMakeupCard from "../components/FaceMakeupCard";
import EyesMakeupCard from "../components/EyesMakeupCard";
import LipsMakeupCard from "../components/LipsMakeupCard";
import FaceSkincareCard from "../components/FaceSkincareCard";
import EyesSkincareCard from "../components/EyesSkincareCard";
import LipsSkincareCard from "../components/LipsSkincareCard";
import BodySkincareCard from "../components/BodySkincareCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
} from "../features/products/productSlice";
import {
  fetchAllProductsFromLipsSkincare,
} from "../features/lipsSkincareProducts/lipsSkincareProductSlice";
import {
  fetchAllProducts,
} from "../features/eyesSkincareProducts/eyesSkincareProductSlice";

const ShopAll = () => {
  const productState = useSelector((state) => state?.product?.product);
  const products = useSelector((state) => state?.eyesSkincareProduct?.product);
  const lipsskincareproducts = useSelector(
    (state) => state?.lipsSkincareProduct?.lipsskincareproducts
  );
  const [grid, setGrid] = useState(3);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [brand, setBrand] = useState(null);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newtags = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      newBrands.push(element.brand);
      category.push(element.category);
      newtags.push(element.tags);
    }
    setBrands(newBrands);
    setCategories(category);
    setTags(newtags);
  }, [productState]);

  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category]);

  const dispatch = useDispatch();

  const getProducts = () => {
    dispatch(getAllProducts({ sort, tag, brand, category }));
    dispatch(fetchAllProducts({ sort, tag, brand, category }));
    dispatch(
      fetchAllProductsFromLipsSkincare({ sort, tag, brand, category })
    );
  };

  console.log([...new Set(brands)], [...new Set(categories)], [...new Set(tag)]);
  console.log(sort);

  return (
    <>
      <Meta title={"Shop All"} />
      <BreadCrumb title="Shop All" />

      <Container class1="store-wrapper home-wrapper-2 py-1">
        <div className="row">
          <div className="col-12">
            <div className="mb-2">
              <img
                src="Images/shopall.jpg"
                alt="ShopAll"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                {
                  categories && [...new Set(categories)].map((item,index)=>{
                      return <li key={index} onClick={()=>setCategory(item)}>{item}</li>
                  })
                }
                </ul>
              </div>
            </div>

            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">

                {
                  tags && [...new Set(tags)].map((item,index)=>{
                      return (<span 
                              onClick={()=>setTag(item)} 
                              key={index} 
                              className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3" >
                              {item}</span>)
                  })
                }
                </div>
              </div>
            </div>

            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Brands</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">

                {
                  brands && [...new Set(brands)].map((item,index)=>{
                      return (<span 
                              onClick={()=>setBrands(item)} 
                              key={index} 
                              className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3" >
                              {item}</span>)
                  })
                }
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
  name=""
  defaultValue={"manual"}
  className="form-control form-select"
  id=""
  onChange={(e) => setSort(e.target.value)}
>
  <option value="manual">Manual</option>
  <option value="brand">Alphabetically, A-Z</option>
  <option value="-brand">Alphabetically, Z-A</option>
  <option value="price">Price, low to high</option>
  <option value="-price">Price, high to low</option>
  <option value="createdAt">Date, old to new</option>
  <option value="-createdAt">Date, new to old</option>
</select>

                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <button className="border-0 bg-transparent">
                      <TfiLayoutColumn4
                        onClick={() => {
                          setGrid(3);
                        }}
                      />
                    </button>
                    <button className="border-0 bg-transparent">
                      <TfiLayoutColumn3
                        onClick={() => {
                          setGrid(4);
                        }}
                      />
                    </button>
                    <button className="border-0 bg-transparent">
                      <TfiLayoutColumn2
                        onClick={() => {
                          setGrid(6);
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="products-list pb-5">
              <div className="d-flex flex-wrap gap-10">
                <FaceMakeupCard data = {productState ? productState : []} grid={grid} />
                <EyesSkincareCard data = {products} grid={grid} />
                <LipsSkincareCard data = {lipsskincareproducts} grid={grid} />
                <EyesMakeupCard data = {productState ? productState : []} grid={grid} />
                <LipsMakeupCard data = {productState ? productState : []} grid={grid} />
                <FaceSkincareCard data = {productState ? productState : []} grid={grid} />
                <BodySkincareCard data = {productState ? productState : []} grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShopAll;
