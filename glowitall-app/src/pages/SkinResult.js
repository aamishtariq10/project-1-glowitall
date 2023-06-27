import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { base_url } from "../utils/axiosConfig";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import MakeupCard from "../components/FaceMakeupCard";
import Container from "../components/Container";

import axios from "axios";
function SkincareRecommendation() {
  const [resData, setFeatured] = useState([]);

  const [grid, setGrid] = useState(3);
  const dataa = [
    {
      _id: 1,
      brand: "Brand 1",
      title: "Product 1",
      images: [
        {
          url: "https://dummyimage.com/500x500",
        },
      ],
      totalrating: 4,
      price: 20,
      description: "Product 1 description",
    },
    {
      _id: 2,
      brand: "Brand 2",
      title: "Product 2",
      images: [
        {
          url: "https://dummyimage.com/500x500",
        },
      ],
      totalrating: 3,
      price: 25,
      description: "Product 2 description",
    },
    // Add more objects as needed
  ];

  const location = useLocation();
  const data = location.state.data;

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}product/get/featured`);

        if (response.data?.status === 200) {
          setFeatured(response.data.data);
        } else {
          setFeatured([]);
        }
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Meta title={"Result"} />

      <Container class1="store-wrapper home-wrapper-2 py-2 ">
        <div className="row">
          <div className="col-12">
            <div className="col-12">
              <div className="strip ">
                <h1 className="Start-title">BEAUTY STUDIO</h1>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="filter-card  mt-3">
              <h3 className="filter-title"> Random Products </h3>

              <div>
                {resData?.slice(0, 4)?.map((product) => (
                  <div
                    className="random-products mb-3 d-flex gap-10"
                    key={product?._id}
                  >
                    <div className="w-50">
                      <img
                        src={product?.images[0]?.url} // Assuming the product image URL is stored in product.images[0].url
                        className="img-fluid"
                        alt={product?.title}
                      />
                    </div>
                    <div className="w-50">
                      <h5>{product?.title}</h5>
                      <ReactStars
                        count={5}
                        value={product?.totalrating.toString()}
                        edit={false}
                        size={15}
                        activeColor="#ffd700"
                      />
                      <p>${product?.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-9">
            <h5 style={{ marginLeft: "270px", marginTop: "20px" }}>
              Your personalized {data?.category} {data?.porductType} Products!
            </h5>
            <div className="products-list pb-5 mt-3">
              <div className="d-flex flex-wrap gap-10">
                <MakeupCard data={resData} grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SkincareRecommendation;
