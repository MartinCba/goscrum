import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("second");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email | !password) {
      alert(
        "Es indispensable para que aprendas cosas interesantes que completes"
      );
    } else {
      window.location = "https://cybermap.kaspersky.com";
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Iniciar sesión</h1>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
};
