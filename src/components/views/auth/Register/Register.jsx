import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../Auth.styles.css";
import { Link } from "react-router-dom";

export const Register = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("//localhost:3000/auth/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const initialValues = {
    userName: "",
    password: "",
    email: "",
    teamID: "",
    role: "",
    continent: "",
    region: "",
  };

  const required = "* Campo obligatorio";

  const validationSchema = () =>
    Yup.object().shape({
      userName: Yup.string()
        .min(4, "La cantidad mínima de caracteres es 4")
        .required(required),
      password: Yup.string().required(required),
      email: Yup.string().email("Debe ser un email válido").required(required),
      role: Yup.string().required(required),
      continent: Yup.string().required(required),
      region: Yup.string().required(required),
    });

  const onSubmit = () => {
    alert();
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    values,
    setFieldValue,
  } = formik;

  return (
    <>
      <div className="auth">
        <form onSubmit={handleSubmit}>
          <h1>Registro</h1>
          <div>
            <label>Nombre de usuario</label>
            <input
              type="text"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              className={errors.userName && touched.userName ? "error" : ""}
              onBlur={handleBlur}
            />
            {errors.userName && touched.userName && (
              <span className="error-message">{errors.userName}</span>
            )}
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className={errors.password && touched.password ? "error" : ""}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={errors.email && touched.email ? "error" : ""}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div>
            <label>Rol</label>
            <select
              name="role"
              value={values.role}
              onChange={handleChange}
              className={errors.role && touched.role ? "error" : ""}
              onBlur={handleBlur}
            >
              <option value="">Seleccionar rol</option>
              <option value="Team Member">Team Member</option>
              <option value="Team Leader">Team Leader</option>
            </select>
            {errors.role && touched.role && (
              <span className="error-message">{errors.role}</span>
            )}
          </div>
          <div>
            <label>Continente</label>
            <select
              name="continent"
              value={values.continent}
              onChange={handleChange}
              className={errors.continent && touched.continent ? "error" : ""}
              onBlur={handleBlur}
            >
              <option value="">Seleccionar continente</option>
              <option value="America">America</option>
              <option value="Europa">Europa</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.continent && touched.continent && (
              <span className="error-message">{errors.continent}</span>
            )}
          </div>
          <div>
            <label>Región</label>
            <select
              name="region"
              value={values.region}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.region && touched.region ? "error" : ""}
            >
              <option value="">Seleccionar Región</option>
              <option value="Latam">Latam</option>
              <option value="Brasil">Brasil</option>
              <option value="America del Norte">America del Norte</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.region && touched.region && (
              <span className="error-message">{errors.region}</span>
            )}
          </div>
          <input
            type="hidden"
            name="teamID"
            value="9cdbd108-f924-4383-947d-8f0c651d0dad"
          />
          <div>
            <button type="submit">Enviar</button>
          </div>
          <div>
            <Link to="/login">Iniciar sesión</Link>
          </div>
        </form>
      </div>
    </>
  );
};
