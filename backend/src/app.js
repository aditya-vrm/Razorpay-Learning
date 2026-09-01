const express=require('express');
const Authroutes=require('./routes/auth.routes');
const Productroutes=require('./routes/product.routes');
const Paymentroutes=require('./routes/payment.routes');
const cors=require('cors');


const app=express();


app.use(express.json());
app.use(cors());

app.use('/',Authroutes);
app.use('/',Productroutes);
module.exports=app;