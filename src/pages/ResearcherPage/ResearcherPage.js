import React, { Component } from "react";
import Footer from "../../common/Footer/Footer";
import NavbarAlt from "../../common/Navbar/NavbarAlt";
import ResearcherDashboard from "../../modules/ResearcherPageModules/ResearcherDashboard";

export class ResearcherPage extends Component {
  render() {
    return (
      <div>
        <NavbarAlt />
        <ResearcherDashboard />
        <Footer />
      </div>
    );
  }
}

export default ResearcherPage;
