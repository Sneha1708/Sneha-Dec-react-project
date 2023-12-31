import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/users?email=${encodeURIComponent(email)}`
      );

      const user = response.data[0];

      if (user && user.password === password) {
        console.log("Login successful:", user);
        setAuth(user.name); // Set authentication state with the name
        navigate("/");
      } else {
        setError("Invalid login credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/864471218/photo/purple-and-pink-sunset-light-on-the-island.jpg?s=612x612&w=0&k=20&c=m4eU-kmVQ7_MziSJhOUCGBggEtW26lCtOBN-qWWq8Pg=")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <br />
      <Paper
        elevation={3}
        style={{ padding: 60, maxWidth: 400, margin: "auto", marginTop: 50 }}
      >
        <div>
          <center>
            <Typography component="h3" variant="h3">
              Welcome
            </Typography>
            <p>Please Login to continue</p>
          </center>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            {error && (
              <div style={{ color: "red", textAlign: "center" }}>{error}</div>
            )}

            <div>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </div>
          </form>
          <center>
            <p>
              Don't have an account? Please sign up to continue
              <Link to="/SignUp">SignUp</Link>
            </p>
          </center>
        </div>
      </Paper>
      <div>
        <br />
      </div>
    </div>
  );
};

export default LoginPage;