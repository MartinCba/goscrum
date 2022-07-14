import React from "react";
import { useFormik } from "formik";

export const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!values.password) {
      errors.password = " Password is Required";
    }
    return errors;
  };
  const onSubmit = () => {
    localStorage.setItem("logged", "yes");
  };

  const formik = useFormik({ initialValues, validate, onSubmit });

  const { handleSubmit, handleChange, values, errors } = formik;

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
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <div>{errors.email}</div>}
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <div>{errors.password}</div>}
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
};
