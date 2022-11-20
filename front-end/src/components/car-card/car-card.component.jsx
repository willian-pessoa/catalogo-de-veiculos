import React from "react";

import "./car-card.styles.scss";

const CarCard = ({ name, brand, price, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div className="title">{brand + " " + name}</div>
      <div className="price">
        {price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default CarCard;
