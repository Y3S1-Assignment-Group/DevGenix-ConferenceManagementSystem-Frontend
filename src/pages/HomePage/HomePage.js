import React, { Component } from "react";
import HomeAboutSection from "../../modules/HomePageModules/HomeAboutSection/HomeAboutSection";
import HomeHeroSection from "../../modules/HomePageModules/HomeHeroSection/HomeHeroSection";
import KeyNoteSpeakers from "../../modules/HomePageModules/KeyNoteSpeakers/KeyNoteSpeakers";
import LatestNews from "../../modules/HomePageModules/LatestNews/LatestNews";
import Footer from "../../common/Footer/Footer";

class HomePage extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <HomeHeroSection />
        <HomeAboutSection />
        <LatestNews />
        <KeyNoteSpeakers />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
