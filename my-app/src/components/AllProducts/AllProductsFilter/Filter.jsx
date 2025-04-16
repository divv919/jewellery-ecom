import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
const Filter = ({ setShowSortDropdown }) => {
  const { categoryType } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
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

  return (
    <div className="filter-options">
      <div className="filter-heading">
        <p>Filters</p>
        <p className="clear-filters-button" onClick={handleClearFilter}>
          Clear All
        </p>
      </div>
      <div className="filter-option">
        <fieldset
          style={{ display: categoryType == "gender" ? "none" : "flex" }}
        >
          <legend>Gender</legend>
          <label>
            <input
              type="checkbox"
              name="gender"
              value="Men"
              onChange={handleChange}
              checked={searchParams.getAll("gender").includes("Men")}
            />
            Men
          </label>
          <label>
            <input
              type="checkbox"
              name="gender"
              value="Women"
              onChange={handleChange}
              checked={searchParams.getAll("gender").includes("Women")}
            />
            Women
          </label>
          <label>
            <input
              type="checkbox"
              name="gender"
              value="Kids"
              onChange={handleChange}
              checked={searchParams.getAll("gender").includes("Kids")}
            />
            Kids
          </label>
        </fieldset>
        <fieldset style={{ display: categoryType == "type" ? "none" : "flex" }}>
          <legend>Jewellery Type</legend>
          <label>
            <input
              type="checkbox"
              name="type"
              value="Bangle"
              onChange={handleChange}
              checked={searchParams.getAll("type").includes("Bangle")}
            />
            Bangles
          </label>
          <label>
            <input
              type="checkbox"
              name="type"
              value="Bracelet"
              onChange={handleChange}
              checked={searchParams.getAll("type").includes("Bracelet")}
            />
            Bracelets
          </label>
          <label>
            <input
              type="checkbox"
              name="type"
              value="Earring"
              onChange={handleChange}
              checked={searchParams.getAll("type").includes("Earring")}
            />
            Earrings
          </label>
          <label>
            <input
              type="checkbox"
              name="type"
              value="Ring"
              onChange={handleChange}
              checked={searchParams.getAll("type").includes("Ring")}
            />
            Rings
          </label>
          <label>
            <input
              type="checkbox"
              name="type"
              value="Pendant"
              onChange={handleChange}
              checked={searchParams.getAll("type").includes("Pendant")}
            />
            Pendants
          </label>
          <label>
            <input
              type="checkbox"
              name="type"
              value="Nosepin"
              onChange={handleChange}
              checked={searchParams.getAll("type").includes("Nosepin")}
            />
            Nosepins
          </label>
          <label>
            <input
              type="checkbox"
              name="type"
              value="Chain"
              onChange={handleChange}
              checked={searchParams.getAll("type").includes("Chain")}
            />
            Chains
          </label>
          <label>
            <input
              type="checkbox"
              name="type"
              value="Necklace"
              onChange={handleChange}
              checked={searchParams.getAll("type").includes("Necklace")}
            />
            Necklaces
          </label>
          <label>
            <input
              type="checkbox"
              name="type"
              value="Mangalsutra"
              onChange={handleChange}
              checked={searchParams.getAll("type").includes("Mangalsutra")}
            />
            Mangalsutras
          </label>
        </fieldset>
        <fieldset>
          <legend>Price Range</legend>
          <label>
            <input
              type="checkbox"
              name="price"
              value="0-25000"
              onChange={handleChange}
              checked={searchParams.getAll("price").includes("0-25000")}
            />
            Under ₹25,000
          </label>
          <label>
            <input
              type="checkbox"
              name="price"
              value="25000-50000"
              onChange={handleChange}
              checked={searchParams.getAll("price").includes("25000-50000")}
            />
            ₹25,000 - ₹50,000
          </label>
          <label>
            <input
              type="checkbox"
              name="price"
              value="50000-100000"
              onChange={handleChange}
              checked={searchParams.getAll("price").includes("50000-100000")}
            />
            ₹50,000 - ₹100,000
          </label>
          <label>
            <input
              type="checkbox"
              name="price"
              value="100000-1000000"
              onChange={handleChange}
              checked={searchParams.getAll("price").includes("100000-1000000")}
            />
            Above ₹100,000
          </label>
        </fieldset>
        <fieldset
          style={{ display: categoryType == "occasion" ? "none" : "flex" }}
        >
          <legend>Occasion</legend>
          <label>
            <input
              type="checkbox"
              name="occasion"
              value="Casual"
              onChange={handleChange}
              checked={searchParams.getAll("occasion").includes("Casual")}
            />
            Casual
          </label>
          <label>
            <input
              type="checkbox"
              name="occasion"
              value="Traditional"
              onChange={handleChange}
              checked={searchParams.getAll("occasion").includes("Traditional")}
            />
            Traditional
          </label>
          <label>
            <input
              type="checkbox"
              name="occasion"
              value="Office"
              onChange={handleChange}
              checked={searchParams.getAll("occasion").includes("Office")}
            />
            Office Wear
          </label>
        </fieldset>
        <fieldset>
          <legend>Purity</legend>
          <label>
            <input
              type="checkbox"
              name="karatage"
              value="14k"
              checked={searchParams.getAll("karatage").includes("14k")}
              onChange={handleChange}
            />
            14K
          </label>
          <label>
            <input
              type="checkbox"
              name="karatage"
              value="18k"
              checked={searchParams.getAll("karatage").includes("18k")}
              onChange={handleChange}
            />
            18K
          </label>
          <label>
            <input
              type="checkbox"
              name="karatage"
              value="22k"
              checked={searchParams.getAll("karatage").includes("22k")}
              onChange={handleChange}
            />
            22K
          </label>
        </fieldset>
      </div>
    </div>
  );
};

export default Filter;
