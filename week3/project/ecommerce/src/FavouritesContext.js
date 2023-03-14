import React, { useState } from "react";

const FavouritesContext = React.createContext({
  favourites: [],
  handleClick: () => {},
});

export const FavouritesProvider = (props) => {
  const [favourites, setFavourites] = useState([]);

  const handleClick = (productId) => {
    if (favourites.includes(productId)) {
      setFavourites(favourites.filter((id) => id !== productId));
    } else {
      setFavourites([...favourites, productId]);
    }
  };

  return (
    <FavouritesContext.Provider value={{ favourites, handleClick }}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
