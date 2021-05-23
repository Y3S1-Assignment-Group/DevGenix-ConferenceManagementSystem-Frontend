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
                <FormGroup row>
                  <Label for="WordLink" sm={4}>
                    Template Name
                  </Label>
                  <Col sm={8}>
                    <Input type="text" name="templateName" id="templateName" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="WordLink" sm={4}>
                    File
                  </Label>
                  <Col sm={8}>
                    <Input type="file" name="WordLink" id="WordLink" />
                  </Col>
                </FormGroup>

                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 4 }}>
                    <Button className="btn btn-warning" type="submit">
                      Submit
                    </Button>
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

export default AddTemplates;
