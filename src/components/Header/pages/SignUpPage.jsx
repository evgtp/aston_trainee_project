import { Alert, Box, Button, Container, TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { createUser } from "../../../firebase";
import { isLoggedIn } from "../../../storage/session";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";

function SignUpPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, [navigate]);

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password || !repeatPassword) {
      setError("Please fill out all the fields.");
      return;
    }
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    try {
      await createUser(email, password).then(({ user }) => {
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
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <h1>Register</h1>
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
        <TextField
          label="Repeat password"
          variant="outlined"
          type="password"
          autoComplete="repeat-new-password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          sx={{ mt: 3 }}
          fullWidth
        />
        <Button variant="contained" type="submit" sx={{ mt: 3 }} fullWidth>
          Register
        </Button>
        <Box sx={{ mt: 2 }}>
          Already have an account? <Link to="/sign-in">Login</Link>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUpPage;
