import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <div className="botNav" id="botNav">
        <h1>Find me here!</h1>
        <nav>
          <a href="https://www.facebook.com/ain.zainal.33">
            <img
              src={require("./images/facebook.png")}
              className="botNav"
              alt="Facebook"
            />
          </a>

          <a href="https://www.instagram.com/ninjaain/">
            <img
              src={require("./images/instagram.png")}
              className="botNav"
              alt="Instagram"
            />
          </a>

          <a href="https://steamcommunity.com/profiles/76561198074535927/">
            <img
              src={require("./images/steam.png")}
              className="botNav"
              alt="Steam"
            />
          </a>
        </nav>
      </div>
    );
  }
}
