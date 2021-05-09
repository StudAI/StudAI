import { makeStyles, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Drawer } from "@material-ui/core";
import { useSelector } from "react-redux";

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
  const isLoggedIn = useSelector((state) => state.user.loggedIn);
  const name = useSelector((state) => state.user.name);

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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
      </Container>
    </div>
  );
}

export default ProfilePage;
