import * as db from '../db/index.js';

export default async(req,res)=>{
    try{
        console.log(req.params)
         const result = await db.query("SELECT * FROM products WHERE id=$1",[req.params.id])
        res.json(result.rows);
    }
    catch(err){
        console.log("Error fetching product info ", err.stack )
    }
}


