import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import PresenterDashboard from "../../modules/PresenterPageModules/PresenterDashboard";

export class PresenterPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PresenterDashboard />
      </div>
    );
  }
}

export default PresenterPage;
