import React from "react";
import "./LandingPage.scss";

function LandingPage() {
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
            <button className="landingpage_content_info_actionarea_signup">
              Sign Up
            </button>
            <button className="landingpage_content_info_actionarea_login">
              Log In
            </button>
          </div>
        </div>
        <div className="landingpage_content_img">
          <img className="landingpage_content_img" src="assets/studying.svg" />
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
          <img className="landingpage_find_img" src="assets/screen.svg" />
        </div>
      </div>
      <div className="landingpage_tutor">
        <div className="landingpage_tutor_img">
          <img className="landingpage_tutor_img" src="assets/tutor.svg" />
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
          <button className="landingpage_super_content_download">Download</button>
        </div>
        <div className="landingpage_super_img">
          <img className="landingpage_super_img" src="assets/super.svg" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
