import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import ProductList from "./ProductList";

function CategoryAll() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Something is loading...</div>;
  }

  if (error) {
    return <div>Sorry, we have an error: {error}</div>;
  }

  const categoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <h1>Products</h1>
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
      <ProductList selectedCategory={selectedCategory} />
    </>
  );
}

export default CategoryAll;
