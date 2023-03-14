import React from "react";

function CategoryAll({ categories, selectedCategory, categoryClick }) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          className={`categories--item${
            category === selectedCategory ? "-selected" : ""
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
