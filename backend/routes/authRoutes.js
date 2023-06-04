const { Router } = require("express");
const express = require("express");
const { createUser, verifyOTP,loginUserCtrl, getallUser, getaUser, updatedUser, deleteaUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getwishlist, saveAddress, userCart, getuserCart, emptyCart, getMyOrders, removeProductFromCart, updateProductQuantityFromCart, applyCoupon, createOrder, getOrders, updateOrderStatus } = require("../controller/userCtrl");
const {checkout, paymentVerification} = require('../controller/paymentCtrl');
const { authMiddleware , isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register" , createUser);
router.post("/login" , loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart" , authMiddleware,  userCart);
router.post("/order/checkout" , authMiddleware, checkout);
router.post("/order/paymentVerification" , authMiddleware, paymentVerification);
router.post("/cart/create-order", authMiddleware, createOrder);
router.post("/forgot-password-token", forgotPasswordToken);
router.post("/verifyotp", verifyOTP);
//router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrders);
router.put("/reset-password/:token", resetPassword);
//router.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);
//router.put("/order/update-order/:id", authMiddleware, updateOrderStatus);
router.put("/password/:id", authMiddleware, updatePassword);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.get("/all-users", getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/cart", authMiddleware, getuserCart);
router.get("/getmyorders", authMiddleware, getMyOrders );
router.get("/wishlist", authMiddleware,getwishlist);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
//router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete("/delete-product-cart/:cartItemId", authMiddleware, removeProductFromCart);
router.delete("/update-product-cart/:cartItemId/:newQuantity", authMiddleware, updateProductQuantityFromCart);
//router.delete("/:id", deleteaUser);





module.exports=router;