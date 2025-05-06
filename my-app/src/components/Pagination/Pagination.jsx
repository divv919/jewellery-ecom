import "./styles.css";
const Pagination = ({ totalPages = 1, currentPage, setCurrentPage }) => {
  const getPageNumber = () => {
    const pages = [];
    if (totalPages === 1) {
      return pages;
    } else if (totalPages <= 7) {
      for (let i = 0; i < totalPages; i++) {
        pages.push(i + 1);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("...");
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };
  const pages = getPageNumber();
  return (
    <div className="pagination-container">
      {pages.map((page) => {
        if (page === "...") {
          return <div>...</div>;
        }
        return (
          <button
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active page" : "page"}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
