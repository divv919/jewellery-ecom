import './styles.css'
import Image from '../Image/Image'
import { useEffect } from 'react'
import { useParams } from "react-router"
import { useFetch } from '../../hooks/useFetch'
export default function ProductShow(){
   
    const params = useParams();
    const {data, isLoading, error, reFetch} = useFetch(`http://localhost:3000/api/productInfo/${params.id}`)
 
    
if(isLoading){
    return(<>
    <h1>Loading..</h1>
    </>)
}

if(error){
    return(<>
    <h1>error..</h1>
    
    </>)
}
const productData = data[0];

    return(
    <div><div style={{display : "flex"}}>
        <div className="product-image-section">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTbOUrhv819NMqMyyEYEOje7dWROHg4nOzA&s" height="80%" width ="80%" />
            <button>Add to </button>
            <button>Buy now</button>
        </div>
        <div className="product-details-section">
        <div className="product-name" >

        <h2>{ productData.name}</h2>     
        </div>
        <div className="product-rating">
            <p>5 star</p>
        </div>
        <div className='product-price' >
        <h1> {productData.price} </h1>
            </div>
        <div className='product-details' >
                <p>Product details</p>
        </div>
        <div className='product-review'>
            <p>Product Review</p>
        </div>

        
        </div>
        </div>
                <div className='related-items-section'></div>
                </div>
    )
}