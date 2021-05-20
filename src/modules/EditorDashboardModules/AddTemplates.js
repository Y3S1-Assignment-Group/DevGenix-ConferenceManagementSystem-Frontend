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

export class AddTemplates extends Component {
  render() {
    return (
      <div>
        <div>
          <Card>
            <CardBody className="p-5">
              <h3 className="text-center">ADD | TEMPLATE</h3>
              <hr />
              <Form>
                <div className="row">
                  <div className="col-lg-6">
                    <br />
                    <Label>RESEARCH TEMPLATES</Label>
                    <hr />
                    <FormGroup row>
                      <Label for="WordLink" sm={4}>
                        WORD
                      </Label>
                      <Col sm={8}>
                        <Input type="file" name="WordLink" id="WordLink" />
                      </Col>
                    </FormGroup>
                  </div>
                  <div className="col-lg-6">
                    <br />
                    <Label>PRESENTER TEMPLATES</Label>
                    <hr />
                    <FormGroup row>
                      <Label for="WordLink" sm={4}>
                        WORD
                      </Label>
                      <Col sm={8}>
                        <Input type="file" name="WordLink" id="WordLink" />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label for="email" sm={4}>
                        POWER POINT
                      </Label>
                      <Col sm={8}>
                        <Input type="file" name="pptxLink" id="pptxLink" />
                      </Col>
                    </FormGroup>
                  </div>
                </div>
                <div className="row text-center">
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                      <Button className="btn btn-warning ">Submit</Button>
                    </Col>
                  </FormGroup>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default AddTemplates;
