import { Link, useNavigate } from "react-router-dom";
import { getSession, isLoggedIn, endSession } from "../../storage/session";
import { useState, useEffect } from "react";

import "./Header.css";

function AuthModul() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!isLoggedIn()) {
    }
    const session = getSession();
    setEmail(session.email);
  }, [navigate]);

  const onLogout = () => {
    endSession();
    setEmail("");
    navigate("/");
  };

  return !email ? (
    <div className="auth-modul">
      <Link to="/signin">Login</Link>
      <Link to="/signup">Register</Link>
    </div>
  ) : (
    <div className="auth-modul">
      <p>{email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default AuthModul;
