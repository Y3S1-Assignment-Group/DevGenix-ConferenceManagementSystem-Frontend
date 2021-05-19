import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export class CreateEditor extends Component {
  render() {
    return (
      <div>
        <div>
          <Card>
            <CardBody className="p-5">
              <h3 className="text-center">CREATE | EDITOR</h3>
              <hr />
              <Form>
                <FormGroup row>
                  <Label for="firstName" sm={4}>
                    First Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter First Name"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="lastName" sm={4}>
                    Last Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter Last Name"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="email" sm={4}>
                    Email
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter workshop name"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="password" sm={4}>
                    Password
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </Col>
                </FormGroup>

                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default CreateEditor;
