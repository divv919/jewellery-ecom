import sliderImage from "../../assets/sliderImage";
import Image from "../Image/Image";
function SliderContent({ activeIndex, sliderImage }) {
  return (
    <div
      className="slider-content"
      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
    >
      {sliderImage.map((slide, index) => {
        return (
          <div className="slide" key={index}>
            {/* <h1>{slide.title}</h1> */}
            <Image height="100%" width="100%" src={slide.image_url}></Image>
          </div>
        );
      })}
    </div>
  );
}

export default SliderContent;
