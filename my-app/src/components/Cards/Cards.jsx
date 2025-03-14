import { useEffect, useState , useRef} from "react";
import "./styles.css";

function Cards({ categoryData }) {
    const pageSize = 12;
    const [totalPages, setTotalPages] = useState(1);
    const [activePage, setActivePage] = useState(1);
    const [activeCard,setActiveCard] = useState(null);
    const [activeIndex,setActiveIndex] = useState(0);
    const endInterval = useRef(null);
    
    useEffect(()=>{
        window.scrollTo({top : 0, left : 0, behavior: "smooth"});
    },[activePage])

    useEffect(() => {
        setTotalPages(Math.ceil(categoryData.length/pageSize));  
    }, [categoryData]); 

    useEffect(()=>{
        if(activeCard){
            endInterval.current = setInterval(() => {
                setActiveIndex((prev)=>{
                    return(prev=== 2 ? 0 : prev+1)
                });
            }, 3000);
        }
        return ()=> clearInterval(endInterval.current)
    },[activeCard])
    

    const newCategoryData = categoryData.slice(
        (activePage - 1) * pageSize,
        activePage * pageSize
    );

    function handleNextPage() {
        if (activePage < totalPages) setActivePage(activePage + 1);
    }

    function handlePrevPage() {
        if (activePage > 1) setActivePage(activePage - 1);
    }
    const handleMouseOver = (index)=>{
        if(activeCard!==index){
            setActiveCard(index);
            setActiveIndex(1);} 
    }

    return (
        <div className="section">
            <div className="heading-category">
                <h1>Explore our categories</h1>
            </div>
            <div className="all-cards">

                {newCategoryData.map((item, index) => (
                    <div className="card"
                    onMouseOver={()=>handleMouseOver(index)} 
                    onMouseLeave={()=>{setActiveCard(null);}} 
                    key={`${activePage}-${index}`}
>
                        <div className="imgview">
                            <div className="image-carousel" style={{transform : activeCard===index&&`translateX(-${activeIndex*100}%)`}}>

                                <div  className="img1">
                                
                                   {/* <div className="test1">1</div> */}
                                    <img   src={item.url1} onError={(e)=>{e.target.onerror=null; e.target.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPNrz_iZxUtDGZgDMyqkUX1pZFVRXUWuUCw&s'}} />
                                </div>
                                <div className="img2">
                                {/* <div className="test2">1</div> */}
                                    <img src={item.url2} onError={(e)=>{e.target.onerror=null; e.target.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPNrz_iZxUtDGZgDMyqkUX1pZFVRXUWuUCw&s'}} />
                                </div>
                                <div className="img3">
                                {/* <div className="test3">1</div> */}
                                
                                    <img src={item.url3} onError={(e)=>{e.target.onerror=null; e.target.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPNrz_iZxUtDGZgDMyqkUX1pZFVRXUWuUCw&s'}}  />
                                </div>
                            
                            </div>
                        </div>
                        <p>{item.price}</p>
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>

            <div className="pagination-container">
                <button className="prev" disabled={activePage === 1} onClick={handlePrevPage}>
                    &#10094;
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
                    <button
                        key={item}
                        onClick={() => setActivePage(item)}
                        className={item === activePage ? "active-page page" : "page"}
                    >
                        {item}
                    </button>
                ))}

                <button className="next" disabled={activePage === totalPages} onClick={handleNextPage}>
                    &#10095;
                </button>
            </div>
        </div>
    );
}

export default Cards;
