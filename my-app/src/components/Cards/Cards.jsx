import { useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Image from "../Image/Image";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
// import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartIcon from "./HeartIcon/HeartIcon";
function Cards({ categoryData, categoryTitle }) {
  const navigate = useNavigate();
  // const [isFavorite,setIsFavorite] = useState(false)
  const pageSize = 12;
 
  const [activeCard, setActiveCard] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const endInterval = useRef(null);

  // console.log(categoryData)


  useEffect(() => {
    if (activeCard) {
      endInterval.current = setInterval(() => {
        setActiveIndex((prev) => {
          return prev === 3 ? 0 : prev + 1;
        });
      }, 3000);
    }
    return () => clearInterval(endInterval.current);
  }, [activeCard]);

  // const newCategoryData = categoryData.slice(
  //   (activePage - 1) * pageSize,
  //   activePage * pageSize
  // );

  
  const handleMouseOver = (index) => {
    if (activeCard !== index) {
      setActiveCard(index);
      setActiveIndex(1);
    }
  };
  function handleMouseClick(id){
    navigate(`/product/${id}`)
  }

  return (
    <div className="section">
      <div className="products-section-heading">
        <p>Explore our products</p>
      </div>
      <div className="products-section-items">
        <div className="filter-options">
          <div className="filter-heading">
            Filters
          </div>
          <div className="filter-option"> 
            <fieldset>
              <legend>Gender</legend>
              <label><input type="checkbox"/>Male</label>
              <label><input type="checkbox"/>Female</label>
              <label><input type="checkbox"/>Kids</label>


            </fieldset>
            <fieldset>
              <legend>Jewellery Type</legend>
              <label><input type="checkbox"/>Bangles</label>
              <label><input type="checkbox"/>Bracelets</label>
              <label><input type="checkbox"/>Earrings</label>
              <label><input type="checkbox"/>Rings</label>
              <label><input type="checkbox"/>Pendants</label>
              <label><input type="checkbox"/>Nosepins</label>
              <label><input type="checkbox"/>Chains</label>
              <label><input type="checkbox"/>Necklaces</label>
              <label><input type="checkbox"/>Mangalsutras</label>
            </fieldset>
            <fieldset>
              <legend>Price Range</legend>
              <label><input type="checkbox"/>Under ₹25,000</label>
              <label><input type="checkbox"/>₹25,000 - ₹50,000</label>
              <label><input type="checkbox"/>₹50,000 - ₹100,000</label>

              <label><input type="checkbox"/>Above ₹100,000</label>


            </fieldset>
            <fieldset>
              <legend>Occasion</legend>
              <label><input type="checkbox"/>Casual</label>
              <label><input type="checkbox"/>Traditional</label>
              <label><input type="checkbox"/>Office Wear</label>



            </fieldset>
            <fieldset>
              <legend>Purity</legend>
              <label><input type="checkbox"/>18K</label>
              <label><input type="checkbox"/>20K</label>
              <label><input type="checkbox"/>22K</label>

              


            </fieldset>
          </div>
        </div>
      <div className="all-cards">
        {categoryData.map((item, index) => (
          <div
            className="card"
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => {
              setActiveCard(null);

            }}
            onClick={()=>handleMouseClick(item.id)}
            key={item.id}
          >
            <div className="imgview">
              <div
                className="image-carousel"
                style={{
                  transform:
                    activeCard === index &&
                    `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {item.images.map((i,index)=>{
                 return(
                      <div className="img1" key={i.image_id}>
                  {/* <div className="test1">1</div> */}
                  <Image src={i.image_url} height="100%" width="100%" />
                </div>
                  )
                })}
                
              
              </div>
            </div>
            <div className="heart">
                <HeartIcon index={index} />
              </div>
            <p className="products-price">₹{item.price}</p>
            <p className="products-name">
              {item.name}

            </p>
          </div>
        ))}
      </div>
      </div>

      
    </div>
  );
}

export default Cards;
