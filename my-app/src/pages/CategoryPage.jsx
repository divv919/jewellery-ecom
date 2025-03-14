import Cards from "../components/Cards/Cards";
import { useParams } from "react-router-dom";
import productData from "../assets/productData";

export default function CategoryPage(){
    let {category} = useParams();

    
    return <Cards categoryData={productData[category]}/>   
}