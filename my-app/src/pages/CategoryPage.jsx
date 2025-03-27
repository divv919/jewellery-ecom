import Cards from "../components/Cards/Cards";
import { useSearchParams } from "react-router-dom";
// import productData from "../assets/productData";
import { useEffect,useState } from "react";
import SortAndFilter from "../components/SortAndFilter/SortAndFilter";
export default function CategoryPage(){

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const [products,setProducts] = useState([]);
    // let categoryTitle = category.replace(/\s+/g, "");;
    
    useEffect(()=>{
        async function fetchProduct(){
            
        try{
            
            const response = await fetch(`http://localhost:3000/api/products?category=${category}`)
            const data = await response.json();
            setProducts(data)}
                
        catch(error){
                console.log("error fetching products : "+ error.message);
        }
    }
        fetchProduct();

    },[category])
    
    
    
    return (
    <>
    <SortAndFilter />
    <Cards categoryData={products} categoryTitle="Explore"/>
    </>
    )   
}