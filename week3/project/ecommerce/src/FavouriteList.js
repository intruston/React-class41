import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Favourite from "./Favourite";
import { FavouritesContext } from "./FavouritesContext";

function FavouriteList() {
  const [favouriteProducts, setFavouriteProducts] = useState([]);
  const { favourites, handleClick } = useContext(FavouritesContext);

  useEffect(() => {
    const fetchFavouriteProducts = async () => {
      try {
        const products = await Promise.all(
          favourites.map(async (id) => {
            const response = await fetch(
              `https://fakestoreapi.com/products/${id}`
            );
            if (!response.ok) {
              throw new Error("Network response was not ok :(");
            }
            const product = await response.json();
            return product;
          })
        );
        setFavouriteProducts(products);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchFavouriteProducts();
  }, [favourites]);

  if (favouriteProducts.length === 0) {
    return (
      <>
        <h1>Favourites</h1>
        <p>You haven't chosen any favourites yet!</p>
      </>
    );
  }

  return (
    <>
      <h1>Favourites</h1>
      <ul className="products">
        {favouriteProducts.map((product) => (
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
    </>
  );
}

export default FavouriteList;
