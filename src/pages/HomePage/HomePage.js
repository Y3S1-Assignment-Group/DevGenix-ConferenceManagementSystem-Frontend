import React, { Component } from "react";
import HomeAboutSection from "../../modules/HomePageModules/HomeAboutSection/HomeAboutSection";
import HomeHeroSection from "../../modules/HomePageModules/HomeHeroSection/HomeHeroSection";

class HomePage extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <HomeHeroSection />
        <HomeAboutSection />
      </div>
    );
  }
}

export default HomePage;
