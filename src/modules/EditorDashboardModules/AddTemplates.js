import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/templateActions";
import { storage } from "../../firebase";
import Progress from "../../common/ProgressBar/Progress";

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
  constructor(props) {
    super(props);
    this.onAddTemplate = this.onAddTemplate.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.state = {
      templateName: "",
      fileLink: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",

      fileProcessStatus: false,
      fileProcessStatusAlert: "",
      fileProcessStatusMessage: "",

      uploadProfilePercentage: 0,
      uploadTemplateImagePercentage: 0,
      uploadTemplateFilePercentage: 0,
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  uploadFile(e) {
    if (e.target.files[0] !== null) {
      this.setState({
        processStatus: true,
        processStatusAlert: "alert alert-warning",
        processStatusMessage: "File Uploading...",
      });
      const uploadTask = storage
        .ref(`templatefiles/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ uploadTemplateFilePercentage: progress });
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref("templatefiles")
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.setState({ fileLink: url });
              this.setState({
                processStatusAlert: "alert alert-success",
                processStatusMessage: "File uploaded successfully",
              });
            });
        }
      );
    } else {
      this.setState({
        processStatusAlert: "alert alert-danger",
        processStatusMessage: "Something went wrong",
      });
    }
  }

  onAddTemplate(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please wait",
    });

    const addTemplates = {
      templateName: this.state.templateName,
      fileLink: this.state.fileLink,
    };

    this.props.addTemplate(
      addTemplates,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Successful",
        });
        //     window.location = "/editordashboard";
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage: "Please try again.",
        });
      }
    );
  }

  render() {
    return (
      <div>
        <div>
          <Card>
            <CardBody className="p-5">
              <h3 className="text-center">ADD | TEMPLATE</h3>
              <hr />
              <Form onSubmit={this.onAddTemplate}>
                <FormGroup row>
                  <Label for="WordLink" sm={2}>
                    Template Name
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="templateName"
                      id="templateName"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="WordLink" sm={2}>
                    File
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="file"
                      name="fileLink"
                      id="fileLink"
                      onChange={(e) => {
                        this.uploadFile(e);
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup>
                  {this.state.processStatus ? (
                    <div className={this.state.processStatusAlert} role="alert">
                      {this.state.processStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </FormGroup>
                <FormGroup row>
                  <Progress
                    percentage={this.state.uploadTemplateFilePercentage}
                  />
                </FormGroup>

                <FormGroup row>
                  <Col sm={{ size: 10, offset: 2 }}>
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

const mapActionToProps = {
  addTemplate: actions.addTemplate,
};

export default connect(null, mapActionToProps)(AddTemplates);
