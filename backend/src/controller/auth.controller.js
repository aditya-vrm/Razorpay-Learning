const userModel=require('../models/user.model');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

async function registerController(req,res){
    const{username,password}=req.body

    const isUserAlreadyExist= await userModel.findOne({username});

    if(isUserAlreadyExist){
        return res.status(400).json({message:"User Already Exist"})
    }

    const user=userModel.create({
        username,
        password:await bcrypt.hash(password,10)
    });

    const token=jwt.sign({id:user._id, },process.env.JWT_SECRET)

    res.cookie("token",token);
    
    res.status(201).json({message:"User Registered Succesfully",user })
}

async function loginController(req,res){
    const{username,password}=req.body;

    const user=await userModel.findOne({username});

    if(!user){
        res.status(401).json({message:"No User Found"})
    }

    const isvalidPassword=await bcrypt.compare(password,user.password)

    if(!isvalidPassword){
        res.status(401).json({message:"Invalid Password"})
    }

    res.status(201).json({
        message:"User Succesfully Login",
        user:{
            username:user.username,
            id:user._id
        }
    })
}

module.exports={
    registerController,
    loginController
}