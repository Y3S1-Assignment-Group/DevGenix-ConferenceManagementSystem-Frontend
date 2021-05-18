import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import RegPresenter from "../pages/RegPresenter/RegPresenter";
import RegAttendee from "../pages/RegAttendee/RegAttendee";
import RegRearseacher from "../pages/RegReasearcher/RegRearseacher";
import KeynoteSpeakerPage from "../pages/KeynoteSpeakerPage/KeynoteSpeakerPage";

class RouteComponent extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
            <Route path="/PresenterRegistration" exact component={RegPresenter} />
            <Route path="/ReasearcherRegistration" exact component={RegRearseacher} />
            <Route path="/AttendeeRegistration" exact component={RegAttendee} />
          <Route path="/Keynotes" exact component={KeynoteSpeakerPage} />


        </Switch>
      </Router>
    );
  }
}

export default RouteComponent;
