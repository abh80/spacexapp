import React, { Component } from "react";
import "./About.scss";
import bg from "../assets/about.jpg";

class About extends Component {
  render() {
    return (
      <div
        className="aboutSection"
        style={{
          backgroundImage: "url(" + bg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          height: 700,
          top: -20,
        }}
      >
        <div className="about-title">
          <h1>About</h1>
        </div>
        <div className="container">
          <p>SpaceX App is an unofficial app for SpaceX fans just like me. </p>
          <p>
            SpaceX app has data about every SpaceX rockets as of now which seems
            a bit cool. <br /> Feel free to use this App's service.
          </p>
          <div className="appinfo">
            <h1>
              <u>App Info</u>
            </h1>
            <p>
              SpaceX App is built using React and uses the unofficial spacex api
              to fetch data about SpaceX projects
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
