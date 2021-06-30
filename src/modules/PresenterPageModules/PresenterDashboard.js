import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/workshopActions";
import NavigationCard from "../NavigationCard/NavigationCard";

export class PresenterDashboard extends Component {
  componentDidMount() {
    this.props.fetchAllWorkshopsByPresenterId();
  }
  render() {
    return (
      <>
        <div className="text-center">
          <p className="display-1 text-white ">
            <span className="font-weight-bold">Hello</span> <br />
            {this.props.user.email}
          </p>
        </div>
        <div>
          {this.props.presenterWorkshop ? (
            <NavigationCard workshop={this.props.presenterWorkshop} />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  presenterWorkshop: state.workshopReducer.presenterWorkshop,
});

const mapActionToProps = {
  fetchAllWorkshopsByPresenterId: actions.fetchAllWorkshopsByPresenterId,
};

export default connect(mapStateToProps, mapActionToProps)(PresenterDashboard);
