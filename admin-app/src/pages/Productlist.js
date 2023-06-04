import React ,{useEffect}from 'react';
import { Table } from 'antd';
import { getProducts } from '../features/product/productSlice';
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
import {Link} from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';

const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter:(a,b) => a.title.length - b.title.length,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      sorter:(a,b) => a.brand.length - b.brand.length,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      sorter:(a,b) => a.category.length - b.category.length,
    },
    {
      title: 'Color',
      dataIndex: 'color',
    
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter:(a,b) => a.price.length - b.price.length,
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
    
    
  ];


const Prodcutlist = () => {
  const dispatch =useDispatch();
  useEffect(()=>{dispatch(getProducts())},[]);
  const productState = useSelector((state)=>state.product.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i +1,
      title: productState[i].title,
      price: `${productState[i].price}`,
      brand: productState[i].brand,
      category: productState[i].category,
      color: productState[i].color,
      action:(
        <>
        <Link to={`/admin/product/${productState[i].title}`} className='fs-3 text-danger'>
        <BiEdit/>
        </Link>
        <Link to="/" className='ms-3 fs-3 text-danger'>
        <AiFillDelete/>
        </Link>
        </>

        )
    });
  }
  return (
    <div>
    <h3 className="mb-4 title">Products </h3>
    <div>
      <Table columns={columns} dataSource={data1} />
    </div>
  </div>
  )
}

export default Prodcutlist;