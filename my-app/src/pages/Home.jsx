import Slider from "../components/Carousel/Slider";
import sliderImage from '../assets/sliderImage'
import categoryData from "../assets/categoryData";
import CategoryCard from "../components/CategoryCard/CategoryCard"
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader";
import { use, useEffect,useState } from "react";
import PromotionalBanner from '../components/PromotionalBanner/PromotionalBanner';
import SpecialOffer from '../components/SpecialOffer/SpecialOffer'


   

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
        <SpecialOffer />
        {categories.map((category)=>{
            return <CategoryCard categoryData={category} isErrorLoading={isErrorLoading} isLoading={isLoading} />
        })}
        {/* <CategoryCard categoryData={categories} isLoading={isLoading} isErrorLoading={isErrorLoading}/>
        <CategoryCard categoryData={genderData} isLoading={isLoading} isErrorLoading={isErrorLoading}/> */}

        <PromotionalBanner/>
    </div>)
}