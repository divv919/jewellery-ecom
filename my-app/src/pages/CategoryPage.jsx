import Cards from "../components/Cards/Cards";
import { useSearchParams } from "react-router-dom";
// import productData from "../assets/productData";
import { useEffect,useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import SortAndFilter from "../components/SortAndFilter/SortAndFilter";
export default function CategoryPage(){

   
const params = useParams();
    const [products,setProducts] = useState([]);
    
    useEffect(()=>{
        async function fetchProduct(){
            
        try{
            
            const response = await fetch(`http://localhost:3000/api/products/${params.categoryType}/${params.categoryName}`)
            const data = await response.json();
            setProducts(data)}
                
        catch(error){
                console.log("error fetching products : "+ error.message);
        }
    }
        fetchProduct();

    },[params])
    
   
    
    return (
    <>
    {/* <SortAndFilter selectedSort={sort} selectedCategory = {category}
    updateCategory = {updateCategory} 
    updateSort={updateSort} /> */}
    <Cards categoryData={products} categoryTitle="Explore"/>
    </>
    )   
}