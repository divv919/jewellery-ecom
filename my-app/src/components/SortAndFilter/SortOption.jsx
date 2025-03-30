import './styles.css'
import { useState } from 'react'
export default function SortOption({ updateSort, selectedSort }) {
    return (
        <div className="sort-container">
            <button ><b>Sort By</b></button>
            <button className={selectedSort === "price_asc" ? "active" : ""} onClick={() => updateSort("price_asc")}>Price - Low to High</button>
            <button className={selectedSort === "price_desc" ? "active" : ""} onClick={() => updateSort("price_desc")}>Price - High to Low</button>
            <button className={selectedSort === "popularity" ? "active" : ""} onClick={() => updateSort("popularity")}>Popularity</button>

        </div>
    );
}