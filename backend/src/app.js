const express=require('express');
const Authroutes=require('./routes/auth.routes');
const Productroutes=require('./routes/product.routes');
const cookieParser=require('cookie-parser');

const app=express();

app.use(express.json());

app.use('/',Authroutes);
app.use('/',Productroutes);
module.exports=app;