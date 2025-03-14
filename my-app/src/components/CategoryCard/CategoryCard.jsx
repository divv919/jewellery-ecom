import './styles.css'
import { Link, useNavigate} from 'react-router-dom'
export default function CategoryCard({categoryData}){
    let navigate = useNavigate();
    function handleNavigation(category){
        navigate(`/categories/${category}`)
        
    }
    return(
            <div className="section">
                <div className="heading-category">
                    <h1>Explore our categories</h1>
                </div>
            <div className="all-cards">
            {categoryData.map((item,index)=>{
                return(
                    <div onClick={()=>handleNavigation(item.title.replace(/ /g,''))} className="category-card" key={index} >
                        <img src={item.src}/>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                    
                )
            })}
            </div>
            </div>
    )

}