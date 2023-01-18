import mongoose from "mongoose";

const productSchema =new mongoose.Schema({
    name: { type: String, required: true },
    price: Number,
    category: String,
    model: String,
    Date: { type: Date, default: Date.now }
})
let productModel = mongoose.model('products', productSchema);
 export default  productModel 