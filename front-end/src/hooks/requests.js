import axios from "axios";

const API_URL = "v1"

// Load cars and return as JSON.
async function httpGetAllCars() {
  const response = await axios.get(`${API_URL}/cars`)
  return response.data;
}

async function httpRegisterCar(car, token) {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": token
  }

  const response = await axios.post(`${API_URL}/cars`, {
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

  const response = await axios.delete(`${API_URL}/cars/${id}`, {
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