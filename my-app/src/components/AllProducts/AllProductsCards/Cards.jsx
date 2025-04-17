import Sort from "./Sort/Sort";
import AllCards from "./AllCards/AllCards";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

const Cards = ({ showSortDropdown, setShowSortDropdown, navigate }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  return (
    <div className="cards-section">
      <Sort
        showSortDropdown={showSortDropdown}
        setShowSortDropdown={setShowSortDropdown}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      <AllCards
        navigate={navigate}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        params={params}
      />
    </div>
  );
};

export default Cards;
