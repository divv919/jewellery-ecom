import productData from "../data/productData.js";

 export const getProducts = (req,res)=>{
    const category = req.query.category;
    if(category){
        return res.json(productData[category] || []);
    }
    
    res.json(productData);
}
