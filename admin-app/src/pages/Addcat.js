import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {createCategory,getAProductCategory,updateAProductCategory,resetState} from "../features/pCategory/pCategorySlice";


let schema = Yup.object().shape({
  title: Yup.string().required("Category Name is Required"),
});

const Addcat = () => {
  const dispatch = useDispatch();
   const location = useLocation();
  const navigate = useNavigate();
  const getPCatId = location.pathname.split("/")[3];
  const newCategory = useSelector((state) => state.pCategory);
  const { isSuccess, isError, isLoading, createdCategory, updatedCategory,categoryName } = newCategory;
  useEffect(() => {
    if (getPCatId !== undefined) {
      dispatch(getAProductCategory(getPCatId));
    } else {
      dispatch(resetState());
    }
  }, [getPCatId]);

  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("Categories added successfully!");
    }
    if (isSuccess && updatedCategory) {
      toast.success("Category  Updated  successfully!");
      navigate("/admin/list-category");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, isLoading],);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: categoryName||"",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getPCatId !== undefined) {
        const data = { id: getPCatId, pCatData: values };
        dispatch(updateAProductCategory(data));
        dispatch(resetState());
      } else {
        dispatch(createCategory(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">{getPCatId !==undefined?"Edit" : "Add"} Category</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Enter Product Category"
            id="category"
            onChng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
          />

          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>

          <button
            className="btn btn-success border-e rounded-3 my-5"
            type="submit"
          >
            {getPCatId !==undefined?"Edit" : "Add"} Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcat;
