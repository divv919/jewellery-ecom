import Arrows from './Arrows'
import SliderContent from './SliderContent'
import './slider.css'
import { useEffect, useState } from 'react'
import Indicator from './Indicator'

function Slider({sliderImage,showIndicator=true,showArrows=true,hoverMode=false}){
    const [activeIndex,setActiveIndex] = useState(0);

    useEffect(()=>{
        if(hoverMode){return} 
        const stopInterval = setInterval(()=>{
            nextSlide();
        },5000);
        return ()=>clearInterval(stopInterval);
    },[activeIndex])
    

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
    {showArrows && <Arrows prevSlide={prevSlide} nextSlide={nextSlide}/>}
    {showIndicator && <Indicator activeIndex={activeIndex} indicatorCount={sliderImage.length} />}
    <SliderContent sliderImage={sliderImage} activeIndex= {activeIndex}/>
    </ div>)
}

export default Slider