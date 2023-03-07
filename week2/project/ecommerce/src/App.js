import React, { useState, useEffect } from "react";
import CategoryAll from "./CategoryAll";
import ProductList from "./ProductList";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json))
      .catch((error) => console.error(error));
  }, []);

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
      <CategoryAll
        categories={categories}
        selectedCategory={selectedCategory}
        categoryClick={categoryClick}
      />
      <ProductList selectedCategory={selectedCategory} />
    </>
  );
}

export default App;
