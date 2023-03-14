import React from "react";

const FavouritesContext = React.createContext({
  favourites: [],
  handleClick: () => {},
});

export default FavouritesContext;
