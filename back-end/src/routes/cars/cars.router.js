const express = require("express")
const { verifyJWT } = require("../../services/jwt")

const { httpGetAllCars, httpAddNewCar, httpDeleteCar } = require("./cars.controller")

const carsRouter = express.Router()

carsRouter.get("/", httpGetAllCars)
carsRouter.post("/", verifyJWT, httpAddNewCar);
carsRouter.delete("/:carId", verifyJWT, httpDeleteCar);

module.exports = carsRouter