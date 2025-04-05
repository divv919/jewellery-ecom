import { useEffect, useState, useRef} from "react";
import { useNavigate,useParams, useSearchParams } from "react-router-dom";
import "./styles.css";
import Image from "../Image/Image";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
// import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartIcon from "./HeartIcon/HeartIcon";
function Cards({ categoryData, categoryTitle }) {
  
  const {categoryType} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
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
  function handleChange(e){
    const {name,value,checked} = e.target;
   const param = new URLSearchParams(searchParams);
   const existingValues = param.getAll(name);
   if(checked){
      param.append(name,value);
   }
   else{
      const updatedValues = existingValues.filter((v)=>(v!=value))
      param.delete(name);
      updatedValues.forEach((v)=>param.append(name,v));
   }
   setSearchParams(param);
  }

 
  return (
    <div className="section">
      <div className="products-section-heading">
        <p>Explore our products</p>
      </div>
      <div className="products-section-items">
        <div className="filter-options">
          <div className="filter-heading">
            <p>Filters</p>
            <p className="clear-filters-button">Clear All</p>
          </div>
          <div className="filter-option"> 
            <fieldset style={{display : categoryType=="gender"?"none":"flex"}}>
              <legend>Gender</legend>
              <label><input type="checkbox" name="gender" value="Men" onChange={handleChange} checked={searchParams.getAll('gender').includes('Men')}/>Men</label>
              <label><input type="checkbox" name="gender" value="Women" onChange={handleChange} checked={searchParams.getAll('gender').includes('Women')}/>Women</label>
              <label><input type="checkbox" name="gender" value="Kids"onChange={handleChange} checked={searchParams.getAll('gender').includes('Kids')}/>Kids</label>


            </fieldset>
            <fieldset style={{display : categoryType=="type"?"none":"flex"}}>
              <legend>Jewellery Type</legend>
              <label><input type="checkbox"  name="type" value="Bangle" onChange={handleChange} checked={searchParams.getAll('type').includes('Bangle')}/>Bangles</label>
              <label><input type="checkbox"  name="type" value="Bracelet" onChange={handleChange} checked={searchParams.getAll('type').includes('Bracelet')}/>Bracelets</label>
              <label><input type="checkbox" name="type" value="Earring" onChange={handleChange}checked={searchParams.getAll('type').includes('Earring')} />Earrings</label>
              <label><input type="checkbox" name="type" value="Ring" onChange={handleChange} checked={searchParams.getAll('type').includes('Ring')}/>Rings</label>
              <label><input type="checkbox" name="type" value="Pendant" onChange={handleChange} checked={searchParams.getAll('type').includes('Pendant')}/>Pendants</label>
              <label><input type="checkbox" name="type" value="Nosepin" onChange={handleChange} checked={searchParams.getAll('type').includes('Nosepin')}/>Nosepins</label>
              <label><input type="checkbox" name="type" value="Chain" onChange={handleChange} checked={searchParams.getAll('type').includes('Chain')}/>Chains</label>
              <label><input type="checkbox" name="type" value="Necklace" onChange={handleChange}checked={searchParams.getAll('type').includes('Necklace')}/>Necklaces</label>
              <label><input type="checkbox" name="type" value="Mangalsutra" onChange={handleChange} checked={searchParams.getAll('type').includes('Mangalsutra')}/>Mangalsutras</label>
            </fieldset>
            <fieldset>
              <legend>Price Range</legend>
              <label><input type="checkbox" name="price" value="0-25000" onChange={handleChange} checked={searchParams.getAll('price').includes('0-25000')}/>Under ₹25,000</label>
              <label><input type="checkbox" name="price" value="25000-50000" onChange={handleChange} checked={searchParams.getAll('price').includes('25000-50000')}/>₹25,000 - ₹50,000</label>
              <label><input type="checkbox" name="price" value="50000-100000" onChange={handleChange} checked={searchParams.getAll('price').includes('50000-100000')}/>₹50,000 - ₹100,000</label>
              <label><input type="checkbox" name="price" value="100000-1000000" onChange={handleChange} checked={searchParams.getAll('price').includes('100000-1000000')}/>Above ₹100,000</label>


            </fieldset>
            <fieldset style={{display : categoryType=="occasion"?"none":"flex"}}>
              <legend>Occasion</legend>
              <label><input type="checkbox" name = "occasion" value="Casual" onChange={handleChange} checked={searchParams.getAll('occasion').includes('Casual')}/>Casual</label>
              <label><input type="checkbox" name = "occasion" value="Traditional" onChange={handleChange} checked={searchParams.getAll('occasion').includes('Traditional')}/>Traditional</label>
              <label><input type="checkbox" name = "occasion" value="Office" onChange={handleChange} checked={searchParams.getAll('occasion').includes('Office')}/>Office Wear</label>



            </fieldset>
            <fieldset>
              <legend>Purity</legend>
              <label><input type="checkbox" name="karatage" value= "14k" checked={searchParams.getAll('karatage').includes('14k')} onChange={handleChange}/>14K</label>
              <label><input type="checkbox" name="karatage" value= "18k" checked={searchParams.getAll('karatage').includes('18k')}  onChange={handleChange}/>18K</label>
              <label><input type="checkbox" name="karatage" value= "22k"  checked={searchParams.getAll('karatage').includes('22k')} onChange={handleChange}/>22K</label>

              


            </fieldset>
          </div>
        </div>
        
      <div className="all-cards">
        { categoryData.length==0? (<h1>No data</h1>) :
        categoryData.map((item, index) => (
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
