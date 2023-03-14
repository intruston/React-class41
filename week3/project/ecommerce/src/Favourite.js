import React from "react";
import heartRegular from "./heart-regular.svg";
import heartSolid from "./heart-solid.svg";

function Favourite({ productId, isFavourited, onClick }) {
  const heartClick = () => {
    onClick(productId);
  };

  return (
    <div className="product-image--favourite-container" onClick={heartClick}>
      <img src={isFavourited ? heartSolid : heartRegular} alt="Favourite" />
    </div>
  );
}

export default Favourite;
