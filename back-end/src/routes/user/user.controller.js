const jwt = require("jsonwebtoken")

function httpToDoLogin(req, res) {
  const { name, password } = req.body

  if (name === "admin123" && password === "admin") {
    const id = 7
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24
    })
    return res.status(200).json({ auth: true, token: token, msg: "Login with Success" })
  } else if (name === "normal123" && password === "normal") {
    return res.status(200).json({ auth: false, token: null, msg: "Login with Success" })
  } else {
    return res.status(404).json({ msg: "User don't founded" })
  }
}

module.exports = {
  httpToDoLogin,

}