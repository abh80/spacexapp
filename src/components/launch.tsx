import "./launch.scss";
import React, { Component } from "react";
class Launch extends Component {
  state : {embed:string[]}
  constructor(props){
    super(props);
    this.state = {embed:[]}
  }
  componentWillMount(){
    this.getVideo()
  }
  render() {
    return (
      <div className="launches">
          <iframe width="915" height="512" src={this.state.embed[0]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
    <h3>{this.state.embed[1]}</h3>
      </div>
    );
  }
  getVideo(){
    fetch('https://backend.starstracker.xyz/api/launch')
    .then(res=>res.json())
    .then(embed=>this.setState({embed:embed}))
  }
}
export default Launch;
