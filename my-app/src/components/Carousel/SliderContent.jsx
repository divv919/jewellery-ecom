import sliderImage from '../../assets/sliderImage'

function SliderContent({activeIndex, sliderImage}){
    return(
        <div className='slider-content'
        style={{transform : `translateX(-${activeIndex*100}%)`}}>    {sliderImage.map((slide,index)=>{
        return <div className='slide' key={index}>
            {/* <h1>{slide.title}</h1> */}
            <img src={slide.urls}></img>
        </div>
        }
    )}
    </div>
)
    
}

export default SliderContent;