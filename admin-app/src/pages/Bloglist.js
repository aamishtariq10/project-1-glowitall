import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteABlog, getBlogs, resetState } from "../features/blogs/blogSlice";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Bloglist = () => {
  const [open, setOpen] = useState(false);
  const [blogId, setblogId] = useState("");
  const dispatch = useDispatch();
  const showModal = (e) => {
    setOpen(true);
    setblogId(e);
  };
  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogs());
  }, []);

  const hideModal = () => {
    setOpen(false);
  };

  const getBlogState = useSelector((state) => state.blogs);
  const data1 = [];
  if (getBlogState?.blogs) {
    for (let i = 0; i < getBlogState.blogs.length; i++) {
      data1.push({
        key: i + 1,
        name: getBlogState.blogs[i]?.title,
        category: getBlogState.blogs[i]?.category,
        action: (
          <>
            <Link
              to={`/admin/blog/${getBlogState.blogs[i]?.id}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(getBlogState.blogs[i]?._id)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteBlog = (e) => {
    dispatch(deleteABlog(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getBlogs());
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">Blogs List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBlog(blogId);
        }}
        title="Are you sure you want to delete this blog?"
      />
    </div>
  );
};

export default Bloglist;
