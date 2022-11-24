const mongoose = require("mongoose")

// Change MONGO_URL to connect to your own MongoDB Atlas database
const MONGO_URL = `mongodb+srv://willian-pessoa:${process.env.MONGODB_PASSWORD}@cluster0.kmztz8f.mongodb.net/?retryWrites=true&w=majority`

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!!")
})

mongoose.connection.on("error", (err) => {
  console.error(err)
})

async function mongoConnect(){
  await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect(){
  await mongoose.disconnect
}

module.exports = {
   mongoConnect,
   mongoDisconnect
}