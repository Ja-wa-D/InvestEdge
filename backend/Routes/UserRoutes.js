const express = require("express");
const router = express.Router();

const {signup,checkAuth,logout,login} = require("../Controllers/UserController");
const {protectRoute} = require("../Middleware/Auth.Middleware");


router.post("/signup",signup);
router.get("/checkAuth",protectRoute,checkAuth);
router.post("/login",login);
router.post("/logout",logout);
module.exports = router;
