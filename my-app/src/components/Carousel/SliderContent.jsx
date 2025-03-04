export default function SliderContent({activeIndex,sliderImage}){
    return(
        <section>
           {sliderImage.map((slide,index)=>{
    return <div key={index}
    className={activeIndex===index?"slides active":"inactive"}
    >
        <img className="slide-image" src={slide.urls}/>
        <h2 className="slide-title">{slide.title}</h2>
        <h3 className="slide-text">{slide.description}</h3>
    </div>
})}
        </section>
    )
} 

