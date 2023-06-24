import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineZoomIn } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const FaceMakeupCard = ({ grid, data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <div
            key={item._id}
            className={`${
              location.pathname === "/store" ? `gr-${grid}` : "col-3"
            } ${hoveredCard === index ? "card-hovered" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div to="/product/:id" className="product-card position-relative">
              <div className="whishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                  <HiOutlineHeart
                    onClick={() => addToWish(item._id)}
                    className="fs-4"
                  />
                </button>
              </div>

              <div className="product-image">
                <img
                  src={item.images[0]?.url}
                  className="img-fluid w-100 h-100"
                  alt="product"
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item.brand}</h6>
                <h5 className="product-title">{item.title}</h5>
                <ReactStars
                  count={5}
                  value={item.totalrating.toString()}
                  edit={false}
                  size={24}
                  activeColor="#ffd700"
                />
                {grid === 12 && (
                  <p
                    className="description d-block"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                )}
                <p>
                  <div className="price">$ {item.price}</div>
                </p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-10">
                  <button className="border-0 bg-transparent">
                    <BiGitCompare className="fs-4" />
                  </button>
                  <Link
                    to={"/product/" + item._id}
                    className="border-0 bg-transparent"
                  >
                    <AiOutlineZoomIn className="fs-4" />
                  </Link>
                  <button className="border-0 bg-transparent">
                    <BsCartPlus className="fs-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default FaceMakeupCard;
