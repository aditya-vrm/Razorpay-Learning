const express=require('express');
const{registerController,loginController}=require('../controller/auth.controller');

const AuthRouter=express.Router();

AuthRouter.post('/register',registerController);
AuthRouter.post('/login',loginController);

module.exports=AuthRouter;