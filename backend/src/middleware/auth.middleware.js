const jwt=require('jsonwebtoken');
const userModel=require('../models/user.model');

async function AuthMiddleware(req,res,next){

    const{token}=req.cookies;

    if(!token){
        res.status(401).json({message:"Unauthorised Access, Please Login"})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const user= await userModel.findOne({
            _id:decoded.id
        })

        req.user=user;
        next()
    }catch(err){
        return res.status(401).json({
            message:"Unauthorised-Invalid Token"
        })
    }
}

module.exports=AuthMiddleware;