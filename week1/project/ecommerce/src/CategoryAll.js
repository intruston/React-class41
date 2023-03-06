import React from "react";

function CategoryAll({ categories, selectedCat, categoryClick }) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          className={`categories--item${
            category === selectedCat ? "-selected" : ""
          }`}
          key={category}
          onClick={() => categoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryAll;