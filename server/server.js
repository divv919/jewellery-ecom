import express from 'express';
import axios from 'axios';
import cors from 'cors';
import'dotenv/config';
import productRoutes from './routes/products.js';
const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true
}));
app.use(express.json());

app.use("/api/products", productRoutes)

app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>")
})


app.listen(PORT , ()=>{
    console.log(`listening at port : ${PORT}`);
})