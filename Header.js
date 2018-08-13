import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="topNav" id="myTopNav">
          <nav>
            <Link to="/home">AIN ZAINAL</Link>
            <Link to="/about">About</Link>
            <Link to="/todos">Todos</Link>
          </nav>
        </div>
      </header>
    );
  }
}
