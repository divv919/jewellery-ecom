import { Op } from 'sequelize';
import {sequelize} from '../db/index.js'
import  models from '../models/index.js'

 export const getProducts = async (req,res)=>{
    let param = req.params;
    let query = req.query;
    let priceQuery;
    
    if(query.price !== undefined){let queryRangeArray = (Array.isArray(query.price))?query.price:[query.price];

     priceQuery = queryRangeArray.map((range)=>{
        const [min,max] = range.split('-');
        return {
            price :{ [Op.between] : [min,max] }
        }
    }) }
    

   try{
    
    const { price, sort, ...safeQuery} = query;
    
    let orderClause = [];
    if(sort == 'price_asc'){
        orderClause.push(['price','ASC']);
    }
    if((sort == 'price_desc')){
        orderClause.push(['price','DESC'])
    }
    
    
   
    const whereClause = {
        [param.categoryType]: param.categoryName,
        ...(query.price?{[Op.or] : priceQuery}:{}),
        ...safeQuery,
      }


    const result = await models.Product.findAll({
        attributes : ['id', 'name','price'],
        include : [
            {
                model : models.ProductImage,
                as : 'images',
                attributes : ['image_id','image_url']
            }
        ],


        where: whereClause,
        order : orderClause.length?orderClause:undefined
    })


    const newResult  = result.map((product)=>{
        return({
            id : product.id,
            price :  product.price ,
            name : product.name,
            images : product.images.map((image)=>({
                image_id : image.image_id,
                image_url : image.image_url
            }))
        })
    })
    res.status(200).json(newResult);
}
catch(err){
    console.error("Error fetching products data : ", err);
    res.status(500)
}
    
}
