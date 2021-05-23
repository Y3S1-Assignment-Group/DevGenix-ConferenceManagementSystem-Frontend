import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/conferenceActions";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export class ConferenceCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllApprovedConferenceList();
  }

  render() {
    return (
      <div>
        {this.props.approvedConferenceList.map((singleConference) => {
          return (
            <Card
              style={{
                borderRadius: "20px",
                backgroundColor: "#21012B",
                marginLeft: "20px",
              }}
              className="text-center"
            >
              <CardBody>
                <CardTitle style={{ color: "white" }}>
                  <div className="row">
                    <div className="col-md-6 text-center">Title </div>

                    <div className="col-md-6 text-left">
                      {singleConference.confTitle}
                    </div>
                  </div>
                </CardTitle>
                <center>
                  {" "}
                  <CardText style={{ color: "white" }}>
                    <div className="row">
                      <div className="col-md-6 text-center">About </div>

                      <div className="col-md-6 text-left">
                        {" "}
                        {singleConference.description}
                      </div>
                    </div>
                  </CardText>
                  <CardText style={{ color: "white" }}>
                    <div className="row">
                      <div className="col-md-6 text-center">From</div>

                      <div className="col-md-6 text-left">
                        {" "}
                        {singleConference.fromTime}
                      </div>
                    </div>
                  </CardText>
                  <CardText style={{ color: "white" }}>
                    <div className="row">
                      <div className="col-md-6 text-center">To</div>

                      <div className="col-md-6 text-left">
                        {" "}
                        {singleConference.toTime}
                      </div>
                    </div>
                  </CardText>
                  <CardText style={{ color: "white" }}>
                    <div className="row">
                      <div className="col-md-6 text-center">Venue</div>

                      <div className="col-md-6 text-left">
                        {" "}
                        {singleConference.venue}
                      </div>
                    </div>
                  </CardText>
                  <Button className="bg-transparent border-0">
                    <FaRegFilePowerpoint color="white" fontSize="1.75em" />
                  </Button>
                  <Button className="bg-transparent border-0">
                    <BsCalendar color="white" fontSize="1.5em" />
                  </Button>
                </center>
              </CardBody>
            </Card>
          );
        })}
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
export default connect(mapStateToProps, mapActionToProps)(ConferenceCard);
