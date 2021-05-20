import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import KeynoteCard from "../../common/KeynoteCard/KeynoteCard";
import SelectCard from "../../common/SelectCard/Card";
import { AiFillCheckCircle } from "react-icons/ai";
import PaperCard from "../../common/PaperCard/PaperCard";

class ReviewerDashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h3 className="text-center text-white mt-5 mb-5 display-3">
            REVIEWER DASHBOARD
            <hr />
          </h3>
        </div>
        <div className="row mt-5 container">
          <div className="col-sm-8 ">
            <SelectCard />
          </div>
          <div className="col-sm-4 ">
            <KeynoteCard />
          </div>
        </div>

        <div className="row mt-5 container">
          <div className="col-sm-8 ">
            <SelectCard />
          </div>
          <div className="col-sm-4 ">
            <PaperCard />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ReviewerDashboard;
