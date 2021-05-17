import React, { Component } from "react";
import Countdown from "react-countdown";

export class HomeAboutSection extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#350142", color: "#ffffff" }}>
        <div className="container text-center pt-5 pb-5">
          <h1>About Our Conference</h1>
          <hr />
          <div className="container">
            <p>
              The 3rd International conference on advancements in computing
              -2021 (ICAC2021) is organized by the Faculty of Computing of the
              Sri Lanka Institute of Information Technology (SLIIT) as an open
              forum for academics along with industry professionals to present
              the latest findings and research output and practical deployments
              in the Computer Science and Information Technology domains.
              Primary objective of the ICAC is to uplift the research culture
              and the quality of research done by Sri Lankan researchers
            </p>
            <Countdown date={Date.now() + 10000000} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeAboutSection;
