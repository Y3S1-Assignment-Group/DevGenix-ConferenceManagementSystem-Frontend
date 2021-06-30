import React, { Component } from "react";
import Footer from "../../common/Footer/Footer";
import NavbarAlt from "../../common/Navbar/NavbarAlt";
import PresenterDashboard from "../../modules/PresenterPageModules/PresenterDashboard";

export class PresenterPage extends Component {
  render() {
    return (
      <div>
        <NavbarAlt />
        <PresenterDashboard />
        <Footer />
      </div>
    );
  }
}

export default PresenterPage;
