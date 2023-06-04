/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { NavLink, Link, useNavigate, Navigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import {BsCartPlus} from "react-icons/bs";
import { useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAProduct } from "../features/products/productSlice";

const Header = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState=useSelector(state => state?.auth)
  const productState=useSelector(state => state?.product?.product)
  const cartState = useSelector((state) => state?.auth?.cartProducts)

  const [paginate, setPaginate] = useState(true);
  const [total,setTotal]=useState(null);
  const [productOpt, setProductOpt] = useState([])

  useEffect(()=>{
    let sum = 0
    for(let index = 0;index < cartState?.length; index++){
      sum = sum + (Number(cartState[index].quantity)*Number(cartState[index].price))
      setTotal(sum)
    }
  },[cartState])

  useEffect(()=>{
    let data = []
    for(let index = 0;index < productState?.length; index++){
      const element = productState[index];
      data.push({id:index, prod:element?._id, name:element?.title})
    }
    setProductOpt(data);
  },[productState])

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/"; // Navigate to the home page
  };
  
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-3  d-flex gap-10">
              <Link to='/'>
              <img
                src=" Images/logo.jpg"
                alt="image"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              /></Link>
              <h2 style={{marginTop:"10px"}}>
                <Link className="text-dark" style={{ textDecoration: "none" }}>
                  Glow It All
                </Link>
              </h2>
            </div>

            <div className="col-4">
              <div className="input-group">
                <div id="search-autocomplete" className="form-outline">
                <Typeahead
                id="pagination-example"
                onPaginate={() => console.log('Results paginated')}
                onChange={(selected)=>{navigate(`/product/${selected[0]?.prod}`)
                dispatch(getAProduct(selected[0]?.prod))
                }}
                options={productOpt}
                minLength={2}
                paginate={paginate}
                labelKey={"name"}
                placeholder="Search for products here..."
              />
                </div>
                <button type="button" className="search-btn">
                  <BsSearch />
                </button>
              </div>
            </div>

            <div className="col-5 ">
              <div className=" header-upper-icons d-flex align-items-center justify-content-between gap-20 ">
               
                <div>
                  <Link
                    to='/wishlist'
                    className="d-flex align-items-center gap-10 text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    <HiOutlineHeart className="fs-4" />
                    <p className="mb-0 ">
                      Favourite <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={ authState?.user === null ? '/login' : "/my-profile"}
                    className="d-flex align-items-center gap-10 text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    <IoMdLogIn className="fs-4" />
                   {
                   authState?.user === null ?  <p className="mb-0">Login </p> : <p className="mb-0">Welcome {authState?.user?.firstname}</p>
                   }
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    <RiAccountCircleLine className="fs-2" />
                    <p className="mb-0">My Account</p>
                  </Link>
                  </div>

                  <div className="d-flex flex-row gap-10">
                  <Link
                    to='/cart'
                    className="d-flex align-items-center gap-10 text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    <BsCartPlus className="fs-4" />
                    <p className="mb-0 ">
                      Cart
                    </p>
                  </Link>
              
               </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">

              <div className="dropdown">
                <button className="btn dropdown-toggle border-0 text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  BEAUTY STUDIO
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="/Start-makeup">MAKEUP</a></li>
                  <li><a className="dropdown-item" href="/Start-skincare">SKINCARE</a></li>
                </ul>
              </div>

                    <NavLink
                      className="text-white"
                      style={{ textDecoration: "none"}}
                      to="/Shop-All"
                    >
                      SHOP ALL
                  </NavLink>

              <div className="dropdown">
                <button className="btn dropdown-toggle border-0 text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  FACE
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="/face-makeup">MAKEUP</a></li>
                  <li><a className="dropdown-item" href="/face-skincare">SKINCARE</a></li>
                </ul>
              </div>

              <div className="dropdown">
                <button className="btn dropdown-toggle border-0 text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                 EYES
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="/eyes-makeup">MAKEUP</a></li>
                  <li><a className="dropdown-item" href="/eyes-skincare">SKINCARE</a></li>
                </ul>
              </div>

              <div className="dropdown">
                <button className="btn dropdown-toggle border-0 text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  LIPS
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="/lips-makeup">MAKEUP</a></li>
                  <li><a className="dropdown-item" href="/lips-skincare">SKINCARE</a></li>
                </ul>
              </div>

                  <NavLink
                      className="text-white"
                      style={{ textDecoration: "none"}}
                      to="/body"
                    >
                      BODY
                  </NavLink>

                  <NavLink
                      className="text-white"
                      style={{ textDecoration: "none"}}
                      to="/Bundles"
                    >
                      BUNDLES
                  </NavLink>

                  <NavLink
                      className="text-white"
                      style={{ textDecoration: "none"}}
                      to="/blog"
                    >
                      BLOGS
                  </NavLink>


                  <NavLink
                      className="text-white"
                      style={{ textDecoration: "none"}}
                      to="/my-orders"
                    >
                      MY ORDERS
                  </NavLink>

                  <button 
                  onClick={handleLogout}
                  className='border border-0 bg-transparent text-white text-uppercase' 
                  type='button'>Logout</button>

                 </div>
                </div>
              </div>
            {/*</div>
          </div>*/}
        </div>
      </header>
    </>
  );
};

export default Header;
