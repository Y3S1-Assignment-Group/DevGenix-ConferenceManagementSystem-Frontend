import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import HomeAboutSection from "../../modules/HomePageModules/HomeAboutSection/HomeAboutSection";
import HomeHeroSection from "../../modules/HomePageModules/HomeHeroSection/HomeHeroSection";
import StripeCheckout from "../../common/StripePayment/StripeCheckout";

class HomePage extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <HomeHeroSection />
        <HomeAboutSection />
          <StripeCheckout/>
      </div>
    );
  }
}

export default HomePage;
