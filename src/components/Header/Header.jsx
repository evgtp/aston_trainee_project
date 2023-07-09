import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import AuthModul from "./AuthModul";
import HeaderNav from "./HeaderNav";
import { useState, useEffect } from "react";
import { getSession, isLoggedIn } from "../../storage/session";

import "./Header.css";

function Header() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
    }
    const session = getSession();
    setEmail(session.email);
  }, [navigate]);

  return !isLoggedIn() ? (
    <>
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={Logo} alt="Логотип" />
        </Link>
        <div className="header__auth-modul">
          <AuthModul />
        </div>
      </header>
      <Outlet />
    </>
  ) : (
    <>
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={Logo} alt="Логотип" />
        </Link>
        <HeaderNav />
        <div className="header__auth-modul">
          <AuthModul />
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
