import React, { Component } from "react";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <span
              style={{ fontSize: "30px", fontWeight: "bold", color: "#015d87" }}
            >
              CONFERENCE<span style={{ color: "#e36200" }}>APP</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse navLinkTab"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto navLinkTab">
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab"
                  href="/"
                  style={{ color: "#0082bd" }}
                >
                  <HomeIcon />
                  HOME
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab"
                  href="/explore"
                  style={{ color: "#0082bd" }}
                >
                  <ExploreIcon />
                  EXPLORE
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
