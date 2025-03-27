import Slider from "../components/Carousel/Slider";
import sliderImage from '../assets/sliderImage'
import categoryData from "../assets/categoryData";
import CategoryCard from "../components/CategoryCard/CategoryCard"
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader";
import { use, useEffect,useState } from "react";

export default function Home(){
    const [isLoading,setIsLoading] = useState(true)
    const [categories,setCategories] = useState([]);
    const [isErrorLoading,setIsErrorLoading] = useState(false);
    useEffect( ()=>{
        async function getCategories(){ 
        try{
            const response = await fetch('http://localhost:3000/api/categories')
            const data = await response.json();
            setCategories(data);
            setIsLoading(false);
        }catch(error){
            console.error("Error fetching data from API to frontend : ", error);
            setIsErrorLoading(true);
        }
    }
    getCategories();
}
)
    return(<div>
        <Slider sliderImage={sliderImage}/>
        <CategoryCard categoryData={categories} isLoading={isLoading} isErrorLoading={isErrorLoading}/>
    </div>)
}