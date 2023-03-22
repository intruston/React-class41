import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CategoryAll from "./CategoryAll";
import Product from "./Product";
import { FavouritesProvider } from "./FavouritesContext";
import FavouriteList from "./FavouriteList";

function App() {
  return (
    <Router>
      <div className="nav">
        <Link to={"/"} className="nav-link">
          Products
        </Link>
        <Link to={"/favourites"} className="nav-link">
          Favourites
        </Link>
      </div>
      <FavouritesProvider>
        <Routes>
          <Route path="/" element={<CategoryAll />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/favourites" element={<FavouriteList />} />
        </Routes>
      </FavouritesProvider>
    </Router>
  );
}

export default App;
