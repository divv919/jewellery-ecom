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
            <div className="section">
                <div className="heading-category">
                    <h1>Explore our categories</h1>
                </div>
            <div className="all-cards">
            {categoryData.map((item,index)=>{
                return(
                    <div onClick={()=>handleNavigation(item.name)} className="category-card" key={index} >
                        {/* <img src={item.src}/> */}
                        <Image height="100%" width="100%" src={item.src} />
                        <h1>{`Explore ${item.name}s`}</h1>
                        <p>{item.description}</p>
                    </div>
                    
                )
            })}
            </div>
            </div>
    )
}

}