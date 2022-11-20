import React from "react";
import { useNavigate } from "react-router-dom";

import "./register-car.styles.scss";

const RegisterCar = ({ token, car, submitCar, setCar, setOpenForm }) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(car);
    const response = await submitCar(car, token);
    if (response) {
      setCar({
        name: "",
        brand: "",
        imageUrl: "none",
        price: "",
      });
      setOpenForm(false);
      navigate(0);
    }
  };

  return (
    <div className="form-car">
      <div onClick={() => setOpenForm(false)} className="close">
        &#10005;
      </div>
      <div className="form">
        <label>
          Nome do Carro
          <input
            type="text"
            value={car.name}
            onChange={(e) =>
              setCar((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </label>
        <label>
          Marca do Carro
          <input
            type="text"
            value={car.brand}
            onChange={(e) =>
              setCar((prev) => ({ ...prev, brand: e.target.value }))
            }
          />
        </label>
        <label>
          Preço
          <input
            type="number"
            value={car.price}
            onChange={(e) =>
              setCar((prev) => ({ ...prev, price: e.target.value }))
            }
          />
        </label>
        <label>
          Url Imagem do Carro
          <input
            type="text"
            value={car.imageUrl}
            onChange={(e) =>
              setCar((prev) => ({ ...prev, imageUrl: e.target.value }))
            }
          />
        </label>
        <button onClick={() => handleSubmit()}>Enviar</button>
      </div>
    </div>
  );
};

export default RegisterCar;
