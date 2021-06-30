import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../actions/attendeeActions";

class AttendeePage extends Component {
  componentDidMount() {
    this.props.getAttendeeDetail();
  }

  render() {
    return (
      <div>
        <div className="mt-5">
        <div className="text-center">
          <p className="display-1 text-white ">
            <span className="font-weight-bold">Hello</span> <br />
            {this.props.user.email}
          </p>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});
const mapActionToProps = {
  getAttendeeDetail: actions.getAttendeeDetail,
};

export default connect(mapStateToProps, mapActionToProps)(AttendeePage);
