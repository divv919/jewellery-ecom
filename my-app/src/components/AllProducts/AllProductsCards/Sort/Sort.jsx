const Sort = ({
  setShowSortDropdown,
  showSortDropdown,
  searchParams,
  setSearchParams,
}) => {
  const handleSortChange = (e) => {
    setShowSortDropdown(false);
    const param = new URLSearchParams(searchParams);
    console.log(e.target.value);
    if (e.target.value === "relevance") {
      param.delete("sort");
    } else {
      param.delete("sort");
      param.append("sort", e.target.value);
    }
    setSearchParams(param);
  };

  return (
    <div className="sort-button">
      <p>Sort By :</p>
      <p
        onClick={() => setShowSortDropdown((prev) => !prev)}
        className="sort-by"
      >
        {!searchParams.get("sort") && "Relevance"}
        {searchParams.get("sort") &&
          searchParams.get("sort").includes("price_asc") &&
          "Price : Low to High"}
        {searchParams.get("sort") &&
          searchParams.get("sort").includes("price_desc") &&
          "Price : High to Low"}
      </p>

      <div
        className="sorting-dropdown"
        style={{ display: showSortDropdown ? "flex" : "none" }}
      >
        <button
          value="relevance"
          className={searchParams.get("sort") ? "sort-by" : "sort-by active"}
          onClick={handleSortChange}
        >
          Relevance
        </button>
        <button
          value="price_asc"
          className={
            searchParams.get("sort") &&
            searchParams.get("sort").includes("price_asc")
              ? "sort-by active"
              : "sort-by"
          }
          onClick={handleSortChange}
        >
          Price : Low to High
        </button>
        <button
          value="price_desc"
          className={
            searchParams.get("sort") &&
            searchParams.get("sort").includes("price_desc")
              ? "sort-by active"
              : "sort-by"
          }
          onClick={handleSortChange}
        >
          Price : High to Low
        </button>
      </div>
    </div>
  );
};
export default Sort;
