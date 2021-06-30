import React, { Component } from "react";
import * as actions from "../../../actions/workshopActions";
import { connect } from "react-redux";
import NavbarAlt from "../../common/Navbar/NavbarAlt";
import KeynoteCard from "../../common/KeynoteCard/KeynoteCard";
import { Container } from "reactstrap";
import Footer from "../../common/Footer/Footer";

class KeynoteSpeakerPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllApprovedWorkshops();
  }
  render() {
    return (
      <div>
        <NavbarAlt />
        <Container className="mt-5">
          <div className="row">
            {this.props.approvedWorkshopList &&
              this.props.approvedWorkshopList
                .reverse()
                .map((singleApprovedWorkshop) => {
                  return (
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <KeynoteCard workshop={singleApprovedWorkshop} />
                    </div>
                  );
                })}
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  approvedWorkshopList: state.workshopReducer.approvedWorkshopList,
});

const mapActionToProps = {
  fetchAllApprovedWorkshops: actions.fetchAllApprovedWorkshops,
};

export default connect(mapStateToProps, mapActionToProps)(KeynoteSpeakerPage);
