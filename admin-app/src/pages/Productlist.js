import React, { useEffect, useState } from "react";
import { Table, Input, Popconfirm } from "antd";
import { getProducts } from "../features/product/productSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Search } = Input;
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Color",
    dataIndex: "color",
    render: (color) =>
      color.map((c) => (
        <div
          key={c._id}
          style={{
            backgroundColor: c.title,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            display: "inline-block",
            marginRight: "5px",
          }}
        />
      )),
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const handleDelete = (productId) => {};

  const productState = useSelector((state) => state.product.products);
  const [searchTerm, setSearchTerm] = useState("");
  const handleEditClick = (product) => {
    navigate(`/admin/product/${product.title}`, { state: { product } });
  };
  console.log(productState);
  const data = productState?.products?.filter((product) => {
      const { title, category } = product;
      const lowerCaseTerm = searchTerm.toLowerCase();
      return (
        title.toLowerCase().includes(lowerCaseTerm) ||
        category.toLowerCase().includes(lowerCaseTerm)
      );
    })
    .map((product, index) => ({
      key: index + 1,
      title: product.title,
      price: `${product.price}`,
      brand: product.brand,
      category: product.category,
      color: product.color,
      action: (
        <>
          <button
            className="fs-6  text-danger"
            onClick={() => handleEditClick(product)}
          >
            <BiEdit />
          </button>

          <Popconfirm
            title="Are you sure you want to delete this product?"
            onConfirm={() => handleDelete(product._id)}
            okText="Yes"
            cancelText="No"
          >
            <div className="ms-3 fs-3 text-danger">
              <AiFillDelete />
            </div>
          </Popconfirm>
        </>
      ),
    }));

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <h3 className="mb-4 title">Products</h3>
      <Search
        placeholder="Search by title or category"
        allowClear
        enterButton
        onSearch={handleSearch}
        style={{ width: 200, marginBottom: 16 }}
      />
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ProductList;
