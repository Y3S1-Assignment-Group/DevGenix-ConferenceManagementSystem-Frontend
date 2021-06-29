import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import ResearcherDashboard from "../../modules/ResearcherPageModules/ResearcherDashboard";

export class ResearcherPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ResearcherDashboard />
      </div>
    );
  }
}

export default ResearcherPage;
