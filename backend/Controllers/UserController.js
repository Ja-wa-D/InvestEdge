const User = require("../models/Usermodels");
const bcrypt = require("bcrypt");
const { generateToken } = require("../lib/utils");


const signup =async (req,res) =>{
    const{fullName,email,password} =req.body;
    try {
        if( !fullName || !email || !password){
            return res.status(400).json({message:"All fields are requierd"});
        }
        if(password.length<8){
            return res.status(400).json({message:"passsword must be atleast 8 characters"});
        }

        const user = await User.findOne({email});
        if(user) return res.status(400).json({message:"Email already in use"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt);

        const newUser = new User({
            fullName,
            email,
            password:hashedPassword
        });

        if(newUser){
            generateToken(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
            });
        }
        else{
            req.status(400).json({message :"Invalid user data"});
        }
    } catch (error) {
       console.log("Error while signing up",error.message);
       res.status(500).json({message:"internal server error"})
        
    }
}

const checkAuth = async(req,res) =>{
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error while checking auth",error.message);
        res.status(500).json({message:"internal server error"});
    }
}

const logout = async(req,res) =>{
    try {
        res.cookie("jwt","", {maxAge:0})
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

const login = async(req,res) =>{
    const {email,password} = req.body;

    try {
        if( !email || !password){
            return res.status(400).json({message:"All fields are requierd"});
        }
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const isPassCorrect = await bcrypt.compare(password,user.password);

        if(!isPassCorrect){
            return res.status(400).json({message:"Invalid credentials"});
        }

        generateToken(user._id,res);

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
        })
    } catch (error) {
        console.log("Error while logging in",error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

// const profile = async(req,res) =>{
//     try {
//         res.json(req.user);
//     } catch (error) {
//         res.status(500).json({message:"Server Error"});
//     }
module.exports = {signup,checkAuth,logout,login};