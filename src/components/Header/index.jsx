import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import AuthModule from "../AuthModule/AuthModule";
import HeaderNav from "./HeaderNav";

import "./Header.css";
import useTheme from "../../Hooks/useTheme";

function Header() {
  const { isDark, setIsDark } = useTheme();
  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <button className="btn-header" onClick={() => setIsDark(!isDark)}>
          Change theme
        </button>
        <HeaderNav />
        <div className="header__auth-module">
          <AuthModule />
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
