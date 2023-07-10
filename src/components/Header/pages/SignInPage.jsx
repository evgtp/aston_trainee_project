import { Alert, Box, Button, Container, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";
import { useAuth } from "../../../Hooks/use-auth";

function SignInPage() {
  const dispatch = useDispatch();

  const { isAuth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [navigate]);

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter your username and password.");
      return;
    }
    setError("");
    try {
      await signInUser(email, password).then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="sign-in">
      <h1>Login</h1>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        {error && (
          <Alert severity="error" sx={{ my: 2 }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={onSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mt: 1 }}
            fullWidth
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mt: 3 }}
            fullWidth
          />
          <Button variant="contained" type="submit" sx={{ mt: 3 }} fullWidth>
            Login
          </Button>
          <Box sx={{ mt: 2 }}>
            Don't have an account yet? <Link to="/sign-up">Register</Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default SignInPage;
