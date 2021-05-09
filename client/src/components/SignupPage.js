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
import { useHistory } from "react-router";
import axios from "axios";
import "./LandingPage.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "17vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#111B47",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    backgroundColor: "#111B47",
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignupPage() {
  const history = useHistory();
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleSignup = async () => {
    try {
      axios
        .post(
          `${process.env.REACT_APP_API_ENDPOINT}/api/users/register`,
          userInfo
        )
        .then((response) => {
          console.log(response.data);
          history.push("/login");
        });
    } catch (err) {
      alert("Login Failed");
    }
  };
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="signuppage">
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{fontWeight: "bold"}} component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                variant="outlined"
                size="small"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="email"
                value={userInfo.email}
                onChange={handleChange}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={userInfo.password}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                size="small"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Grid justify="center" container>
            <Grid item>
            <h5>
                Already have an account? 
              <Link style={{color: "#37447e", marginLeft: "5px", fontWeight: "bold"}} href="/login" variant="body2">
                Log in
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
