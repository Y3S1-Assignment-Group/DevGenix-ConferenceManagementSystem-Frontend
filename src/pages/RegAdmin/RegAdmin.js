import React, { Component } from "react";
import {
  Container,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import regImg from "url:../../assets/regImg.svg";

class RegAdmin extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="mt-5">
          <h3 className="text-center text-white mb-5">ADMIN REGISTRATION</h3>
          <Card>
            <CardBody className="p-5">
              <div className="row">
                <div className="col-lg-6 col-md-6 container">
                  <img src={regImg} alt="regImg" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-6 container">
                  <Form>
                    <FormGroup row>
                      <Label for="First Name" sm={12}>
                        First Name
                      </Label>
                      <Col sm={10}>
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Enter first name"
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label for="Last Name " sm={12}>
                        Last Name
                      </Label>
                      <Col sm={10}>
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Enter last name"
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label for="email" sm={12}>
                        Email
                      </Label>
                      <Col sm={10}>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="password" sm={12}>
                        Password
                      </Label>
                      <Col sm={10}>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter password"
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col sm={12}>
                        <Button className="btn btn-warning">Submit</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>

        <br />

        <Footer />
      </div>
    );
  }
}

export default RegAdmin;
