const { getAllCars, saveCar, getLatestCarId, deleteCarById, existsCarWithId } = require("../../models/cars/cars.model")

async function httpGetAllCars(req, res) {
  const cars = await getAllCars()
  return res.status(200).json(cars)
}

async function httpAddNewCar(req, res) {
  let car = req.body;
  let latestCarId = Number(await getLatestCarId())

  if (!car.name || !car.brand || !car.price || !car.imageUrl) {
    return res.status(400).json({
      error: "Missing required car property"
    })
  }

  if (!car.carId) {
    car.carId = latestCarId + 1
  }

  await saveCar(car)
  return res.status(201).json(car)
}

async function httpDeleteCar(req, res) {
  const carId = req.params.carId

  const existCar = await existsCarWithId(carId)

  if (!existCar) {
    return res.status(404).json({
      error: "Car not found"
    })
  }

  const deleted = await deleteCarById(carId)

  if (!deleted) {
    return res.status(400).json({
      error: "Car not deleted"
    })
  }

  return res.status(200).json({
    ok: true
  })
}

module.exports = {
  httpGetAllCars,
  httpAddNewCar,
  httpDeleteCar,
}