import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog.js";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import FaceMakeup from "./pages/FaceMakeup";
import FaceSkincare from "./pages/FaceSkincare";
import EyesMakeup from "./pages/EyesMakeup";
import EyesSkincare from "./pages/EyesSkincare";
import LipsMakeup from "./pages/LipsMakeup";
import LipsSkincare from "./pages/LipsSkincare";
import Body from "./pages/Body";
import StarterPageSkincare from "./pages/StarterPageSkincare";
import FoundationFinder from "./pages/FoundationFinder";
import MascaraFinder from "./pages/MascaraFinder";
import BlushFinder from "./pages/BlushFinder";
import LipstickFinder from "./pages/LipstickFinder";
import LashFinder from "./pages/LashFinder";
import SkinQ1 from "./pages/SkinQ1";
import SkinQ2 from "./pages/SkinQ2";
import SkinQ3 from "./pages/SkinQ3";
import SkinQ8 from "./pages/SkinQ8";
import SkinQ9 from "./pages/SkinQ9";
import SkinQ10 from "./pages/SkinQ10";
import SkinQ4 from "./pages/SkinQ4";
import SkinQ11 from "./pages/SkinQ11";
import SkinQ5 from "./pages/SkinQ5";
import SkinQ6 from "./pages/SkinQ6";
import SkinQ7 from "./pages/SkinQ7";
import SkinQ12 from "./pages/SkinQ12";
import StarterPageMakeup from "./pages/StarterPageMakeup";
import FoundationQ1 from "./pages/FoundationQ1";
import FoundationQ2 from "./pages/FoundationQ2";
import FoundationQ3 from "./pages/FoundationQ3";
import FoundationQ4 from "./pages/FoundationQ4";
import FoundationQ5 from "./pages/FoundationQ5";
import FoundationQ6A from "./pages/FoundationQ6A";
import FoundationQ6B from "./pages/FoundationQ6B";
import FoundationQ6C from "./pages/FoundationQ6C";
import FoundationQ6D from "./pages/FoundationQ6D";
import FoundationQ7 from "./pages/FoundationQ7";
import FoundationQ8 from "./pages/FoundationQ8";
import FoundationQ9 from "./pages/FoundationQ9";
import FoundationQ10 from "./pages/FoundationQ10";
import FoundationQ11 from "./pages/FoundationQ11";
import MascaraQ1 from "./pages/MascaraQ1";
import MascaraQ2 from "./pages/MascaraQ2";
import MascaraQ3 from "./pages/MascaraQ3";
import MascaraQ4 from "./pages/MascaraQ4";
import MascaraQ5 from "./pages/MascaraQ5";
import LashQ1 from "./pages/LashQ1";
import LashQ2 from "./pages/LashQ2";
import LashQ3 from "./pages/LashQ3";
import LashQ4 from "./pages/LashQ4";
import LashQ5 from "./pages/LashQ5";
import LashQ6 from "./pages/LashQ6";
import LashQ7 from "./pages/LashQ7";
import LipQ1 from "./pages/LipQ1";
import LipQ2 from "./pages/LipQ2";
import LipQ3 from "./pages/LipQ3";
import LipQ4 from "./pages/LipQ4";
import LipQ5 from "./pages/LipQ5";
import LipQ6 from "./pages/LipQ6";
import BlushQ1 from "./pages/BlushQ1";
import BlushQ2 from "./pages/BlushQ2";
import BlushQ3 from "./pages/BlushQ3";
import BlushQ4 from "./pages/BlushQ4";
import BlushQ5 from "./pages/BlushQ5";
import BlushQ6 from "./pages/BlushQ6";
import ShopAll from "./pages/ShopAll";
import Bundles from "./pages/Bundles";
import FoundationResult from "./pages/FoundationResult";
import LashResult from "./pages/LashResult";
import BlushResult from "./pages/BlushResult";
import MascaraResult from "./pages/MascaraResult";
import LipResult from "./pages/LipsResult";
import SkincareResult from "./pages/SkinResult";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import AboutUs from "./pages/AboutUs";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import { PrivateRoutes } from "./routes/privateRoutes";
import { OpenRoutes } from "./routes/openRoutes";
import SkincareRecommendation from "./pages/SkinResult";
import SendVerification from "./pages/SendVerification";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentReject from "./pages/PaymentReject ";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="face-makeup" element={<FaceMakeup />} />
            <Route path="face-skincare" element={<FaceSkincare />} />
            <Route path="eyes-makeup" element={<EyesMakeup />} />
            <Route path="eyes-skincare" element={<EyesSkincare />} />
            <Route path="lips-makeup" element={<LipsMakeup />} />
            <Route path="lips-skincare" element={<LipsSkincare />} />
            <Route path="body" element={<Body />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route
              path="cart"
              element={
                <OpenRoutes>
                  <Cart />
                </OpenRoutes>
              }
            />
            <Route path="my-orders" element={<Orders />} />
            <Route path="my-profile" element={<Profile />} />
            <Route path="check-out" element={<Checkout />} />
            <Route path="Payment" element={<Payment />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="sendotp" element={<SendVerification />} />
            <Route path="signup" element={<Signup />} />
            <Route path="payment-reject" element={<PaymentReject />} />
            <Route path="payment-success" element={<PaymentSuccess />} />
            <Route path="reset-password/:token" element={<Resetpassword />} />
            <Route path="Start-skincare" element={<StarterPageSkincare />} />
            <Route path="Start-makeup" element={<StarterPageMakeup />} />
            <Route path="Start-foundation" element={<FoundationFinder />} />
            <Route path="Start-mascara" element={<MascaraFinder />} />
            <Route path="Start-blush" element={<BlushFinder />} />
            <Route path="Start-lipstick" element={<LipstickFinder />} />
            <Route path="Start-lash" element={<LashFinder />} />
            <Route path="Skin-Q1" element={<SkinQ1 />} />
            <Route path="Skin-Q2" element={<SkinQ2 />} />
            <Route path="Skin-Q3" element={<SkinQ3 />} />
            <Route path="Skin-Q4" element={<SkinQ4 />} />
            <Route path="Skin-Q5" element={<SkinQ5 />} />
            <Route path="Skin-Q6" element={<SkinQ6 />} />
            <Route path="Skin-Q7" element={<SkinQ7 />} />
            <Route path="Skin-Q8" element={<SkinQ8 />} />
            <Route path="Skin-Q9" element={<SkinQ9 />} />
            <Route path="Skin-Q10" element={<SkinQ10 />} />
            <Route path="Skin-Q11" element={<SkinQ11 />} />
            <Route path="Skin-Q12" element={<SkinQ12 />} />
            <Route path="found-Q1" element={<FoundationQ1 />} />
            <Route path="found-Q2" element={<FoundationQ2 />} />
            <Route path="found-Q3" element={<FoundationQ3 />} />
            <Route path="found-Q4" element={<FoundationQ4 />} />
            <Route path="found-Q5" element={<FoundationQ5 />} />
            <Route path="found-Q6a" element={<FoundationQ6A />} />
            <Route path="found-Q6b" element={<FoundationQ6B />} />
            <Route path="found-Q6c" element={<FoundationQ6C />} />
            <Route path="found-Q6d" element={<FoundationQ6D />} />
            <Route path="found-Q7" element={<FoundationQ7 />} />
            <Route path="found-Q8" element={<FoundationQ8 />} />
            <Route path="found-Q9" element={<FoundationQ9 />} />
            <Route path="found-Q10" element={<FoundationQ10 />} />
            <Route path="found-Q11" element={<FoundationQ11 />} />
            <Route path="Mas-Q1" element={<MascaraQ1 />} />
            <Route path="Mas-Q2" element={<MascaraQ2 />} />
            <Route path="Mas-Q3" element={<MascaraQ3 />} />
            <Route path="Mas-Q4" element={<MascaraQ4 />} />
            <Route path="Mas-Q5" element={<MascaraQ5 />} />
            <Route path="Lash-Q1" element={<LashQ1 />} />
            <Route path="Lash-Q2" element={<LashQ2 />} />
            <Route path="Lash-Q3" element={<LashQ3 />} />
            <Route path="Lash-Q4" element={<LashQ4 />} />
            <Route path="Lash-Q5" element={<LashQ5 />} />
            <Route path="Lash-Q6" element={<LashQ6 />} />
            <Route path="Lash-Q7" element={<LashQ7 />} />
            <Route path="Lip-Q1" element={<LipQ1 />} />
            <Route path="Lip-Q2" element={<LipQ2 />} />
            <Route path="Lip-Q3" element={<LipQ3 />} />
            <Route path="Lip-Q4" element={<LipQ4 />} />
            <Route path="Lip-Q5" element={<LipQ5 />} />
            <Route path="Lip-Q6" element={<LipQ6 />} />
            <Route path="Blush-Q1" element={<BlushQ1 />} />
            <Route path="Blush-Q2" element={<BlushQ2 />} />
            <Route path="Blush-Q3" element={<BlushQ3 />} />
            <Route path="Blush-Q4" element={<BlushQ4 />} />
            <Route path="Blush-Q5" element={<BlushQ5 />} />
            <Route path="Blush-Q6" element={<BlushQ6 />} />
            <Route path="Shop-All" element={<ShopAll />} />
            <Route path="Bundles" element={<Bundles />} />
            <Route path="About-Us" element={<AboutUs />} />
            <Route path="F-Result" element={<FoundationResult />} />
            <Route path="L-Result" element={<LashResult />} />
            <Route path="M-Result" element={<MascaraResult />} />
            <Route path="Lips-Result" element={<LipResult />} />
            <Route path="B-Result" element={<BlushResult />} />
            <Route path="SC-Result" element={<SkincareResult />} />
            <Route path="SC-QUIZ" element={<SkincareRecommendation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
