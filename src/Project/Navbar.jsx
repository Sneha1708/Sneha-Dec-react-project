import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { authState, logout } = useAuth();
  const { isAuthenticated, username } = authState;

  console.log("Username in Navbar:", username);

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "darkblue" }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <h2 style={{ fontStyle: "revert-layer" }}>SkillSynC💤</h2>&emsp;
        <Button
          onClick={() => navigate("/")}
          variant="text"
          type="submit"
          style={{ color: "white" }}
        >
          Home
        </Button>
        &emsp;
        {isAuthenticated ? (
          <>
            <p style={{ color: "white", marginRight: "10px" }}>
              Welcome,{username}!
            </p>
            <Button
              onClick={handleLogout}
              variant="contained"
              style={{ backgroundColor: "#6B3FA0" }}
              type="submit"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => navigate("LoginPage")}
              variant="contained"
              style={{ backgroundColor: "#6B3FA0" }}
              type="submit"
            >
              Login
            </Button>
            &emsp;
            <Button
              onClick={() => navigate("SignUp")}
              variant="contained"
              type="submit"
              style={{ backgroundColor: "#6B3FA0" }}
            >
              SignUp
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
