import express from 'express'
import mongoose from 'mongoose';

const router=new express.Router();
import productModel from "../Models/productModels.mjs";


router.post('/product', async (req, res) => {
    try {
        console.log(req.body);
        const product = productModel(req.body);
        const createProduct = await product.save();
        res.status(201).send("Send Successfuly")
    } catch (e) {
        res.status(400).send(e)

    }
})



router.get('/products', async (req, res) => {

    try {
        const productData = await productModel.find()
        res.send(productData)
    } catch (error) {res.send(error)}
})

router.get('/product/:id', async (req, res) => {
       
    try {
        const _id=req.params.id
        const productData = await productModel.findById(_id)
        if (!productData) {
            res.send(400).send("require Parameter are  missing")
        } else {
            res.send(productData)
        }
       
    } catch (error) {res.send(error)}
})

router.delete('/product/:id', async (req, res) => {
       
    try {
        const _id=req.params.id
        const productData = await productModel.findByIdAndDelete(_id)
        if (!_id) {
            res.send(400).send("require Parameter are  missing")
        } else {
            res.send("Deleted Suceesful")
        }
       
    } catch (error) {res.status(500).send(error)}
})

router.patch('/product/:id', async (req, res) => {
    try {
        const _id=req.params.id
       
        let updateProduct = await productModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).exec();
        console.log(req.body);
        res.send({
            message: "Product is updated successfully",
            data: updateProduct
        })
    } catch (e) {
        res.status(500).send("Internal Error!")

    }
})



export default router;