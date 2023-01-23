import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render() {
    //console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          
        </p>
        <Profile />
      </div>
    );
  }
}

export default About;

