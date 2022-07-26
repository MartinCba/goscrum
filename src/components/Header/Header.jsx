import "./Header.styles.css";
import { useNavigate } from "react-router";
export const Header = () => {
  const navigate = useNavigate(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
  return (
    <header>
      <img src="/img/goscrum.png" alt="Logo" />
      <div onClick={handleLogout}>x</div>
    </header>
  );
};
