import React, { useEffect } from "react";
import { Table } from "antd";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import {
  TextField,
  Select,
  FormControl,
  Typography,
  InputLabel,
  Autocomplete,
  Button,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getOrders } from "../features/auth/authSlice";
import { base_url } from "../utils/base_url";
import { config } from "../utils/axiosconfig";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "User Name",
    dataIndex: "user",
    render: (user) => (
      <div>
        <p>
          {user.firstName} {user.lastLame}
        </p>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    render: (user) => (
      <div>
        <p>{user.email}</p>
      </div>
    ),
  },
  {
    title: "Shipping Info",
    dataIndex: "shippingInfo",
    render: (shippingInfo) => (
      <div>
        <p>Address: {shippingInfo?.address}</p>
        <p>City: {shippingInfo?.city}</p>
      </div>
    ),
  },
  {
    title: "Product",
    dataIndex: "product",
    render: (products) => (
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    render: (amount) => <p>${amount}</p>,
  },
  // {
  //   title: "Color",
  //   dataIndex: "color",
  //   render: (color) =>
  //     color.map((c, index) => (
  //       <div
  //         key={index}
  //         style={{
  //           backgroundColor: c.title,
  //           width: "20px",
  //           height: "20px",
  //           borderRadius: "50%",
  //           display: "inline-block",
  //           marginRight: "5px",
  //         }}
  //       />
  //     )),
  // },
  {
    title: "created At",
    dataIndex: "createdAt",
  },
  {
    title: "Payment Status",
    dataIndex: "paymentStatus",
  },
  {
    title: "paid At",
    dataIndex: "paidAt",
  },
  {
    title: "Order Status",
    dataIndex: "orderStatus",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const orderState = useSelector((state) => state.auth.orders);
  console.log("order state", orderState);
  const data = [];

  if (orderState) {
    for (let i = 0; i < orderState.length; i++) {
      const order = orderState[i];
      const shippingInfo = order?.shippingInfo || {};
      data.push({
        key: i + 1,
        user: shippingInfo,
        email: order.user,
        shippingInfo: shippingInfo,
        product: order.orderItems.map((product) => ({
          title: product.productId.title,
        })),
        amount: order.totalPrice,
        paymentStatus: order.paymentStatus,
        // color: order.orderItems.map((product) => ({
        //   title: product.productId.color,
        // })),
        orderStatus: order.orderStatus,
        paidAt: new Date(order.paidAt).toLocaleString(),
        createdAt: new Date(order.createdAt).toLocaleString(),
        action: (
          <>
            {order.orderStatus === "Ordered" && (
              <Button onClick={() => handleUpdateStatus(order)}>
                Update status to delivered
              </Button>
            )}
            {order.orderStatus === "delivered" && <span>Order Delivered</span>}
          </>
        ),
      });
    }
  }
  const handleUpdateStatus = async (order) => {
    try {
      const data = {
        orderStatus: "delivered",
      };
      const response = await axios.put(
        `${base_url}user/orders/${order._id}`,
        data,
        config
      );
      console.log(response);
      if (response.status == 200) {
        toast.info(response.data.message);
        dispatch(getOrders());
      }
    } catch (error) {
      toast.info("Internal Server Error");
    }
  };
  return (
    <div>
      <h3 className="mb-4 title">Orders</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Orders;
