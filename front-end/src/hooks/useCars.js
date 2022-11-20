import { useCallback, useEffect, useState } from "react";

import { httpGetAllCars, httpDeleteCar, httpRegisterCar } from "./requests";

function useCars() {
  const [cars, setCars] = useState([]);

  const getCars = useCallback(async () => {
    const fetchedCars = await httpGetAllCars();
    setCars(fetchedCars);
  }, []);

  useEffect(() => {
    getCars();
  }, [getCars]);

  const submitCar = useCallback(async (car, token) => {
    let price = String(car.price).replace(".", "").replace(",", "")
    const tempCar = {
      ...car,
      price: Number(price)
    }
    const response = await httpRegisterCar(tempCar, token);
    return response
  }, [])

  const deleteCar = useCallback(async (id, token) => {
    const response = await httpDeleteCar(id, token);
    return response
  }, []);

  return {
    cars,
    submitCar,
    deleteCar,
  }
}

export default useCars