import Slider from "../components/Carousel/Slider";
import sliderImage from '../assets/sliderImage'
import categoryData from "../assets/categoryData";
import CategoryCard from "../components/CategoryCard/CategoryCard"

export default function Home(){
    return(<div>
        <Slider sliderImage={sliderImage}/>
        <CategoryCard categoryData={categoryData}/>
    </div>)
}