import Slider from "../components/Carousel/Slider";
import Cards from '../components/Cards/Cards';
import sliderImage from '../assets/sliderImage'
import categoryData from "../assets/categoryData"

export default function Home(){
    return(<div>
        <Slider sliderImage={sliderImage}/>
        <Cards categoryData={categoryData}/>
    </div>)
}