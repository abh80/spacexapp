import React, { Component } from "react";
import bg from "../assets/sao.jpg";
import "./Rocket.scss";
Object.defineProperty(Array.prototype, "random", {
  value: function r() {
    return this[Math.floor(Math.random() * this.length)];
  },
});

class Rocket extends Component {
  state: { c: null | any; rocket: null | any };
  current: number;
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleElementalClick = this.handleElementalClick.bind(this);
    this.handleRocketClick = this.handleRocketClick.bind(this);
    this.plusImage = this.plusImage.bind(this);
    this.subImage = this.subImage.bind(this);
    this.state = {
      c: null,
      rocket: null,
    };
    this.current = 1;
  }
  render() {
    return (
      <div
        className="rocketPage"
        style={{
          margin: "auto",
          textAlign: "center",
          position: "relative",
          backgroundImage: "url(" + bg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 1000,
        }}
      >
        <h1
          onClick={this.handleRocketClick}
          style={{
            height: "50px",
            width: "30px",
            margin: "auto",
            right: "30px",
          }}
        >
          Rocket
        </h1>
        <div className="SearchContainer">
          {this.state.rocket ? (
            <div className="RocketInfo">
              <div className="container2">
                <u>
                  <h2>{this.state.rocket.rocket_name}</h2>
                </u>

                <h3
                  style={{ textAlign: "left", left: 20, position: "relative" }}
                >
                  Description :
                </h3>

                <p
                  style={{
                    color: "white",
                    textAlign: "left",
                    left: 20,
                    position: "relative",
                    width: 900,
                  }}
                >
                  {this.state.rocket.description}
                </p>
                <div className="imageContainer">
                  {this.state.rocket.flickr_images.map((image) => {
                    if(this.state.rocket.flickr_images[0] === image)return <img className="images" src={image} style = {{display:"block"}}/> 
                    return <img className="images" src={image} />;
                  })}
                  <button className="leftBtn" onClick={this.subImage}>
                    &#10094;
                  </button>
                  <button className="rightBtn" onClick={this.plusImage}>
                    &#10095;
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          {this.state.c ? (
            <div className="selection">
              <h2>Found {this.state.c.length} results matching -</h2>
              {this.state.c.map((i) => {
                return (
                  <div
                    className="card1"
                    id={i.rocket_id}
                    style={{
                      backgroundImage: `url(${i.flickr_images.random()})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={this.handleElementalClick}
                  >
                    <div className="container1">
                      <h4>{i.rocket_name}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        {!this.state.c && !this.state.rocket ? (
          <div className="search-elems">
            <div className="searchBar">
              <input placeholder="search" type="text" id="searchBar"></input>
            </div>
            <div className="GoButton" onClick={this.handleClick}>
              <span className="text">Go</span>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
  async handleClick() {
    const element: HTMLInputElement = document.getElementById(
      "searchBar"
    ) as HTMLInputElement;
    const value = element.value;
    if (!value) return alert("Please enter some value");
    if (value) {
      try {
        const res = await fetch(`https://backend.starstracker.xyz/api/rocket?q=${value}`);
        res.json().then((rs) => this.setState({ c: rs }));
      } catch {
        window.location.href = "/error";
      }
    }
  }
  async handleElementalClick(event) {
    try {
      let ID = event.target.id;
      const res = await fetch(`https://backend.starstracker.xyz/rocket/${ID}`);
      res.json().then((rs) => this.setState({ c: null, rocket: rs }));
    } catch {
      window.location.href = "/error";
    }
  }
  handleRocketClick() {
    this.setState({ c: null, rocket: null });
  }
  subImage() {
    const n: number = this.current;
    var x: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
      "images"
    ) as HTMLCollectionOf<HTMLElement>;
    if (n <= 0) return;
    for (let k = 0; k < x.length; k++) {
      x[k].style.display = "none";
    }
    x[this.current - 1].style.display = "block";
    this.current--;
  }
  plusImage() {
    const n: number = this.current;
    var x: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
      "images"
    ) as HTMLCollectionOf<HTMLElement>;
    if (n >= x.length) return;
    for (let k = 0; k < x.length; k++) {
      x[k].style.display = "none";
    }
    x[this.current].style.display = "block";
    this.current++;
  }
}
export default Rocket;
