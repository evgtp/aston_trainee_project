import { NavLink } from "react-router-dom";
import { useAuth } from "../../Hooks/use-auth";

import "./Header.css";

function HeaderNav() {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div className="header__nav">
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/history">History</NavLink>
    </div>
  ) : (
    <></>
  );
}

export default HeaderNav;
