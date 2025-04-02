import './styles.css'
import { Link, useNavigate} from 'react-router-dom'
import Image from '../Image/Image';
export default function CategoryCard({categoryData,isLoading,isErrorLoading}){

    let navigate = useNavigate();
    function handleNavigation(category){
        navigate(`/products?category=${category}`)
    }
    if(isErrorLoading){
        return(<h1>ERROR LOADING</h1>)
    }
    if(isLoading){
        return(<h1>LOADING</h1>)
    }
    else{
    
    return(
            <div className="category-show-section">
                <div className="category-heading">
                    <h1>{categoryData.title}</h1>
                    <p>{categoryData.subtitle}</p>
                </div>
            <div className="category-all-cards">
            {categoryData.links.map((item,index)=>{
                return(
                    <div onClick={()=>handleNavigation(item.name)} className="category-card" key={index} >
                        <div className='category-card-image'>
                        <Image height="100%" width="100%" src={item.url} />
                        </div>
                        <p>{item.description}</p>
                        {/* <p>{item.description}</p> */}
                    </div>
                    
                )
            })}
            </div>
            </div>
    )
}

}