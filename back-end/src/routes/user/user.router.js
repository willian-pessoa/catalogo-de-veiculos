const express = require("express")

const { httpToDoLogin } = require("./user.controller")

const userRouter = express.Router()

userRouter.post("/login", httpToDoLogin)

module.exports = userRouter