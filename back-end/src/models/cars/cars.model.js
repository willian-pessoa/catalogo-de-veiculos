const { getKavakCars } = require("../../../data/carsData")

const cars = require("./cars.mongo")

async function populateCars() {
  console.log("Populating data cars...")
  const carsData = await getKavakCars()
  for (const car of carsData){
    await saveCar(car)
  }
  console.log("Populate completed")
}

async function loadCarsData() {
  const firstCar = await findCar({
    carId: 1
  })
  if (firstCar) {
    console.log("Cars data already loaded!")
    return
  } else {
    await populateCars();
  }
}

async function findCar(filter) {
  return await cars.findOne(filter)
}

async function getLatestCarId() {
  const latestCar = await cars.findOne().sort("-carId")

  if (!latestCar) {
    return 1
  }

  return latestCar.carId;
}


async function getAllCars(skip, limit) {
  return await cars
    .find({}, { "_id": 0, "__v": 0 })
    .sort({ price: 1 })
    .skip(skip)
    .limit(limit)
}

async function saveCar(car) {
  await cars.findOneAndUpdate({
    carId: car.carId
  }, car, {
    upsert: true,
  })
}

async function findCar(filter) {
  return await cars.findOne(filter)
}

async function existsCarWithId(carId) {
  return await findCar({ carId: carId });
}

async function deleteCarById(carId) {
  return await cars.deleteOne({ carId: carId })
}

module.exports = {
  getAllCars,
  saveCar,
  findCar,
  existsCarWithId,
  deleteCarById,
  loadCarsData,
  getLatestCarId,
}