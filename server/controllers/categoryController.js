import models from '../models/index.js'
import CategoryType from '../models/CategoryType.js'
export default async (req,res)=>{
    try{
        let result = await models.CategoryType.findAll({
            attributes : ['id', 'name' , 'title', 'subtitle'],
            include : [
                {
                    model : models.Category,
                    as : 'categories',
                    attributes : ['id','name','description','url']
                }
            ]
    })
    const newResult = result.map((item)=>({
        id : item.id,
        title : item.title,
        subtitle : item.subtitle,
        categories : item.categories.map((i)=>({
            id : i.id,
            name : i.name,
            description : i.description,
            url : i.url
        }))
    }))

    res.status(200).json(newResult);
    }
    catch(err){
        console.error("Error fetching categories data : ", err)
        res.status(500).json("Internal Server Error");
    }
}
