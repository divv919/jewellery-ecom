import './styles.css'


export default function FilterOption({ updateCategory, selectedCategory }) {
    const categories = ["Necklace", "Mangalsutra", "Bangle", "Bracelet", "Earring", "Ring", "Chain", "Nosepin", "Pendant"];

    return (
        <div className="filter-container">
            <button><b>Categories</b></button>

            {categories.map((category) => (
                <button
                    key={category}
                    className={selectedCategory === category ? "active" : ""}
                    onClick={() => updateCategory(category)}
                >
                    {category}
                </button>
            ))}
    <button  onClick={()=> updateCategory('')}>Clear Filter</button>

        </div>
    );
}