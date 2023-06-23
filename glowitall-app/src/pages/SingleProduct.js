import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import MakeupCard from "../components/FaceMakeupCard";
import SkincareCard from "../components/FaceSkincareCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import Container from "../components/Container";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAProduct } from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addProductToCart } from "../features/users/userSlice";
import { getUserCart } from "../features/users/userSlice";
import { addRating } from "../features/products/productSlice";
import axios from "axios";
import { base_url } from "../utils/axiosConfig";
import FeaturedProducts from "../components/FeaturedProducts";
const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.singleproduct);
  const cartState = useSelector((state) => state.auth.cartProducts);
  const [resData, setFeatured] = useState([]);
  console.log(productState);
  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    if (cartState) {
      for (let index = 0; index < cartState.length; index++) {
        if (getProductId === cartState[index]?.productId?._id) {
          setAlreadyAdded(true);
        }
      }
    }
  }, []);

  const uploadCart = async () => {
    if (color === null) {
      toast.error("Please choose color!");
      return false;
    } else {
      const data = {
        productId: productState._id,
        quantity,
        price: productState.price,
        color: productState.color[0]._id,
      };
      const res = dispatch(addProductToCart(data));
      console.log(" product add to cart response", res);
      // const res = useDispatch(addProductToCart);
      // const header = localStorage.getItem("userToken");
      // const response = await axios.post(`http://localhost:5000/api/user/cart`,{productId:productState._id,quantity,price:productState.price,color:productState.color[0]._id},{
      //     headers: {
      //         "userToken": header
      //     }try {
      // }
      // );
      // toast.success("Product Added to Cart");
      // dispatch(addProductToCart({productId:productState?._id, color, quantity}))
      // navigate('/cart')
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}product/get/featured`);
        console.log("==========> features", response);
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

  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://www.shutterstock.com/image-photo/lipstick-fashion-colorful-lipsticks-over-260nw-1017284011.jpg",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);

  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Please Add Star Rating");
      return false;
    } else if (comment === null) {
      toast.error("Please Write Review about the Product");
      return false;
    } else {
      dispatch(
        addRating({ star: star, comment: comment, prodId: getProductId })
      );
      setTimeout(() => {
        dispatch(getAProduct(getProductId));
      }, 100);
    }
    return false;
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={productState?.title} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>

            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images.map((item, index) => {
                return (
                  <div>
                    <img className="img-fluid" src={item?.url} alt="" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ {productState?.price}</p>
                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="mb-0 t-review">(4 Reviews)</p>
              </div>
              <a className="review-btn" href="#review">
                Write a Review
              </a>
            </div>
            <div className=" py-3">
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Brand :</h3>
                <p className="product-data">{productState?.brand}</p>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Category :</h3>
                <p className="product-data">{productState?.category}</p>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Tags :</h3>
                <p className="product-data">{productState?.tags}</p>
              </div>
              <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Availablity :</h3>
                <p className="product-data">{productState?.quantity} Items</p>
              </div>

              {alreadyAdded === false && (
                <>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Color
                      setColor={setColor}
                      colorData={productState?.color}
                    />
                  </div>
                </>
              )}
              <div className="d-flex align-items-center gap-15 flex-row mb-3">
                {alreadyAdded === false && (
                  <>
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                      />
                    </div>
                  </>
                )}
                <div
                  className={
                    alreadyAdded
                      ? "ms-0"
                      : "ms-5" + "d-flex align-items-center gap-30 ms-5"
                  }
                >
                  <div className="mt-3 d-flex justify-content-center gap-15 align-itmes-center mb-2">
                    <button
                      className="button border-0"
                      /* data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"*/
                      type="button"
                      onClick={() => {
                        alreadyAdded ? navigate("/cart") : uploadCart();
                      }}
                    >
                      {alreadyAdded ? "Go To Cart" : "Add to Cart"}
                    </button>
                  </div>
                  {/*<div className="mt-3 d-flex justify-content-center gap-15 align-itmes-center mb-2">
                    <button className="button border-0">
                      Buy Now
                    </button>
                    </div>*/}
                </div>
              </div>

              <div className="d-flex gap-10 align-items-center my-3">
                <h3 className="product-heading">Shipping and Returns :</h3>
                <p className="product-data">
                  Free shipping and return available!
                  <br /> {""}
                  We ship worldwide &nbsp;
                  <b>5-10 buisness days!</b>
                </p>
              </div>
              <div className="d-flex gap-10 align-items-center my-3">
                <h3 className="product-heading">Copy Product Link :</h3>
                <a
                  href="javascript:void(0);"
                  style={{ color: "black", textDecoration: "none" }}
                  onClick={() => {
                    copyToClipboard(window.location.href);
                  }}
                >
                  Get Product Link Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p
                dangerouslySetInnerHTML={{ __html: productState?.description }}
              ></p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wraper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={productState?.totalratings}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write A Review{" "}
                    </a>
                  </div>
                )}
              </div>

              <div className="review-form py-4">
                <h4>Write A Review</h4>

                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={true}
                    activeColor="#ffd700"
                    onChange={(e) => {
                      setStar(e);
                    }}
                  />
                </div>

                <div>
                  <textarea
                    name=""
                    id=""
                    className="w-100 form-control"
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button
                    onClick={addRatingToProduct}
                    className="button border-0"
                    type="button"
                  >
                    Submit Review
                  </button>
                </div>
              </div>

              <div className="reviews mt-3">
                {productState &&
                  productState.ratings?.map((item, index) => {
                    return (
                      <div key={index} className="review">
                        <div className="d-flex gap-10 align-items-center">
                          {/*<h6 className="mb-0">GlowItAll</h6>*/}
                          <ReactStars
                            count={5}
                            size={24}
                            value={item?.star}
                            edit={false}
                            activeColor="#ffd700"
                          />
                        </div>

                        <p className="mt-3">{item?.comment}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <FeaturedProducts data={resData} grid={6} />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
