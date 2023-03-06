import React from "react";

function ProductList({ filteredProducts }) {
    return (
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
    );
  }

export default ProductList;