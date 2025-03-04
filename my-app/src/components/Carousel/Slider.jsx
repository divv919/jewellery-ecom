import { useEffect, useState } from "react";
import Arrows from "./Arrows";
import Dots from "./Dots";
import SliderContent from "./SliderContent";
import sliderImage from "../../assets/sliderImage";
import "./slider.css"



const len = sliderImage.length - 1;
function Slider(){
    const [activeIndex,setActiveIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setActiveIndex(prev=> prev === len?0 : activeIndex+1)
        },5000)
        return ()=> clearInterval(interval);
    },[activeIndex])

    return(
        <div className="slider-container">
        <SliderContent activeIndex={activeIndex} sliderImage={sliderImage}/>
        <Arrows prevSlide={()=>{setActiveIndex(activeIndex<1 ? len : activeIndex-1)}} 
        nextSlide={()=>{setActiveIndex(activeIndex===len ? 0 : activeIndex + 1)}} />
        <Dots 
        activeIndex={activeIndex} 
        sliderImage = {sliderImage} 
        onclick={(activeIndex)=>{setActiveIndex(activeIndex)}}/>
        </div>
    )
}
export default Slider;

