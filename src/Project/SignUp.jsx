import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import useSignup from "./useSignup";

const SignUp = () => {
  const signIn = useSignup();

  return (
    <div>
      <Paper
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: "cover",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "95vh",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "500px",
              width: "480px",
            }}
          >
            <br></br>
            <center>
              <Typography component="h3" variant="h3">
                Welcome
              </Typography>
              <p>Please sign up to continue</p>
            </center>
            <br></br>
            <center>
              <Box>
                <br></br>
                <TextField
                  label="*userName"
                  size="small"
                  style={{ width: "350px" }}
                  inputRef={signIn.nameRef}
                />
              </Box>
              <Box>
                <br></br>
                <TextField
                  label="*Email"
                  size="small"
                  style={{ width: "350px" }}
                  inputRef={signIn.mailRef}
                />
              </Box>
              <Box>
                <br></br>
                <TextField
                  label="* Password"
                  size="small"
                  style={{ width: "350px" }}
                  type="password"
                  inputRef={signIn.pwRef}
                />
              </Box>
              <Box>
                <br></br>
                <TextField
                  label="*Confirm Password"
                  size="small"
                  style={{ width: "350px" }}
                  type="password"
                  inputRef={signIn.cpwRef}
                />
              </Box>
              <br></br>
              <Button
                variant="contained"
                style={{ width: "350px", marginTop: "12px" }}
                onClick={signIn.addNewUser}
              >
                Sign up
              </Button>
              <br></br>
              {signIn.error && (
                <Typography color="error" style={{ marginTop: "8px" }}>
                  {signIn.error}
                </Typography>
              )}
            </center>
          </div>
        </Container>
      </Paper>
    </div>
  );
};

export default SignUp;
