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

export class AddConference extends Component {
  render() {
    return (
      <div>
        <div>
          <Card>
            <CardBody className="p-5">
              <h3 className="text-center">CREATE | CONFERENCE</h3>
              <hr />
              <Form>
                <FormGroup row>
                  <Label for="confTitle" sm={4}>
                    Conference Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="confTitle"
                      id="confTitle"
                      placeholder="Enter Conference Name"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="description" sm={4}>
                    Description
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Enter Description"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="fomTime" sm={4}>
                    From
                  </Label>
                  <Col sm={8}>
                    <Input type="date" name="fomTime" id="fomTime" />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="toTime" sm={4}>
                    To
                  </Label>
                  <Col sm={8}>
                    <Input type="date" name="toTime" id="toTime" />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="venue" sm={4}>
                    Venue
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="venue"
                      id="venue"
                      placeholder="Enter Venue"
                    />
                  </Col>
                </FormGroup>

                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button className="btn btn-warning">Submit</Button>
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

export default AddConference;
