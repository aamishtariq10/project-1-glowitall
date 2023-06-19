import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import {
  TextField,
  Select,
  FormControl,
  Typography,
  InputLabel,
  Autocomplete,
  MenuItem,
} from "@mui/material";
import ReactQuill from "react-quill";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { getCategories } from "../features/pCategory/pCategorySlice";
import { getColors } from "../features/color/colorSlice";
// import { Select } from "antd";
import Dropzone from "react-dropzone";
import { deleteImg, uploadImg } from "../features/upload/uploadSlice";
import { createProducts, resetState } from "../features/product/productSlice";
import { config } from "../utils/axiosconfig";
import { base_url } from "../utils/base_url";
import RecommendorForm from "./RecommendorForm";

import axios from "axios";
let schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  price: yup.number().required("Price is Required"),
  brand: yup.string().required("Brand is Required"),
  category: yup.string().required("Category is Required"),
  tags: yup.string().required("Tag is Required"),
  reccomendations: yup.array(),
  productType: yup.string(),
  color: yup
    .array()
    .min(1, "Pick at least one color")
    .required("Color is Required"),
  quantity: yup.number().required("Quantity is Required"),
});

const skinType = ["fundation", "blush"];
const lipsType = ["lipstick"];
const eyesType = ["lash", "mascara"];
const Addproduct = () => {
  const location = useLocation();
  const product = location?.state?.product;
  console.log(product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);
  const [showProductType, setShowProductType] = useState(false);
  const [typeOptions, setTypeOptions] = useState(false);
  const [showQuestionare, setShowQuestionare] = useState(false);

  // const [images, setImage] = useState(); // Set initial value from product.images
  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  }, []);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const brandState = useSelector((state) => state.brand.brands);
  const catState = useSelector((state) => state.pCategory.pCategories);
  const colorState = useSelector((state) => state.color.colors);
  const imgState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.product);
  const { isSuccess, isError, isLoading, createdProduct } = newProduct;
  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success("Product Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const coloropt = [];
  colorState.forEach((i) => {
    coloropt.push({
      label: i.title,
      value: i._id,
    });
  });
  console.log("add product", selectedOptions);
  const img = [];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  if (product && product.images && Array.isArray(product.images)) {
    product.images.forEach((image) => {
      img.push({
        public_id: image.public_id,
        url: image.url,
      });
    });
  }
  useEffect(() => {
    formik.values.color = color ? color : " ";
    formik.values.images = img;
    console.log("image", img);
  }, [color, img]);

  const formik = useFormik({
    initialValues: {
      title: product?.title || "",
      description: product?.description || "",
      price: product?.price || 0,
      brand: product?.brand || "",
      category: product?.category || "",
      tags: product?.tags || "",
      color: color,
      productType: product?.productType || "",

      quantity: product?.quantity || "",
      images: img || [],
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      if (product) {
        const res = await axios.put(
          `${base_url}product/${product._id}`,
          values,
          config
        );
        if (res.data.status == 200) {
          toast.info(res.data.message, { autoClose: 1500 });
          setTimeout(() => {
            navigate("/admin/list-product");
          }, 1000);
        } else {
          toast.error(res.data.message, { autoClose: 1500 });
        }
      } else {
        dispatch(createProducts(values));
        formik.resetForm();
        setSelectedOptions([]);
      }
    },
  });
  const [desc, setDesc] = useState();
  const handledesc = (e) => {
    setDesc(e);
  };
  useEffect(() => {
    formik.values.recommendations = product
      ? product.recommendations
      : selectedOptions;
    if (product) {
      setSelectedOptions(product?.recommendations);
    }
  }, [selectedOptions]);

  console.log(product);
  console.log(formik.values);
  useEffect(() => {
    if (formik.values.category.includes("face makeup")) {
      setShowProductType(true);
      setTypeOptions(skinType);
    } else if (formik.values.category.includes("eyes makeup")) {
      setTypeOptions(eyesType);
      setShowProductType(true);
    } else if (formik.values.category.includes("lips makeup")) {
      setTypeOptions(lipsType);
      setShowProductType(true);
    } else {
      setShowProductType(false);
    }
  }, [formik.values.category]);
  useEffect(() => {
    const type = formik.values.category;
    if (
      type.includes("face makeup") ||
      type.includes("eyes makeup") ||
      type.includes("lips makeup") ||
      type.includes("face skincare") ||
      type.includes("eyes skincare") ||
      type.includes("lips skincare")
    ) {
      setShowQuestionare(true);
    } else {
      setShowQuestionare(false);
    }
  }, [formik.values.category]);

  const handleColors = (e) => {
    setColor(e);
    console.log(color);
  };
  const handleSelectedOptions = (options) => {
    console.log("Selected Options:", options);
    setSelectedOptions(options);
  };
  // console.log("product----------<",product )
  return (
    <div>
      {product ? (
        <h3 className="mb-4 title">Update Product</h3>
      ) : (
        <h3 className="mb-4 title">Add Product</h3>
      )}

      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <Typography variant="h6" component="h6">
            Enter Product title
          </Typography>
          <TextField
            type="text"
            label="Title"
            name="title"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <FormControl fullWidth>
            <Typography variant="h6" component="h6">
              Enter description
            </Typography>
            <ReactQuill
              theme="snow"
              name="description"
              onChange={formik.handleChange("description")}
              value={formik.values.description}
            />
          </FormControl>
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>

          <FormControl fullWidth>
            <Typography variant="h6" component="h6">
              Enter Product price
            </Typography>
            <TextField
              type="number"
              label="price"
              name="price"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
          </FormControl>
          <Typography variant="h6" component="h6">
            Enter product brand
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="brand-label">Select Brand</InputLabel>

            <Select
              name="brand"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brand}
              labelId="brand-label"
              id="category"
              size="small"
              className="form-control"
              helperText={formik.touched.brand && formik.errors.brand}
            >
              <MenuItem value="" disabled>
                Select Brand
              </MenuItem>
              {brandState.map((i, j) => (
                <MenuItem key={j} value={i.title}>
                  {i.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="h6" component="h6">
            Select product category
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="category-label">Select Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              size="small"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              helperText={formik.touched.category && formik.errors.category}
            >
              {catState.map((i, j) => (
                <MenuItem key={j} value={i.title}>
                  {i.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {showProductType && (
            <>
              <Typography variant="h6" component="h6">
                Select product type
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="product-type">Select Product Type</InputLabel>
                <Select
                  labelId="product-type"
                  id="productType"
                  size="small"
                  name="Product Type"
                  value={formik.values.productType}
                  onChange={formik.handleChange("productType")}
                  onBlur={formik.handleBlur("productType")}
                  className="form-control"
                  helperText={
                    formik.touched.productType && formik.errors.productType
                  }
                >
                  <MenuItem value="" disabled>
                    Select type
                  </MenuItem>
                  {typeOptions.map((i, j) => (
                    <MenuItem key={j} value={i}>
                      {i}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
          {showQuestionare && (
            <>
              <div>
                <RecommendorForm
                  selectedOption={handleSelectedOptions}
                  productType={formik.values.productType}
                  category={formik.values.category}
                />
              </div>

              <Typography variant="h6" component="h6">
                Selected recommendations
              </Typography>
              <TextField
                type="text"
                label="Recommendations"
                name="recommendations"
                variant="outlined"
                disabled={true}
                className="form-control"
                value={selectedOptions.join(", ")}
              />
            </>
          )}
          <Typography variant="h6" component="h6">
            Select product tags
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="tags-label">Select Tags</InputLabel>
            <Select
              labelId="tags-label"
              id="tags"
              name="tags"
              size="small"
              value={formik.values.tags}
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.tags && formik.errors.tags}
            >
              <MenuItem value="featured">Featured</MenuItem>
              <MenuItem value="popular">Popular</MenuItem>
              <MenuItem value="special">Special</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="h6" component="h6">
            Select Colors
          </Typography>
          <Autocomplete
            multiple
            fullWidth
            options={coloropt}
            defaultValue={product?.color.map((c) => c.title)}
            onChange={(event, value) => handleColors(value)}
            isOptionEqualToValue={(option, value) => option.value === value}
            // renderOption={(option, title) => (
            //   <div style={{ background: option.title }} className="option">
            //     {option.title}
            //   </div>
            // )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Colors"
                placeholder="Select colors"
              />
            )}
          />

          {/* <Autocomplete
            multiple
            allowClear
            className="w-100"
            placeholder="Select colors"
            options={coloropt}
            defaultValue={product?.color.map((c) => c.title)}
            onChange={(event, value) => handleColors(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Colors"
                placeholder="Select colors"
              />
            )}
          /> */}

          <div className="error">
            {formik.touched.color && formik.errors.color}
          </div>

          <Typography variant="h6" component="h6">
            Enter product Quantity
          </Typography>
          <TextField
            type="number"
            label="Enter Product Quantity"
            name="quantity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min={1}
            value={formik.values.quantity}
            className="form-control"
            helperText={formik.touched.quantity && formik.errors.quantity}
          />

          <div className="bg-white border-1 p-5 text-center">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap gap-3">
            {img?.map((i, j) => {
              return (
                <div className="position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>

          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {!product ? "Add Product" : "Update product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
