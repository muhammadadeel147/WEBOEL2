import mongoose from "mongoose";
import validator from "validator";

let signUpModel=mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true,unique:true,lowercase:true ,validate(value){
        if (!validator.isEmail(value)) {
            console.log("Wrong Email input")
            throw new Error("Wrong Email input")
        }
    }},
    gender:{type:String, required:true},
    phoneNumber:{type:Number, required:true},
    age:{type:Number, required:true},
    password:{type:String, required:true},
    confirmpassword:{type:String, required:true},
})

const Register=mongoose.model('SignUp',signUpModel)

export default Register