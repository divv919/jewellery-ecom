import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import Image from "../Image/Image";
import SectionHeader from "../SectionHeader/SectionHeader";
export default function CategoryCard({
  categoryData,
  isErrorLoading,
  isLoading,
}) {
  let navigate = useNavigate();
  function handleNavigation(categoryName, categoryType) {
    navigate(`/shop/${categoryType}/${categoryName}`);
  }
  if (isErrorLoading) {
    return <h1>ERROR LOADING</h1>;
  }
  if (isLoading) {
    return <h1>LOADING</h1>;
  } else {
    return (
      <div className="category-show-section">
        <SectionHeader
          title={categoryData.title}
          subtitle={categoryData.subtitle}
        />
        <div className="category-all-cards">
          {categoryData.categories.map((item, index) => {
            return (
              <div
                onClick={() => handleNavigation(item.name, categoryData.name)}
                className="category-card"
                key={index}
              >
                <div className="category-card-image">
                  <Image height="100%" width="100%" src={item.url} />
                </div>
                <p>{item.description}</p>
                {/* <p>{item.description}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
