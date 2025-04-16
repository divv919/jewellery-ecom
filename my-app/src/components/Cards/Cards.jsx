import "./styles.css";

function Cards({ categoryData, categoryTitle }) {
  const { categoryType } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const endInterval = useRef(null);

  useEffect(() => {
    if (activeCard) {
      endInterval.current = setInterval(() => {
        setActiveIndex((prev) => {
          return prev === 3 ? 0 : prev + 1;
        });
      }, 3000);
    }
    return () => clearInterval(endInterval.current);
  }, [activeCard]);

  const handleMouseOver = (index) => {
    if (activeCard !== index) {
      setActiveCard(index);
      setActiveIndex(1);
    }
  };
  const handleClearFilter = () => {
    const param = new URLSearchParams(searchParams);
    // console.log(param.get("sort"));
    if (param.get("sort")) {
      const newParam = new URLSearchParams();
      newParam.append("sort", param.get("sort"));
      setSearchParams(newParam);
    } else {
      setSearchParams("");
    }
  };
  function handleMouseClick(id) {
    navigate(`/product/${id}`);
  }
  function handleChange(e) {
    setShowSortDropdown(false);
    const { name, value, checked } = e.target;
    const param = new URLSearchParams(searchParams);
    const existingValues = param.getAll(name);
    if (checked) {
      param.append(name, value);
    } else {
      const updatedValues = existingValues.filter((v) => v != value);
      param.delete(name);
      updatedValues.forEach((v) => param.append(name, v));
    }
    setSearchParams(param);
  }
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
}

export default Cards;
