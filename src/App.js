import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Error404 } from "./components/views/Error404";
import { Login } from "./components/views/Login/Login.jsx";
import { Register } from "./components/views/Register/Register";
import { Tasks } from "./components/views/Tasks";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Tasks />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};
