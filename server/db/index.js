import pg from "pg";
import'dotenv/config';


const {Pool} = pg
const pool = new Pool({
    user : process.env.DB_USER,
    database : process.env.DB_DATABASE,
    password : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,
    port : process.env.DB_PORT
});


export  const query = (text, params)=>{
    return  pool.query(text,params);
}