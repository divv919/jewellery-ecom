import { useEffect, useState } from "react"
import './styles.css'
function Cards({categoryData}){
    const pageSize = 12;
    const [totalPages,setTotalPages] = useState(1);
    const [activePage,setActivePage] = useState(1);
    
    useEffect(()=>{
        if(categoryData.length>pageSize){
            setTotalPages(Math.trunc(categoryData.length/pageSize));
        }
    },[])
    let newCategoryData = categoryData.slice((activePage-1)*pageSize,activePage*pageSize);

    function handleNextPage(){
        setActivePage(activePage+1)
    }
    function handlePrevPage(){
        setActivePage(activePage-1)
    }
    return(
        
        <div className="section">
            <div className="heading-category"><h1>Explore our categories</h1></div>
                <div className="all-cards">
                    {newCategoryData.map((item,index)=>{
                        return(
                        <div className="card" key={index}>
                                        <img src={item.src}/>
                                        <p>
                                            {item.price}
                                        </p>
                            <h3>{item.title}</h3>
                        </div>
                        )
                    })}
                </div>
                <div className="pagination-container">
                <button 
                className="prev" 
                disabled={activePage===1} 
                onClick={handlePrevPage}>
                    &#10094;
                    </button>
                    {
                        Array(totalPages).fill(null).map((item,index)=>{
                            item = index+1;
                            if(item===activePage-2 ||item===activePage+2){return(
                                <p>...</p>
                            );}
                            else if(item===activePage-1 || item===activePage+1|| item===activePage){
                            return(
                                <button key={index} 
                                onClick={()=>{setActivePage(item)}}
                                className={item===activePage?"active-page page":"page"} 
                                id={index}>{item}</button>
                            )}
                            return;
                        })
                    }
                <button className="next" disabled={activePage===totalPages} onClick={handleNextPage}>&#10095;</button>

                </div>
        </div>
    )
}
export default Cards


    // const [hoverIndex,setHoverIndex] = useState(null)

{/* <span style={ {marginLeft : hoverIndex===index?"10px":"0px",
                            color : hoverIndex===index?"orange":"black",
                            transition: "all 0.5s ease"
                } }>   &#10095; </span> */}