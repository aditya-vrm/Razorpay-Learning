const expresss=require('express');
const {createProduct,getProduct}=require('../controller/product.controller');

const Productroutes=expresss.Router();

Productroutes.post('/products/add',createProduct);
Productroutes.get('/products/get',getProduct);


module.exports=Productroutes;