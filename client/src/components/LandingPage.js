import React from "react";
<<<<<<< Updated upstream
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
=======
import {Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
>>>>>>> Stashed changes
import "./LandingPage.scss";

function LandingPage() {
  const history = useHistory();
  return (
    <div className="landingpage">
      <div className="landingpage_content">
        <div className="landingpage_content_info">
          <h1 className="landingpage_content_info_header">
            Bringing Learning Into The Modern Era!
          </h1>
          <p className="landingpage_content_info_text">
            Everything else in our lives is AI powered and yet when it comes to
            our learning practices (arguably the most important aspect of our
            young lives) we seem to be stuck in the 18th Century! StudAI brings
            stuying to the modern era with Study partener matching, tutoring
            services and a revolutionary ML Study tracker, all to help you study
            smarter and not harder. StudAI. Give it a try!
          </p>
          <div className="landingpage_content_info_actionarea">
            <Button
                variant="contained"
                style={{
                  color: "white",
                  background: "#111B47",
                  textTransform: "capitalize",
                  marginRight: "50px",
                  marginTop:"50px"
                }}
                onClick={() => history.push("/signup")}
              >
                Sign Up
              </Button>
              <Button
                variant="contained"
                style={{
                  marginTop:"50px"
                }}
                onClick={() => history.push("/login")}
              >
                Log In
              </Button>
          </div>
        </div>
        <div className="landingpage_content_img">
          <img
            className="landingpage_content_img"
            alt="imsg"
            src="assets/studying.svg"
          />
        </div>
      </div>
      <div className="landingpage_find">
        <div className="landingpage_find_content">
          <h2 className="landingpage_find_content_header">
            Find the Perfect Study Group
          </h2>
          <p className="landingpage_find_content_text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
        <div className="landingpage_find_img">
          <img
            className="landingpage_find_img"
            alt="imsg"
            src="assets/screen.svg"
          />
        </div>
      </div>
      <div className="landingpage_tutor">
        <div className="landingpage_tutor_img">
          <img
            className="landingpage_tutor_img"
            alt="imsg"
            src="assets/tutor.svg"
          />
        </div>
        <div className="landingpage_tutor_content">
          <h2 className="landingpage_tutor_content_header">
            ML- Powered Tutoring
          </h2>
          <p className="landingpage_tutor_content_text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
      <div className="landingpage_super">
        <div className="landingpage_super_content">
          <h2 className="landingpage_super_content_header">
            Become a Super-Student
          </h2>
          <p className="landingpage_super_content_text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <Button
                variant="contained"
                className="landingpage_super_content_download"
                style={{
                  color: "white",
                  background: "#111B47",
                  textTransform: "capitalize",
                }}
                onClick={() => history.push("/download")}
              >
                Download
              </Button>
        </div>
        <div className="landingpage_super_img">
          <img
            className="landingpage_super_img"
            alt="imsg"
            src="assets/super.svg"
          />
        </div>
      </div>
      <div className="landingpage_footer">
        <div className="landingpage_footer_container">
          <div className="landingpage_footer_link-container">
            <div className="landingpage_footer_copyright">
              ©2021 StudAI Inc
            </div>
            <div className="landingpage_footer_link">
              <a href="#about">About</a>
            </div>
            <div className="landingpage_footer_link">
              <a href="#home">Home</a>
            </div>
            <div className="landingpage_footer_link">
              <a href="#contact">Contact</a>
            </div>
            <div className="landingpage_footer_logo">
<<<<<<< Updated upstream
              <a href="/">
                <img alt="logo" src="assets/logo.svg" />
              </a>
=======
              <img src="assets/logo.svg" />
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
