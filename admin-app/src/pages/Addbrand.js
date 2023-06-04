import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createBrand,
  getABrand,
  resetState,
  updateBrand,
} from "../features/brand/brandSlice";

let schema = yup.object().shape({
  title: yup.string().required("Brand Name is Required"),
});
const Addbrand = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getBrandId = location.pathname.split("/")[3];
  const newBrand = useSelector((state) => state.brand);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBrand,
    brandName,
    updatedBrand,   
  } = newBrand;

  useEffect(() => {
    if (getBrandId !== undefined) {
      dispatch(getABrand(getBrandId));
     
    } else {
      dispatch(resetState());
    }
  }, [getBrandId]);

  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand added successfully!");
    }
    if (isSuccess && updatedBrand) {
      toast.success("Brand Updated  successfully!");
      navigate("/admin/list-brand");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, isLoading,createdBrand]);

  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      title: brandName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBrandId !== undefined) {
        const data = { id: getBrandId, brandData: values };
        dispatch(updateBrand(data)); // Pass `values` directly
      } else {
        dispatch(createBrand(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 3000);
      }
    },
    
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getBrandId !== undefined ? "EDit" : "Add"} Brand
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
        <CustomInput
  type="text"
  name="title"
  onChng={formik.handleChange}
  onBlr={formik.handleBlur}
  val={formik.values.title}
  label="Enter Brand"
  id="brand"
/>


          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>

          <button
            className="btn btn-success border-e rounded-3 my-5"
            type="submit"
          >
            {getBrandId !== undefined ? "Edit" : "Add"} Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbrand;
