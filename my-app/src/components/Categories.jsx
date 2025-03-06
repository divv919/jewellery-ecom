import categoryData from "../assets/categoryData"
import { useState } from "react"
function Categories(){
    const [hoverIndex,setHoverIndex] = useState(null)
    function arrowSlide(index){
        setHoverIndex(index);
    }
    function handleMouseOut(){
        setHoverIndex(null);
    }
    return(
        
        <div className="section">
            <div className="heading-category"><h1>Explore our categories</h1></div>
            <div className="all-cards">
            {categoryData.map((item,index)=>{
                return(
                    <div 
                    onMouseOver={()=>arrowSlide(index)}
                    onMouseOut={handleMouseOut}
                    className="card" key={index}>
                <h3>{item.title}</h3>
                <img src={item.src}/>
                <p>{item.description}
                <span style={ {marginLeft : hoverIndex===index?"10px":"0px",
                            color : hoverIndex===index?"orange":"black",
                            transition: "all 0.5s ease"

                } }>   &#10095; </span>
                </p>
              
            </div>
                )
            })}
            
            </div>
            
        </div>
    )
}
export default Categories