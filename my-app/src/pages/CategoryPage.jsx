import Cards from "../components/Cards/Cards";
import { useSearchParams } from "react-router-dom";
// import productData from "../assets/productData";
import { useEffect,useState } from "react";
import { useFetch } from "../hooks/useFetch";
import SortAndFilter from "../components/SortAndFilter/SortAndFilter";
export default function CategoryPage(){

    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category') || '';
    const sort = searchParams.get('sort') || '';

    const [products,setProducts] = useState([]);
    // let categoryTitle = category.replace(/\s+/g, "");;
    
    useEffect(()=>{
        async function fetchProduct(){
            
        try{
            
            const response = await fetch(`http://localhost:3000/api/products?category=${category}&sort=${sort}`)
            const data = await response.json();
            setProducts(data)}
                
        catch(error){
                console.log("error fetching products : "+ error.message);
        }
    }
        fetchProduct();

    },[searchParams])
    
    const updateSort = (sortValue)=>{
        setSearchParams((prev)=>{
            const newSearchParams = new URLSearchParams(prev);
            newSearchParams.set('sort', sortValue);
            return newSearchParams
        })
    }

    const updateCategory = (categoryValue)=>{
        setSearchParams((prev)=>{
            const newSearchParams = new URLSearchParams(prev);
            newSearchParams.set('category', categoryValue);
            return newSearchParams;
        })
    }
    
    return (
    <>
    <SortAndFilter selectedSort={sort} selectedCategory = {category}
    updateCategory = {updateCategory} 
    updateSort={updateSort} />
    <Cards categoryData={products} categoryTitle="Explore"/>
    </>
    )   
}