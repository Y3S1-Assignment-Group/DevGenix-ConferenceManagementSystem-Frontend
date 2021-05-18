import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import "./KeyNoteSpeakers.css";

export class KeyNoteSpeakers extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="row mt-5 mb-5">
          <h1 className="text-white text-center">KEY NOTE SPEAKERS</h1>

          <div className="col-lg-4 col-sm-12 mt-3 ">
            <Card className="carDivSpeakers bg-transparent">
              <CardImg
                top
                width="100%"
                src="https://mercon.uom.lk/img/speakers/2.png"
                alt="Card image cap"
              />
              <CardBody
                className="speakerInfoDiv"
                style={{
                  backgroundColor: "rgba(240, 240, 240, .8)",
                }}
              >
                <CardTitle tag="h5">Prof. I.S. Jawahir</CardTitle>
                <CardText>
                  College of Engineering, University of Kentucky, USA
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3 ">
            <Card className="carDivSpeakers bg-transparent">
              <CardImg
                top
                width="100%"
                src="https://mercon.uom.lk/img/speakers/2.png"
                alt="Card image cap"
              />
              <CardBody
                className="speakerInfoDiv"
                style={{
                  backgroundColor: "rgba(240, 240, 240, .8)",
                }}
              >
                <CardTitle tag="h5">Prof. I.S. Jawahir</CardTitle>
                <CardText>
                  College of Engineering, University of Kentucky, USA
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3 ">
            <Card className="carDivSpeakers bg-transparent">
              <CardImg
                top
                width="100%"
                src="https://mercon.uom.lk/img/speakers/2.png"
                alt="Card image cap"
              />
              <CardBody
                className="speakerInfoDiv"
                style={{
                  backgroundColor: "rgba(240, 240, 240, .8)",
                }}
              >
                <CardTitle tag="h5">Prof. I.S. Jawahir</CardTitle>
                <CardText>
                  College of Engineering, University of Kentucky, USA
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default KeyNoteSpeakers;
