import React from "react";
import { Link } from "react-router-dom";

export class Home extends React.Component {
  render() {
    return (
      <div className="imgHome">
        <div className="container">
          <img
            src={require("./images/girl.png")}
            className="imgMain"
            alt="Girl with pigtails"
          />
          <div className="middle">
            <Link to="/about">
              <div className="textInImg"> About Me </div>
            </Link>
          </div>
        </div>

        <div className="container">
          <img
            src={require("./images/test.png")}
            className="imgMain"
            alt="List of To-Dos"
          />
          <div className="middle">
            <Link to="/todos">
              <div className="textInImg">To Do List</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
