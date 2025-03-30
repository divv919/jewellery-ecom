import express from 'express';
import cors from 'cors';
import'dotenv/config';
import productRoutes from './routes/products.js';
import categoryRoutes from './routes/category.js';
import productInfoRoute from './routes/productInfo.js'
import {sequelize,connectDB} from './db/index.js'
const PORT = process.env.PORT || 5000;
const app = express();



app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true
}));
app.use(express.json());


const syncDatabase = async () => {
    try {
      await sequelize.sync({ alter: false }); // Prevents structure modification
      console.log('Database synced successfully.');
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  };

connectDB();

syncDatabase();


app.use("/api/products", productRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/productInfo/', productInfoRoute);


app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>")
})


app.listen(PORT , ()=>{
    console.log(`listening at port : ${PORT}`);
})