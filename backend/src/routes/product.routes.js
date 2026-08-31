const expresss=require('express');
const {createProduct}=require('../controller/product.controller');

const Productroutes=expresss.Router();

Productroutes.post('/products',createProduct);


module.exports=Productroutes;