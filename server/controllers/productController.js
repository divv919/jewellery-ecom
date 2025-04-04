import {sequelize} from '../db/index.js'
import  models from '../models/index.js'

 export const getProducts = async (req,res)=>{
    let param = req.params;
    let query = req.query;
   try{
    const id = await models.Category.findOne({
        attributes : ['id'],
        where : {name : param.categoryName}
    })
// param.categoryType = `${param.categoryType}_id`

    const result = await models.Product.findAll({
        attributes : ['id', 'name', 'metal_price','diamond_price','making_charges','gst'],
        include : [
            {
                model : models.ProductImage,
                as : 'images',
                attributes : ['image_id','image_url']
            }
        ],
        where : {...query, [param.categoryType] : param.categoryName }
    })
    const newResult  = result.map((product)=>({
        id : product.id,
        price :  product.metal_price ,
        name : product.name,
        images : product.images.map((image)=>({
            image_id : image.image_id,
            image_url : image.image_url
        }))
    }))
    res.status(200).json(newResult);
}
catch(err){
    console.error("Error fetching products data : ", err);
    res.status(500)
}
    
}
