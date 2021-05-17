import React, { Component } from "react";
import "./HomePageConferenceDetail.css";

export class HomePageConferenceDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src="https://devcom.com/wp-content/uploads/2019/10/DevCom_Logo_BlueTransparent.png"
              alt="imgLogo"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 conferenceDetailsSection">
            <h1 className="mb-0 font-weight-bold display-1">ICAF 2021</h1>
            <p className="mb-0">
              Sri Lanka Institute of Information Technology Dev Conference
            </p>
            <h2 className="mt-3 mb-0">
              <span className="conferenceDateDiv">July 27 - July 29, 2021</span>
            </h2>
            <h2 className="mt-3 ">
              Sri Lanka Institute of Information Technolog, Sri Lanka
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageConferenceDetail;
