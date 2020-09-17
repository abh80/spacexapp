import React, { Component } from "react";
import "./home.scss";
import bg from "../assets/bg.jpg";
import rocket from "../assets/rocket.jpg";
import capsule from '../assets/capsule.jpg'
import starlink from '../assets/starlink.png'
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="homePage"
        style={{
          backgroundImage: "url(" + bg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 1000,
        }}
      >
        <div className="titleBar">
          <h1>Welcome to the Unofficial SpaceX app</h1>
          <h2>What will you like to browse today?</h2>
        </div>
        <div
          className="rocketCard"
          style={{
            position: "relative",
            left: 200,
            top: 50,
            width:500
          }}
        >
          <div className="card">
            <div
              className="image"
              style={{ backgroundImage: "url(" + rocket + ")" }}
              onClick={() => (window.location.href = "/rocket")}
            ></div>
            <div className="cardTitle">
              <h5>Rocket</h5>
              <p>View the rocket deatils</p>
            </div>
          </div>
        </div>
        <div className="capsuleImage" style = {{
          left : 500,
          top : -238,
          width:500,
          position:'relative'
        }}>
          <div className="card">
            <div
              className="image"
              style={{ backgroundImage: "url(" + capsule + ")" }}
              onClick = {()=>window.location.href = "/capsule"}
            ></div>
            <div className="cardTitle">
              <h5>Capsule</h5>
              <p>View the capsule details</p>
            </div>
          </div>
        </div>
        <div className="Launches" style = {{
          left : 800,
          top : -526,
          width:500,
          position:'relative'
        }}>
           <div className="card">
           <div
              className="image"
              style={{ backgroundImage: "url(" + starlink+ ")" }}
              onClick = {()=>window.location.href = "/launch"}
            ></div>
             <div className="cardTitle">
               <h5>Launches</h5>
               <p>Watch the live or previous launch</p>
             </div>
           </div>
        </div>
      </div>
    );
  }
}
export default Home;
