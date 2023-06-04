import React from "react";
//import BreadCrumb from "../components/BreadCrumb";
//import Meta from "../components/Meta";
import { Link } from "react-router-dom";
//import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios";
import { toast } from "react-toastify";

/*const loginSchema = yup.object({
  email: yup.string().email("Email Should be valid").required("Email is Required"),
  password: yup.string().required("Password is Required"),
  
});*/


const Login = () => {
  const authState = useSelector(state => state?.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    //validationSchema:loginSchema,
    onSubmit: async (values) => {
      try {
        dispatch(login(values));
        navigate('/admin');
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15 container">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                  className="form control mb-3"
                  />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  className="form control"
                  value={formik.values.password}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <Link to={"/forgot-password"}>Forgot Password</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-itmes-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;