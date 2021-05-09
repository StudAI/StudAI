import { makeStyles, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Drawer } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  drawerRoot: {
    background: "inherit",
    border: "none",
    marginTop: 75,
    marginLeft: 20,
  },
}));

function ProfilePage() {
  const classes = useStyles();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.user.loggedIn);
  const name = useSelector((state) => state.user.name);
  const handleClick = () => {
    if (isLoggedIn) {
      //add type to redux state
      history.push("/match");
    }
  };
  return (
    <div style={{ marginTop: 100 }}>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerRoot,
        }}
      >
        {/* Hello there */}
      </Drawer>
      <Container
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          align="center"
          style={{ color: "#37447e", fontWeight: 700 }}
        >
          {isLoggedIn ? `Welcome, ${name}` : "Log in to View Your Profile"}
        </Typography>
        <AccountCircleIcon
          style={{ width: 200, height: 200, color: "#37447e", opacity: 0.7 }}
        />
        <div style={isLoggedIn ? { display: "flex" } : { display: "none" }}>
          <Button style={{ color: "#37447e" }} onClick={handleClick}>
            Find Study Partner
          </Button>
          <Button style={{ color: "#37447e" }} onClick={handleClick}>
            Find Tutor
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default ProfilePage;
