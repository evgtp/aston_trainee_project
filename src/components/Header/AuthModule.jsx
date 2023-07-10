import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./Header.css";
import { useAuth } from "../../Hooks/use-auth";
import { removeUser } from "../../store/slices/userSlice";

function AuthModule() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return !isAuth ? (
    <div className="auth-module">
      <Link to="/sign-in">Login</Link>
      <Link to="/sign-up">Register</Link>
    </div>
  ) : (
    <div className="auth-module">
      <p>{email}</p>
      <button onClick={() => dispatch(removeUser())}>Logout</button>
    </div>
  );
}

export default AuthModule;
