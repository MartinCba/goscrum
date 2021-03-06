import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Login } from "./components/views/auth/Login/Login.jsx";
import { Register } from "./components/views/auth/Register/Register.jsx";
import { Tasks } from "./components/views/Tasks";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";

const Error404 = lazy(() => import("./components/views/Error404/Error404.jsx"));

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
              <Suspense fallback={<>...</>}>
                <Error404 />
              </Suspense>
            </motion.div>
          }
        ></Route>
      </Routes>
    </AnimatePresence>
  );
};
