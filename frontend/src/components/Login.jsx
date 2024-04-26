import React, { useState } from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {  Typography, Link ,IconButton, InputAdornment} from "@mui/material";
import { Link as RouterLink,useNavigate} from "react-router-dom";
import axios from "axios";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CustomButton from './CustomBtn/CustomButton'



const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" ,showPassword: false}); 
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const togglePasswordVisibility = () => {
    setUser({ ...user, showPassword: !user.showPassword });
  };
  
  const addHandler = () => {
    console.log("addHandler initialised...");
    axios
      .post("http://localhost:5000/api/student/login", user)
      .then((res) => {
        if (res.data.message === "Login success") {
          alert(res.data.message);
          navigate("/sDashboard");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Error occurred during login:", err);
      });
  };

  return (
    <div
    style={{
        backgroundColor: '#107A7C',
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "35ch",
          borderRadius: "10px",
          "& input::placeholder": {
            color: "white",
          },
          border: "1px solid white",
          borderColor: "white",
        },
        bgcolor: "rgba(255, 255, 255, 0.2)",
        p: 4,
        borderRadius: "20px",
        textAlign: "center",
        height: "400px",
        width: "400px",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        variant="h4"
        style={{ color: "45deg", marginBottom: "20px" }}
      >
        {" "}
         Login
      </Typography>
      <br />
      <div>
        <TextField
          id="outlined-required-email"
          label="Email"
          name="email"
          InputLabelProps={{ style: { color: "white" } }}
          inputProps={{ style: { color: "white" } }}
          onChange={inputHandler}

        />
      </div><br />
      <div>
        <TextField
          id="outlined-required-password"
          label="Password"
          name="password"
          type={user.showPassword ? 'text' : 'password'}
          InputLabelProps={{ style: { color: "white" } }}
          inputProps={{ style: { color: "white" } }}
          onChange={inputHandler}
          value={user.password}

          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {user.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
         ></TextField>
       
      </div>
      <Box sx={{display:'flex',justifyContent:'center',textAlign:'center'}}>
      <CustomButton 
            backgroundColor='#00bbf0'
            color='#fff'
            buttonText="Login"
            path="#"
            onClick={addHandler}
              />
      </Box>
   
      <Typography
        variant="body2"
        style={{ marginTop: "20px", color: "white" }}
      >
        Don't have an account?{" "}
        <Link component={RouterLink}  to="/signup" style={{ color: "white" }}>
          Signup
        </Link>
      </Typography>
    </Box>
  </div>
  )
}

export default Login
