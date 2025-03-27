import productData from "../data/productData.js";
import * as db from '../db/index.js';



 export const getProducts = async (req,res)=>{
   try{
    let result;
    const category = req.query.category;

    if(category == 'null' || category == undefined || category ==null){
         result = await db.query('SELECT name, ROUND((metal_price+diamond_price + making_charges)*3/100 + metal_price+diamond_price + making_charges ) AS price FROM products')

        }
    else{
        const id = await db.query('SELECT id FROM categories WHERE name=$1',[category]);
         result = await db.query('SELECT name, ROUND((metal_price+diamond_price + making_charges)*3/100 + metal_price+diamond_price + making_charges ) AS price FROM products WHERE category_id = $1',[id.rows[0].id]);
    }
    // const result = await db.query('SELECT name, diamond_price as price FROM products WHERE category_id = $1',[id.rows[0].id]);

    res.json(result.rows);
}
catch(err){
    console.error("Error fetching products data : ", err);
}
    // const result = await db.query('SELECT * FROM products WHERE category_id');
    // console.log(result);
    // if(category){
    //     return res.json(productData[category] || []);
    // }
    
    // res.json(productData);
}
