const express=require('express');
const {createOrder,verifyPayment}=require('../controller/payment.controller');

const paymentRouter=express.Router();

paymentRouter.post('/create-order',createOrder);

paymentRouter.post('/verify',verifyPayment);

module.exports=paymentRouter;