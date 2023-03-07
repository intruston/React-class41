import React, { useState, useEffect }  from "react";

function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    let url = "https://fakestoreapi.com/products";
    if (selectedCategory) {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [selectedCategory]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
          <span className="product--title">{product.title}</span>
        </div>
      </li>
    ))}
  </ul>
  );
}

export default ProductList;