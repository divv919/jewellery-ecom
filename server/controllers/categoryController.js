import * as db from '../db/index.js';

export default async (req,res)=>{
    try{
        const result = await db.query("SELECT * FROM categories")
    res.json(result.rows);
    }
    catch(err){
        console.error("Error fetching categories data : ", err)
    }
}
