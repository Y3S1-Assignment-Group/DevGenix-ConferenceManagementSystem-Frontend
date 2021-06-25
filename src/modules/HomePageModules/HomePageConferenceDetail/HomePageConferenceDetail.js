import React, { Component } from "react";
import * as actions from "../../../../actions/conferenceActions";
import { connect } from "react-redux";
import CountDownSection from "./CountDownSection";
import "./HomePageConferenceDetail.css";

export class HomePageConferenceDetail extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllApprovedConferenceList();
  }

  findMonth = (timestamp) =>{

    let date = new Date(timestamp);
    let month = date.getMonth();

    switch(month){

      case 0:
        return "January ";
      case 1:
        return "February ";
      case 2:
          return "March ";
      case 3:
          return "April ";
      case 4:
          return "May ";
      case 5:
          return "June ";
      case 6:
          return "July ";
      case 7:
          return "August ";
      case 8:
            return "September ";
      case 9:
            return "October ";
      case 10:
            return "November ";
      case 11:
            return "December ";
    }

    return month;
  }

  findDate = (timestamp) =>{

    let date = new Date(timestamp);
    let newDate = date.getDate();

    return newDate;
  }

  
  findYear = (timestamp) =>{

    let date = new Date(timestamp);
    let year = date.getFullYear();

    return year;
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src="https://devcom.com/wp-content/uploads/2019/10/DevCom_Logo_BlueTransparent.png"
              alt="imgLogo"
              className="img-fluid mt-5"
            />
          </div>
         {this.props.approvedConferenceList && this.props.approvedConferenceList.reverse()
              .slice(0, 1).map((singleConfference)=>{
           return(
            <div className="col-lg-6 col-md-6 col-sm-12 conferenceDetailsSection">
            <div className="container">
              <h1 className="mb-0 font-weight-bold display-1">{singleConfference.confTitle}</h1>
              <p className="mb-0">
                {singleConfference.description}
              </p>
              <h2 className="mt-3 mb-0 rounded">
                <span className="conferenceDateDiv rounded">
             
                {this.findMonth(singleConfference.fromTime)} {this.findDate(singleConfference.fromTime)} -  {this.findMonth(singleConfference.toTime)} {this.findDate(singleConfference.toTime)}, {this.findYear(singleConfference.fromTime)}
                </span>
              </h2>
              <h2 className="mt-3">
                {singleConfference.venue}
              </h2>
            </div>

            <div className="mt-3 mb-3">
              <CountDownSection conferenceDate={singleConfference.toTime} />
            </div>
          </div>
           )
         })}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  approvedConferenceList: state.conferenceReducer.approvedConferenceList,
});

const mapActionToProps = {
  fetchAllApprovedConferenceList: actions.fetchAllApprovedConferenceList,
};

export default connect(mapStateToProps, mapActionToProps)(HomePageConferenceDetail);