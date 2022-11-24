import axios from "axios";

// Change API_URL if the server it's in a different port that the front-end
// Example: http://localhost:8000/v1/cars
const API_URL = "v1/cars"

// Load cars and return as JSON.
async function httpGetAllCars() {
  const response = await axios.get(`${API_URL}`)
  return response.data;
}

async function httpRegisterCar(car, token) {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": token
  }

  const response = await axios.post(`${API_URL}`, {
    ...car
  }, {
    headers: headers
  }).catch((error) => {
    console.log(error)
  })
  return response
}

async function httpDeleteCar(id, token) {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": token
  }

  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: headers
  }).catch((error) => {
    console.log(error)
  })
  return response.data
}

export {
  httpGetAllCars,
  httpRegisterCar,
  httpDeleteCar
}