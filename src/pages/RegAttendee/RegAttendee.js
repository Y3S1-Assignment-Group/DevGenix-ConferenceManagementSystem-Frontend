import React, { Component } from "react";
import {
  Container,
  Card,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import Navbar from "../../common/Navbar/Navbar";
import StripeCheckout from "../../common/StripePayment/StripeCheckout";
import Footer from "../../common/Footer/Footer";

class RegAttendee extends Component {

  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
      contactNumber: "",
      jobStatus: "",
      universityOrWorkPlace: "",
      statementOfInterest: "",

    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container className="mt-5">
          <h3 className="text-center text-white mb-5">ATTENDEE REGISTRATION</h3>
          <Card>
            <CardBody className="p-5">
              <Form>
                <FormGroup>
                  {this.state.processStatus ? (
                    <div
                      className={this.state.processStatusAlert}
                      role="alert"
                    >
                      {this.state.processStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </FormGroup>
                <FormGroup row>
                  <Label for="First Name" sm={2}>
                    First Name
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter first name"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="Last Name " sm={2}>
                    Last Name
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter last name"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="Last Name " sm={2}>
                    Contact number
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="tel"
                      name="contactNumber"
                      id="telephone"
                      placeholder="Enter the telephone number"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="email" sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={2}>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="jobstatus" sm={2}>
                    Job Status
                  </Label>
                  <Col sm={10}>
                    <Input type="select" name="jobStatus" id="jobstatus" onChange={(e) => {
                        this.onValueChange(e);
                      }}>
                      <option value="Professional">Professional</option>
                      <option value="Student">Student</option>
                      <option value="Industry expert">Industry expert</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    Profile picture
                  </Label>
                  <Col sm={10}>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </FormText>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="universityWorkplace" sm={2}>
                    University/Workplace
                  </Label>
                  <Col sm={5}>
                    <Input
                      type="text"
                      name="universityOrWorkPlace"
                      id="universityWorkplace"
                      placeholder="Enter the university or the workplace"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleText" sm={2}>
                    Statement of Interests
                  </Label>
                  <Col sm={10}>
                    <Input type="textarea" name="statementOfInterest" id="statementOfInterest" onChange={(e) => {
                      this.onValueChange(e);
                    }} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="checkbox2" sm={2}>
                    Select if you are attending{" "}
                  </Label>
                  <Col sm={{ size: 10 }}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" /> Introduction to
                        flutter
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" /> Github 101
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" /> React Dev tool
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <br />
              </Form>

              <Col sm={10}>
                <StripeCheckout role="ATTENDEE" amount="1000.00" firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} password={this.state.password}
                contactNumber={this.state.contactNumber} jobStatus={this.state.jobStatus} universityOrWorkPlace={this.state.universityOrWorkPlace} statementOfInterest={this.state.statementOfInterest}/>
              </Col>
            </CardBody>
          </Card>
        </Container>

        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}



export default RegAttendee;