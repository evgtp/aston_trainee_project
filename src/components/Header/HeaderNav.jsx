import { NavLink } from "react-router-dom";

import "./Header.css";

function HeaderNav() {
  return (
    <div className="header__nav">
      <NavLink to="/favorites">Избранное</NavLink>
      <NavLink to="/history">История</NavLink>
    </div>
  );
}

export default HeaderNav;
