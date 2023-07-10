import { NavLink } from "react-router-dom";
import { useAuth } from "../../Hooks/use-auth";

import "./Header.css";

function HeaderNav() {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div className="header__nav">
      <NavLink to="/favorites">Избранное</NavLink>
      <NavLink to="/history">История</NavLink>
    </div>
  ) : (
    <></>
  );
}

export default HeaderNav;
