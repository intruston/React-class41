import React, { useState } from "react";
import categories from "./fake-data/all-categories";
import products from "./fake-data/all-products";

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
      <ul className="products">
        {filteredProducts.map((product) => (
          <li className="products--item" key={product.id}>
            <div className="product">
              <img
                className="product--image"
                alt={product.id}
                src={product.image}
              ></img>
              <span className="product--title">{product.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
