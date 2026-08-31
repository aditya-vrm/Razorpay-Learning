const express=require('express');
const Authroutes=require('./routes/auth.routes');
const cookieParser=require('cookie-parser');

const app=express();

app.use(express.json());

app.use('/',Authroutes);

module.exports=app;