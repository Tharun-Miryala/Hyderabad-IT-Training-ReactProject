import BackgroundImg from '../photos/Login_Background.jpg';
import image from '../photos/Login.jpg'
import {Button, Checkbox, FormControlLabel, Grid, InputAdornment, TextField, Avatar, Box, Container, ThemeProvider, createTheme, Stack,} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import { AccountCircle } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const darkTheme = createTheme({
  palette: {
      mode: "dark",
  },
});
const boxstyle = {
  position: "absolute",
  top: "15%",
  left: "12%",
  transform: "translate(-50%, -50)",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
};
const center = {
  position: "relative",
  top: "50%",
  color: "white",
};


const LoginPage = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (uname === "tharun" && pwd === "admin") {
      sessionStorage.setItem("username", uname);
      navigate("/admin");
    } else if (uname === "user" && pwd === "user") {
      sessionStorage.setItem("username", uname);
      navigate("/");
    } else {
      toast.error("Please Enter correct login details")
    }
  };

  return (
    <div>
      <img
        src={BackgroundImg}
        alt=""
        style={{ backgroundSize: "cover", height: "100vh", width: "100%" }}
      />

      <Box sx={boxstyle}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={6}>
            <Box>
              <img
                src={image}
                alt=""
                style={{
                  backgroundSize: "cover",
                  marginTop: "40px",
                  marginLeft: "15px",
                  marginRight: "15px",
                  height: "63vh",
                  color: "#f5f5f5",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Box style={{backgroundSize: "cover", height: "70vh", minHeight: "500px", backgroundColor: "lightseagreen", }}>
              <ThemeProvider theme={darkTheme}>
                <Container>
                  <Box height={35} />
                  <Box sx={center}>
                    <Avatar sx={{ ml: "35px", mb: "4px", bgcolor: "#ffffff" }} style={{ left: "40%" }}>
                      <LockIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                      Log In
                    </Typography>
                  </Box>
                  <Box height={35} />
                  <Grid container spacing={1}>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <TextField
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="name"
                        autoFocus
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      value={uname}
                      onChange={(e) => setUname(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={pwd}
                        onChange={(e) => {
                          setPwd(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                      <Stack direction="row" spacing={2}>
                        <FormControlLabel
                          sx={{ width: "60%", color: 'white' }}
                          control={<Checkbox value="remember" />}
                          label="Remember me"
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        //   color="success"
                        size="large"
                        sx={{
                          mt: '10px',
                          mr: '20px',
                          borderRadius: 28,
                          color: "#ffffff",
                          minWidth: "170px",
                          backgroundColor: "#FF9A01",
                        }}
                        onClick={submitHandler}
                      >
                        Log In
                      </Button>
                      <ToastContainer />
                    </Grid>
                  </Grid>
                </Container>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default LoginPage;


  // https://codesandbox.io/p/sandbox/colors-magic-gtyod?file=%2Fsrc%2Fcomponents%2FLogin.jsx%3A115%2C15


// <Grid container component="main" className="" ml={55} mt={15}>
    //   <CssBaseline />
    //   <Grid className="" item xs={12} sm={8} md={5} component={Paper} elevation={1}>
    //     {" "}
    //     <div className="">
    //       <LockIcon />
    //       <h4>Sign in</h4>
    //       <form className="" noValidate>
    //         <TextField
    //           variant="outlined"
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="username"
    //           label="Username"
    //           name="username"
    //           autoFocus
    //           InputProps={{
    //             endAdornment: (
    //               <InputAdornment position="end">
    //                 <AccountCircle />
    //               </InputAdornment>
    //             ),
    //           }}
    //           value={uname}
    //             onChange={(e) => setUname(e.target.value)}
    //         />
    //         <TextField
    //           variant="outlined"
    //           margin="normal"
    //           required
    //           fullWidth
    //           name="password"
    //           label="Password"
    //           type="password"
    //           id="password"
    //           autoComplete="current-password"
    //           value={pwd}
    //            onChange={(e) => {
    //              setPwd(e.target.value);
    //            }}
    //         />
    //         <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
    //         <Button type="submit" fullWidth variant="contained" color="primary" className="" onClick={submitHandler}>
    //           Sign In
    //         </Button>
    //       </form>
    //     </div>
    //   </Grid>
    // </Grid>