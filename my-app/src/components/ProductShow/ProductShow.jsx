import './styles.css'
import Image from '../Image/Image'
export default function ProductShow(){
    return(
    <div><div style={{display : "flex"}}>
        <div className="product-image-section">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTbOUrhv819NMqMyyEYEOje7dWROHg4nOzA&s" height="80%" width ="80%" />
            <button>Add to cart</button>
            <button>Buy now</button>
        </div>
        <div className="product-details-section">
        <div className="product-name" >
        <h2>Gold Bangle</h2>     
        </div>
        <div className="product-rating">
            <p>5 star</p>
        </div>
        <div className='product-price' >
        <h1> product price </h1>
            </div>
        <div className='product-details' >
                <p>Product details</p>
        </div>
        <div className='product-review'>
            <p>Product Review</p>
        </div>

        <div className='product-qna'>
        <p>Question and answers</p>
        </div>
        </div>
        </div>
                <div className='related-items-section'></div>
                </div>
    )
}