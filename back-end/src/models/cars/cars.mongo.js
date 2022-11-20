const mongoose = require("mongoose")

const carsSchema = new mongoose.Schema({
  carId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model("Cars", carsSchema)