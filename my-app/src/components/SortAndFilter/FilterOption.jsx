import './styles.css'
import { useState } from 'react'
export default function FilterOption(){
    return(
        <>
        <div className='filter-container'>
        <button><b>Categories</b></button>
        <button>Price - Low to High</button>
            <button>Price - High to Low</button>
            <button>Newest First</button>
            <button>Popularity</button>
            
        </div>
        </>
    )
}