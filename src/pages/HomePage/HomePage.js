import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import HomeHeroCarousel from "../../modules/HomePageModules/HomeHeroCarousel";

class HomePage extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Navbar />
        <HomeHeroCarousel />
      </div>
    );
  }
}

export default HomePage;
