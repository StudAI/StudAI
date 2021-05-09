import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function NavBar() {
  const history = useHistory();
  return (
    <div>
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <Button
                variant="contained"
                style={{
                  color: "white",
                  background: "#111B47",
                  textTransform: "capitalize",
                }}
                onClick={() => history.push("/download")}
              >
                Get the Extension
              </Button>
            </div>
            <div
              style={{ display: "flex", cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              <p
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 900,
                  fontSize: 32,
                  margin: 0,
                  color: "#37447E",
                }}
              >
                Stud
              </p>
              <img src="logo192.png" alt="logo" style={{ height: 35, marginRight: "7vw"}} />
            </div>
            <div style={{ display: "flex" }}>
              <Button
                style={{ width: "fit-content"}}
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
              <Button
                style={{ width: "fit-content" }}
                onClick={() => history.push("/signup")}
              >
                Signup
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
