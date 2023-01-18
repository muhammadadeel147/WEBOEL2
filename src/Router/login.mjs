import express from 'express'
import mongoose from 'mongoose';
import Register from "../Models/signUpModel.mjs";

const router=new express.Router();


router.post('/register',async(req,res)=>{
    try {
        console.log(req.body);
        const register = Register(req.body);
        const createRegister = await register.save();
        res.status(201).send("Send Successfuly")
    } catch (e) {
        res.status(400).send(e)

    }
})
router.get('/registers',async(req,res)=>{
    try {
       
        const createRegister = await Register.find();
        res.status(200).send(createRegister)
    } catch (e) {
        res.status(400).send(e)

    }
})


router.post('/signIn',async(req,res)=>{
    try {
        let email=req.body.email
        let password=req.body.password

        const userDetail = await Register.findOne({email:email});
        if (userDetail.password===password) {
        res.status(200).send(userDetail)
            
        }else{
            res.send("Invalid Auth")
        }
    } catch (e) {
        res.status(400).send("Bad Error")

    }
})

export default router