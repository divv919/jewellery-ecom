function Arrows({prevSlide,nextSlide}) {
  return (
    <div className="arrows">
      <span onClick={prevSlide} className="prev" >
        &#10094;
      </span>
      <span onClick={nextSlide} className="next" >
        &#10095;
      </span>
    </div>
  );
}

export default Arrows;