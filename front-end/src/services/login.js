import axios from "axios";

// Change API_URL if the server it's in a different port that the front-end
// Example: http://localhost:8000/v1/user/login
const API_URL = "v1/user/login"

export const toDoLogin = async (name, password) => {
  if (!name || !password) {
    return false
  }

  let isLoged = false;

  await axios.post(API_URL, {
    name: name,
    password: password,
  }).then((response) => {
    isLoged = true
    console.log(response)
    localStorage.setItem("auth", response.data.auth)
    localStorage.setItem("token", response.data.token)
  }).catch((error) => {
    console.log(error)
    localStorage.setItem("auth", false)
    localStorage.setItem("token", null)
  })

  return isLoged
}
