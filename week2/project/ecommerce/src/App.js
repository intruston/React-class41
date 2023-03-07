import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryAll from "./CategoryAll";
import ProductList from "./ProductList";
import Product from './Product';

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
    <Router>
    <>
      <h1>Products</h1>
      <CategoryAll
        categories={categories}
        selectedCategory={selectedCategory}
        categoryClick={categoryClick}
      />
    <Routes>
        <Route path="/" element={<ProductList selectedCategory={selectedCategory} />} />
        <Route path="/product/:id" element={<Product />} />
    </Routes>
    </>
    </Router>
  );
}

export default App;
