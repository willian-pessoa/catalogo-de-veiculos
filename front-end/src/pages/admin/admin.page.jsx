import React from "react";
import { useState, useEffect } from "react";

import "./admin.styles.scss";

import RegisterCar from "../../components/register-car/register-car.component";

import useCars from "../../hooks/useCars";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const { cars, submitCar, deleteCar } = useCars();
  const [car, setCar] = useState({
    name: "",
    brand: "",
    imageUrl: "none",
    price: "",
  });

  const handleDeleteCar = (id) => {
    deleteCar(id, token);
    navigate(0);
  };

  const handleEditCar = (carToEdit) => {
    setCar({
      ...carToEdit,
    });
    setOpenForm(true);
  };

  useEffect(() => {
    let tempToken = localStorage.getItem("token");
    setToken(tempToken);
  }, []);

  return (
    <div className="admin">
      <div className="title">
        <h3>Tabela de Registros</h3>
      </div>
      <div className="cadastrar">
        <button onClick={() => setOpenForm(true)}>Cadastrar Carro</button>
      </div>
      <div className="registros">
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Marca</td>
              <td>Nome</td>
              <td>Preço</td>
              <td>Url Imagem</td>
              <td>Editar</td>
              <td>Deletar</td>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, idx) => {
              return (
                <tr key={idx}>
                  <td>{car.carId}</td>
                  <td>{car.brand}</td>
                  <td>
                    {car.name.length > 14
                      ? car.name.substring(0, 15) + "..."
                      : car.name}
                  </td>
                  <td>{car.price}</td>
                  <td>
                    {car.imageUrl.length > 14
                      ? car.imageUrl.substring(0, 15) + "..."
                      : car.imageUrl}
                  </td>
                  <td onClick={() => handleEditCar(car)} className="td-edit">
                    Editar
                  </td>
                  <td
                    onClick={() => handleDeleteCar(car.carId)}
                    className="td-close"
                  >
                    &#10005;
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {openForm && (
        <RegisterCar
          deleteCar={deleteCar}
          token={token}
          setOpenForm={setOpenForm}
          car={car}
          submitCar={submitCar}
          setCar={setCar}
        />
      )}
    </div>
  );
};

export default Admin;
