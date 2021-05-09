import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./LandingPage.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: "./background1.svg",
    backgroundSize: "100vw auto",
    backgroundRepeat: "no-repeat",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#111B47",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: "#111B47",
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/api/users/login`,
        userInfo
      );
      console.log(response.data);
      dispatch({ type: "user/addUser", payload: response.data });
      history.push("/profile");
    } catch (err) {
      alert("Login Failed");
    }
  };
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="loginpage">
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon backgroundColor= "primary" />
        </Avatar>
        <Typography style={{fontWeight: "bold"}} component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate >
          <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={userInfo.email}
            onChange={handleChange}
            label="Email Address"
            name="email"
            size="small"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            value={userInfo.password}
            onChange={handleChange}
            required
            fullWidth
            size="small"
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Log In
          </Button>
          <Grid justify="center" container>
          <Grid item>
            <h5>
                Don't have an account? 
              <Link style={{color: "#37447e", marginLeft: "5px", fontWeight: "bold"}} href="/signup" variant="body2">
                Sign up
              </Link>
              </h5>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}
