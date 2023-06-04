 import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import {useEffect, useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {getUserCart} from "../features/users/userSlice";
import {deleteCartProduct} from "../features/users/userSlice";
import {updateCartProduct} from "../features/users/userSlice";



const Cart = () => {
  const dispatch=useDispatch();
  const[productUpdateDetail, setProductUpdateDetail] = useState(null);
  const[totalAmount, setTotalAmount] = useState(null);

  const userCartState = useSelector(state=>state.auth.cartProducts)
  console.log(userCartState);

  useEffect(()=>{
    dispatch(getUserCart())
  },[])

  useEffect(()=>{
    if(productUpdateDetail !== null){
      dispatch(updateCartProduct({cartItemId:productUpdateDetail?.cartItemId, quantity:productUpdateDetail?.quantity}))
      setTimeout(()=>{
      dispatch(getUserCart())
    },200)
    }
  },[productUpdateDetail])

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id))
    setTimeout(()=>{
      dispatch(getUserCart())
    },200)
  }

  useEffect(()=>{
    let sum = 0;
    for(let index=0; index<userCartState?.length; index++){
      sum = sum + (Number(userCartState[index].quantity) * userCartState[index].price);
      setTotalAmount(sum);
    }
  },[userCartState])

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {
                userCartState && userCartState?.map((item,index) =>{
                 return(
                <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-50">
                    <img src="Images/blog1.jpg" alt="moisturizer" style={{width: "250px" , height:"200px"}} />
                  </div>
                  <div className="w-50">
                    <p>{item?.productId?.title}</p>
                    <p className ="d-flex gap-3">color:   <ul className='colors ps-0'>
                      <li style={{backgroundColor:item?.color.title}}></li>
                      </ul> </p>
                    <p>size: 56ml </p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ {item?.price}</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      id=""
                      value={productUpdateDetail?.quantity ? productUpdateDetail?.quantity : item?.quantity}
                      onChange={(e)=>{setProductUpdateDetail({cartItemId:item?._id, quantity:e.target.value})}}
                    />
                  </div>
                  <div>
                    <AiFillDelete 
                    onClick={()=>{deleteACartProduct(item?._id)}}
                    className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ {item?.price*item?.quantity}</h5>
                </div>
              </div>
                 )
                })
              }
              
              <div>
                <div className="col-12 py-2 mt-4">
                  <div className="d-flex justify-content-between">
                  <Link to="/Shop-All" className="button">
                    Continue To Shopping
                  </Link>
                  {(totalAmount !== null || totalAmount !== 0) && 
                  <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: ${totalAmount}</h4>
                  <p> Taxes and shipping calculated at checkout</p>
                  <Link to="/check-out" className="button">
                 Checkout
                </Link>
                </div>
                  }
                </div>
              </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Cart;
