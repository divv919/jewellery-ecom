import Sort from "./Sort/Sort";
import AllCards from "./AllCards/AllCards";
import { useSearchParams } from "react-router-dom";
const Cards = ({
  categoryData,
  showSortDropdown,
  setShowSortDropdown,
  navigate,
  isLoading,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="cards-section">
      <Sort
        showSortDropdown={showSortDropdown}
        setShowSortDropdown={setShowSortDropdown}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      <AllCards
        categoryData={categoryData}
        navigate={navigate}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Cards;
