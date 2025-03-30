import * as db from '../db/index.js';



 export const getProducts = async (req,res)=>{
   try{
    const {sort,category} = req.query;
    let whereClause = '';
    let orderClause = '';
    let queryParams = []

        if(category && category !== 'null'){
            const id = await db.query('SELECT id FROM categories WHERE name=$1',[category]);
            if(id.rows.length>0){
                whereClause = ' WHERE category_id=$1';
                queryParams.push(id.rows[0].id);
            }
    
        }
        
        switch(sort){
            case 'price_asc' : orderClause = 'ORDER BY price ASC';
            break;
            case 'price_desc' : orderClause = 'ORDER BY price DESC';
            break;

            case 'rating' : break;
            default : orderClause = '';
        }
        const query = `SELECT p.*,ROUND((p.metal_price + p.making_charges + p.diamond_price) + (p.metal_price + p.making_charges + p.diamond_price)*3/100) AS price, COALESCE(JSON_AGG(pi.image_url) FILTER (WHERE pi.image_url IS NOT NULL), '[]') AS images FROM public.products p LEFT JOIN public.product_images pi ON p.id = pi.product_id  ${whereClause} GROUP BY p.id ${orderClause}`;

        const result = await db.query(query, queryParams);
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
