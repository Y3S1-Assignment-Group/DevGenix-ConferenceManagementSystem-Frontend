import React, { Component } from "react";
import Footer from "../../common/Footer/Footer";
import NavbarAlt from "../../common/Navbar/NavbarAlt";
import Templates from "../../modules/TemplatePageModules/Templates/Templates";

export class TemplatePage extends Component {
  render() {
    return (
      <div>
        <NavbarAlt />
        <Templates />
        <Footer />
      </div>
    );
  }
}

export default TemplatePage;
