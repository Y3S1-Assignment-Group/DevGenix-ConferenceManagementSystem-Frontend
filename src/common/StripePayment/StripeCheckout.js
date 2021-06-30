import React, { Component } from "react";
import StripeCheck from "react-stripe-checkout";
import { Button } from "reactstrap";
import * as actions from "../../../actions/authActions";
import * as actionsResearchPaper from "../../../actions/reasearchpaperActions";
import { connect } from "react-redux";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class StripeCheckout extends Component {
  constructor(props) {
    super(props);
    this.makePayment = this.makePayment.bind(this);
    this.state = {
      payment: {
        name: "react from FB",
        price: this.props.amount,
        productby: "FB",
      },
    };
  }

  makePayment(token) {
    const body = {
      token,
      payment: this.state.payment,
    };
    console.log(body);
    const header = {
      "COntent-Type": "application/json",
    };

    return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Payment`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        if (this.props.role == "ATTENDEE") {
          const registerAttendeeObj = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email,
            password: this.props.password,
            contactNumber: this.props.contactNumber,
            jobStatus: this.props.jobStatus,
            universityOrWorkPlace: this.props.universityOrWorkPlace,
            statementOfInterest: this.props.statementOfInterest,
            workshopAttends: this.props.workshops,
            imgLink: this.props.imgLink,
          };
          console.log(registerAttendeeObj);

          this.props.attendeeRegister(
            registerAttendeeObj,
            () => {
              alert("Payment Success,Registraion Completed");
              window.location = "/";
            },
            () => {
              alert("Something Went Wrong");
            }
          );
        } else if (this.props.role == "RESEARCHER") {
          const PayStatus = {
            paid: true,
          };
          this.props.payResearchPaper(
            PayStatus,
            () => {
              alert("Payment Success");
              NotificationManager.success("Payment Success");
              //window.location = "/researcher";
            },
            () => {
              alert("Something Went Wrong");
              NotificationManager.error("Something Went Wrong");
            }
          );
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <StripeCheck
          stripeKey="pk_test_51IrxfTFhAO44cnt88HMqK5pIY8KBk4Q7o9YyNOIMgKd7v2bCvFi8u1kkr1ftGEmo0NdjHc4BOykDMjkeRNjQd9Sj00x3xpTvSF"
          token={this.makePayment}
          name="Buy react"
        >
          <Button className="btn btn-warning"> Pay The Registration Fee</Button>
        </StripeCheck>
        <NotificationContainer />
      </div>
    );
  }
}
const mapActionToProps = {
  attendeeRegister: actions.attendeeRegister,
  payResearchPaper: actionsResearchPaper.payResearchPaper,
};

export default connect(null, mapActionToProps)(StripeCheckout);
