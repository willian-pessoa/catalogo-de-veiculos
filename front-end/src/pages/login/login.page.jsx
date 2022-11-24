import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./login.styles.scss";

import { toDoLogin } from "../../services/login";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const loged = await toDoLogin(name, password);
    if (loged) {
      console.log(loged);
      return navigate("/");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <label>
          Usuario
          <input onChange={(e) => setName(e.target.value)} type="text" />
        </label>
        <label>
          Senha
          <input onChange={(e) => setPassword(e.target.value)} type="text" />
        </label>
        <button onClick={() => handleLogin()}>Entrar</button>
      </div>
      <div className="login-demo">
        <p>
          Este é um aplicativo teste, use: <br />
          <span className="highlight">Usuario: admin123 / Senha: admin</span>
          <br />
          para acessar como admin, ou use <br />
          <span className="highlight">Usuario: normal123 / Senha: normal</span>
          <br />
          para acessar como usuario normal.
        </p>
      </div>
    </div>
  );
};

export default Login;
