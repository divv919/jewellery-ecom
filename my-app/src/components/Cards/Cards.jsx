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
      <div className="heading-category">
        <h1>{categoryTitle}</h1>
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
                      <div className="img1">
                  {/* <div className="test1">1</div> */}
                  <Image src={i} height="100%" width="100%" />
                </div>
                  )
                })}
                
              
              </div>
            </div>
            <div className="heart">
                <HeartIcon index={index} />
              </div>
            <p className="price-tag"><b>₹{item.price}</b></p>
            <p>
              {item.name}

            </p>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Cards;
