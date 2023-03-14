import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CategoryAll from "./CategoryAll";
import ProductList from "./ProductList";
import Product from "./Product";
import FavouritesContext from "./FavouritesContext";
import FavouriteList from "./FavouriteList";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favourites, setFavourites] = useState([]);

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

  const handleClick = (productId) => {
    if (favourites.includes(productId)) {
      setFavourites(favourites.filter((id) => id !== productId));
    } else {
      setFavourites([...favourites, productId]);
    }
  };

  return (
    <Router>
      <div className="nav">
        <Link to={"/"} className="nav-link">
          {`Products`}
        </Link>
        <Link to={"/favourites"} className="nav-link">
          {`Favourites`}
        </Link>
      </div>
      <FavouritesContext.Provider value={{ favourites, handleClick }}>
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
          <Route
            path="/favourites"
            element={<FavouriteList favourites={favourites} />}
          />
        </Routes>
      </FavouritesContext.Provider>
    </Router>
  );
}

export default App;
