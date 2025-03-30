import SortOption from "./SortOption.jsx";
import FilterOption from "./FilterOption.jsx";
import './styles.css'
export default function SortAndFilter({selectedSort,selectedCategory,updateSort,updateCategory}){
    return(
        <>
       <div className="sortAndFilterContainer">
       <div className="sortAndFilter">
            <SortOption selectedSort={selectedSort} updateSort={updateSort}/>
            <FilterOption selectedCategory={selectedCategory} updateCategory={updateCategory}/>
        </div>
       </div>
        </>
    )
}