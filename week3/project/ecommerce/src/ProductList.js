import React, { useContext } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import Favourite from "./Favourite";
import FavouritesContext from "./FavouritesContext";

function ProductList({ selectedCategory, favourites }) {
  let url = "https://fakestoreapi.com/products";
  if (selectedCategory) {
    url = "https://fakestoreapi.com/products/category/" + selectedCategory;
  }

  const { data, isLoading, error } = useFetch(url, [selectedCategory]);
  const products = data;
  const { handleClick } = useContext(FavouritesContext);

  if (isLoading) {
    return <div>Something is loading...</div>;
  }

  if (error) {
    return <div>Sorry, we have an error: {error}</div>;
  }

  if (products) {
    return (
      <ul className="products">
        {products.map((product) => (
          <li className="products--item" key={product.id}>
            <div className="product">
              <img
                className="product--image"
                alt={product.id}
                src={product.image}
              ></img>
              <Favourite
                productId={product.id}
                isFavourited={favourites.includes(product.id)}
                onClick={() => handleClick(product.id)}
              />
              <Link to={`/product/${product.id}`} className="product--title">
                {product.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductList;
