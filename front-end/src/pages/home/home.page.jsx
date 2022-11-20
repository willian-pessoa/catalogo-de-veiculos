import React from "react";
import { useState, useEffect } from "react";

import "./home.styles.scss";

import useCars from "../../hooks/useCars";

import CarCard from "../../components/car-card/car-card.component";

const Home = () => {
  const { cars } = useCars();

  return (
    <div className="home">
      <div className="buffer"></div>
      <div className="title"><h3>Catálogo de Veículos</h3></div>
      <div className="card-container">
        {cars.map((car, idx) => {
          return (
            <CarCard
              key={idx}
              name={car.name}
              brand={car.brand}
              price={car.price}
              imageUrl={car.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
