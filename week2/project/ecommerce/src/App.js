import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryAll from "./CategoryAll";
import ProductList from "./ProductList";
import Product from "./Product";

function App() {
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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Products</h1>
              <CategoryAll
                categories={categories}
                selectedCategory={selectedCategory}
                categoryClick={categoryClick}
              />
              <ProductList selectedCategory={selectedCategory} />
            </>
          }
        />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
