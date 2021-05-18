import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg ">
          <a className="navbar-brand" href="/">
            <span
              style={{ fontSize: "30px", fontWeight: "bold", color: "#ffffff" }}
            >
              ICAF<span style={{ color: "#ffb10a" }}>2021</span>
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
                  className="nav-link navLinkTab js-scroll-trigger"
                  href="/"
                  style={{ color: "#ffffff" }}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab js-scroll-trigger"
                  href="#about"
                  style={{ color: "#ffffff" }}
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab js-scroll-trigger"
                  href="#news"
                  style={{ color: "#ffffff" }}
                >
                  NEWS
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab js-scroll-trigger"
                  href="#speakers"
                  style={{ color: "#ffffff" }}
                >
                  SPEAKERS
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
