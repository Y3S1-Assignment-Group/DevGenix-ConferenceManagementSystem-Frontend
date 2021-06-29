import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/reasearchpaperActions";
import { PaperCard } from "../../common/PaperCard/PaperCard";

export class ResearcherDashboard extends Component {
  componentDidMount() {
    this.props.fetchResearchPapersByResearcher();
  }

  render() {
    return (
      <div className="mt-5">
        <div className="text-center">
          <p className="display-1 text-white ">
            <span className="font-weight-bold">Hello</span> <br />
            {this.props.user.email}
          </p>
        </div>
        <div className="mt-5">
          {this.props.ReasearchPaper ? (
            <PaperCard
              reasearchPaper={this.props.ReasearchPaper}
              researcher={true}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ReasearchPaper: state.reasearchpaperReducer.ReasearchPaper,
  user: state.authReducer.user,
});

const mapActionToProps = {
  fetchResearchPapersByResearcher: actions.fetchResearchPapersByResearcher,
};

export default connect(mapStateToProps, mapActionToProps)(ResearcherDashboard);
