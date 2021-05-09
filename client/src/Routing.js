import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ProfilePage from "./components/ProfilePage";
import DownloadPage from "./components/DownloadPage";
import MatchPage from "./components/MatchPage";
import NavBar from "./components/NavBar";
import React from "react";

function Routing() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/download">
          <DownloadPage />
        </Route>
        <Route exact path="/match">
          <MatchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routing;
