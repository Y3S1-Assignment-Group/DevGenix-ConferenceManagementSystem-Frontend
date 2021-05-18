import React, { Component } from "react";
import "./LatestNews.css";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";

export class LatestNews extends Component {
  render() {
    return (
      <div className="container">
        <br /> <br />
        <div className="row mt-4 mb-4">
          <h1 className="text-white text-center">LATEST NEWS</h1>

          <div className="col-lg-4 col-sm-12 mt-3">
            <Card className="CardDiv">
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button className="btn btn-warning">Click Here</Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <Card className="CardDiv">
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button className="btn btn-warning">Click Here</Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <Card className="CardDiv">
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button className="btn btn-warning">Click Here</Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <Card className="CardDiv">
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button className="btn btn-warning">Click Here</Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <Card className="CardDiv">
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button className="btn btn-warning">Click Here</Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <Card className="CardDiv">
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button className="btn btn-warning">Click Here</Button>
              </CardBody>
            </Card>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default LatestNews;
