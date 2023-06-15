import React, { useState, useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/users/userSlice";
import { FaEdit } from "react-icons/fa";
import "./Profile.css";
import axios from "axios";
const profileSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Email Should be valid")
    .required("Email is Required"),
});

const Profile = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth?.user);
  const [edit, setEdit] = useState(true);
  const [profilePicture, setProfilePicture] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
      address: user?.address,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile(values));
      user.firstname = values.firstname;
      user.lastname = values.lastname;
      user.address = values.address;
      localStorage.setItem("user", JSON.stringify(user));
      setEdit(true);
    },
  });
  const handleProfilePictureUpload = async (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    try {
      const formData = new FormData();
      formData.append("profilePicture", profilePicture);

      const res = await axios.post("/api/upload/profilepic", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res)
      // const { imageUrl } = res.data;
      // dispatch(uploadProfilePicture(imageUrl));
      // setProfilePicture(imageUrl);
    } catch (error) {
      console.log("Error uploading profile picture:", error);
    }
  };
  return (
    <>
      <Meta title={"My Profile"} />
      <BreadCrumb title="Profile" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="my-3">Update Profile</h3>
              <FaEdit className="fs-3" onClick={() => setEdit(false)} />
            </div>
          </div>
          <div className="col-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="example1" className="form-label">
                  Profile Picture
                </label>
                {edit ? (
                  <div>
                    {user?.profilePicture ? (
                      <div
                        className="profile-pic"
                        style={{
                          backgroundImage: `url(${user.profilePicture})`,
                        }}
                      ></div>
                    ) : profilePicture ? (
                      <div
                        className="profile-pic"
                        style={{
                          backgroundImage: `url(${profilePicture})`,
                        }}
                      ></div>
                    ) : (
                      <div className="default-profile-pic"></div>
                    )}
                  </div>
                ) : (
                  <div>
                    <input
                      type="file"
                      name="profilePicture"
                      accept="image/*"
                      onChange={(e) => handleProfilePictureUpload(e)}
                      id="profile-picture-upload"
                      style={{ display: "none" }}
                    />
                    <label
                      htmlFor="profile-picture-upload"
                      className="profile-pic-upload"
                    >
                      {user?.profilePicture ? (
                        <div
                          className="profile-pic"
                          style={{
                            backgroundImage: `url(${user.profilePicture})`,
                          }}
                        ></div>
                      ) : (
                        <div className="default-profile-pic"></div>
                      )}
                      <div className="profile-pic-upload-overlay">
                        <span>Change Profile Picture</span>
                      </div>
                    </label>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="example1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  disabled={edit}
                  className="form-control"
                  id="example1"
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="example2" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  disabled={edit}
                  className="form-control"
                  id="example2"
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                />
              </div>
              <div className="error">
                {formik.touched.lastname && formik.errors.lastname}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  disabled={edit}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail2" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  disabled={edit}
                  className="form-control"
                  id="address"
                  aria-describedby="address"
                  value={formik.values.address} // Join the address array with a comma and space
                  onChange={formik.handleChange("address")}
                  onBlur={formik.handleBlur("address")}
                />

                <div className="error">
                  {formik.touched.address && formik.errors.address}
                </div>
              </div>
              {edit === false && (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              )}
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
