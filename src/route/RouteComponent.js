import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import RegPresenter from "../pages/RegPresenter/RegPresenter";

class RouteComponent extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
            <Route path="/PresenterRegistration" exact component={RegPresenter} />

        </Switch>
      </Router>
    );
  }
}

export default RouteComponent;
