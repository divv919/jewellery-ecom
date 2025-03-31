import * as db from '../db/index.js';
import models from '../models/index.js'
export default async (req,res)=>{
    try{
        const result = await models.Category.findAll({
            attributes : ['id', 'name' , 'description', 'url']
    })
    res.status(200).json(result);
    }
    catch(err){
        console.error("Error fetching categories data : ", err)
        res.status(500).json("Internal Server Error");
    }
}
