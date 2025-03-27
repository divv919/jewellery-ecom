import './styles.css'
import { useState } from 'react'
export default function SortOption(){
    
    return(
        <div className='sort-container'>
            <button><b>Sort By</b></button>
            <button>Price - Low to High</button>
            <button>Price - High to Low</button>
            <button>Newest First</button>
            <button>Popularity</button>
        </div>
    )
}