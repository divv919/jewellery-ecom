import Cards from "../components/Cards/Cards";
import { useSearchParams } from "react-router-dom";
// import productData from "../assets/productData";
import { useEffect,useState } from "react";
export default function CategoryPage(){

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const [products,setProducts] = useState([]);
    let categoryTitle = category.replace(/\s+/g, "");;
    

    useEffect(()=>{
        async function fetchProduct(){
            
        try{
            const response = await fetch(`http://localhost:3000/api/products?category=${categoryTitle}`)
            const data = await response.json();
            setProducts(data)
            console.log(products)
    }
        catch(error){
                console.log("error fetching products : "+ error.message);
        }
    }
        if(category) fetchProduct();

    },[category])
    
    
    
    return <Cards categoryData={products} categoryTitle="Explore"/>   
}