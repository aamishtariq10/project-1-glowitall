const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
    try {
        const tok = req.header("userToken");
        const token = JSON.parse(tok)
        if (!token) return res.status(403).send("Access denied.");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
});

const isAdmin = asyncHandler(async (req, res, next) => {
    const tok = req.header("userToken");
    const token = JSON.parse(tok)
    if (!token) return res.status(403).send("Access denied.");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await User.findById(decoded?.id);
    if (admin.role !== "admin") {
        throw new Error("You are not an Admin");
    }
    else {
        next();
    }
});

module.exports = { authMiddleware, isAdmin }; 
