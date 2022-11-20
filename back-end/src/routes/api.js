const express = require("express")

const carsRouter = require("./cars/cars.router")
const userRouter = require("./user/user.router")

const api = express.Router()

api.use("/cars", carsRouter)
api.use("/user", userRouter)

module.exports = api