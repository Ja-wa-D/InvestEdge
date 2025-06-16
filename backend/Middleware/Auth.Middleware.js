const jwt = require("jsonwebtoken");
const User = require("../models/Usermodels");

const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"Unauthorized user - No token was provided"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({message:"Unauthorized - Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({message:"User not found"});
        }

        req.user = user;

        next();
    } catch (error) {
        console.log("Error in auth middleware",error.message);
        res.status(500).json({message:"internal server error"});
    }
}

module.exports = {protectRoute};