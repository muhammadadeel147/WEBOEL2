import express from 'express'
import cors from "cors";
import mongoose from 'mongoose';
import { } from "./src/conn/comm.mjs";
import productModel from "./src/Models/productModels.mjs";
import router  from "./src/Router/products.mjs";
import registerRouter from "./src/Router/login.mjs";

const app = express()
const port = 3000


app.use(cors())
app.use(express.json())

app.use(router)

app.use(registerRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})







