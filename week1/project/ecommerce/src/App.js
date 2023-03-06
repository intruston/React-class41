import React, { useState } from "react";
import categories from "./fake-data/all-categories";
import products from "./fake-data/all-products";
import CategoryAll from './CategoryAll';
import ProductList from './ProductList';

function App() {
    const [selectedCat, setSelectedCat] = useState("");
  
    const categoryClick = (category) => {
      if (category === selectedCat) {
        setSelectedCat("");
      } else {
        setSelectedCat(category);
      }
    };
  
    let filteredProducts;
    if (selectedCat) {
      filteredProducts = products.filter(
        (product) => product.category === selectedCat.replace("FAKE: ", "")
      );
    } else {
      filteredProducts = products;
    }
  
    return (
      <>
        <h1>Products</h1>
        <CategoryAll
          categories={categories}
          selectedCat={selectedCat}
          categoryClick={categoryClick}
        />
        <ProductList filteredProducts={filteredProducts} />
      </>
    );
  }

export default App;