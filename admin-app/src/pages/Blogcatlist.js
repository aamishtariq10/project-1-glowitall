import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteABlogCat,
  getCategories,
  resetState,
} from "../features/bCategory/bCategorySlice";
import CustomModal from "../components/CustomModal";
import showModal from "../components/CustomModal"

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (text, record) => (
      <>
        <Link
          to={`/admin/blog-category/${record.id}`}
          className=" fs-3 text-danger"
        >
          <BiEdit />
        </Link>
        <button
          className="ms-3 fs-3 text-danger bg-transparent border-0"
          onClick={() => showModal(record.id)}
        >
          <AiFillDelete />
        </button>
      </>
    ),
  },
];

const Blogcatlist = () => {
  const [open, setOpen] = useState(false);
  const [blogCatId, setBlogCatId] = useState("");
  
  const showModal = (id) => {
    setOpen(true);
    setBlogCatId(id);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, [dispatch]);

  const bCatState = useSelector((state) => state.bCategory.bCategories);

  const data = bCatState.map((category, index) => ({
    key: index + 1,
    id: category._id,
    name: category.title,
  }));

  const deleteBlogCategory = (id) => {
    dispatch(deleteABlogCat(id));
    setOpen(false);
  };

  return (
    <div>
      <h3 className="mb-4 title">Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => deleteBlogCategory(blogCatId)}
        title="Are you sure you want to delete this blog category?"
      />
    </div>
  );
};

export default Blogcatlist;
