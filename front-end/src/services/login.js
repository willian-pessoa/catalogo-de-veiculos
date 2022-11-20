import axios from "axios";

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
