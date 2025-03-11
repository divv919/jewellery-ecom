import Arrows from './Arrows'
import SliderContent from './SliderContent'
import './slider.css'
import { useEffect, useState } from 'react'

function Slider({sliderImage}){
    useEffect(()=>{
        const stopInterval = setInterval(()=>{
            nextSlide();
        },5000);
        return ()=>clearInterval(stopInterval);
    })
    
    const [activeIndex,setActiveIndex] = useState(0);
    function nextSlide(){
        setActiveIndex(prev=>
            prev === sliderImage.length -1 ? 0 : prev+1
        )
    }

    function prevSlide(){
        setActiveIndex(prev=>
            prev === 0 ? sliderImage.length-1 : prev-1
        )
    }
    return(<div className='slider'>
    <Arrows prevSlide={prevSlide} nextSlide={nextSlide}/>
    <SliderContent sliderImage={sliderImage} activeIndex= {activeIndex}/>
    </ div>)
}

export default Slider