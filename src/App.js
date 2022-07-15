import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Error404 } from "./components/views/Error404";
import { Login } from "./components/views/Login/Login.jsx";
import { Register } from "./components/views/Register/Register";
import { Tasks } from "./components/views/Tasks";
import { AnimatePresence, motion } from "framer-motion";

const RequiredAuth = ({ children }) => {
  if (!localStorage.getItem("logged")) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children;
};

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Tasks />
              </motion.div>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Login />
            </motion.div>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Register />
            </motion.div>
          }
        ></Route>
        <Route
          path="*"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Error404 />
            </motion.div>
          }
        ></Route>
      </Routes>
    </AnimatePresence>
  );
};
