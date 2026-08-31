const express=require('express');
const productModel=require('../models/product.model');

async function createProduct(req,res){

    const {image,title,description,price:{amount,currency}}=req.body;

    try{
        const product=await productModel.create({
            image,title,description,price:{amount,currency}
        })
        return res.status(201).json({
            message:"Product Added Succesfully",
            product
        })
        }catch(err){
            return res.status(500).json({
                messsage:"Something went wrong",
                err
            })
        }
    }

module.exports={
    createProduct
};