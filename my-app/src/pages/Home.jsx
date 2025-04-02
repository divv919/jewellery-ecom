import Slider from "../components/Carousel/Slider";
import sliderImage from '../assets/sliderImage'
import categoryData from "../assets/categoryData";
import CategoryCard from "../components/CategoryCard/CategoryCard"
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader";
import { use, useEffect,useState } from "react";
import PromotionalBanner from '../components/PromotionalBanner/PromotionalBanner';
import SpecialOffer from '../components/SpecialOffer/SpecialOffer'


const genderData = {
    title : "Curated For You",
    subtitle : "Shop by Gender",
    links : [
        {
            "name" : "Male",
            "url" : "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe6fec18e/homepage/ShopByGender/sbg-men.jpg",
            "path" : "/",
            "description" : "Explore for Men"
        },
        {
            "name" : "Female",
            "url" : "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw811805ad/homepage/ShopByGender/sbg-women.jpg",
            "path" : "/",
            "description" :"Discover for Women"
        },
        {
            "name" : "Kids",
            "url" : "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1e976d94/homepage/ShopByGender/sbg-kids.jpg",
            "path" : "/",
            "description" :"Shop for Kids"

        }
      
    ]
   }
   

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
        {/* <CategoryCard categoryData={categories} isLoading={isLoading} isErrorLoading={isErrorLoading}/> */}
        <CategoryCard categoryData={genderData} isLoading={isLoading} isErrorLoading={isErrorLoading}/>

        <PromotionalBanner/>
    </div>)
}