import React,{ useState } from "react";

export const FavouritesContext = React.createContext({
  favourites: [],
  handleClick: () => {},
});

export function FavouritesProvider({ children }) {
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
      {children}
    </FavouritesContext.Provider>
  );
};
