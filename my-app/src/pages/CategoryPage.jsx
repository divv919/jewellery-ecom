import Cards from "../components/Cards/Cards";
import { useParams } from "react-router-dom";
import productData from "../assets/productData";
export default function CategoryPage(){
    return <Cards categoryData={productData.ElegantBangles}/>   
}