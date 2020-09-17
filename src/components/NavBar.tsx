import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
      <a className = "NavLink" href = "/">Home</a>
      <a className = "NavLink" href = "/about">About</a>
      <a className = "NavLink" href = "https://github.com/abh80/spacexapp" target = "_blank">GitHub</a>
      </div>
    );
  }
}
export default NavBar;
