import SortOption from "./SortOption.jsx";
import FilterOption from "./FilterOption.jsx";
import './styles.css'
export default function SortAndFilter(){
    return(
        <>
       <div className="sortAndFilterContainer">
       <div className="sortAndFilter">
            <SortOption />
            <FilterOption />
        </div>
       </div>
        </>
    )
}