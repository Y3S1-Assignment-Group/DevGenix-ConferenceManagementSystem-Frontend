import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export class KeynoteCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card
          style={{
            borderRadius: "20px",
            backgroundColor: "#21012B",
            margin: "20px",
          }}
        >
          <CardImg
            top
            width="100%"
            src={this.props.workshop.workshop.workshopImage}
            alt="Card image cap"
            style={{ borderRadius: "20px" }}
          />
          <CardBody>
            <CardTitle tag="h5" style={{ color: "white" }}>
              {this.props.workshop.workshop.workshopName}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {this.props.workshop.workshop.date.substring(0, 10)}
            </CardSubtitle>
            <CardText style={{ color: "white" }}>
              {this.props.workshop.workshop.description}
            </CardText>

            <Button className="bg-transparent border-0">
              <a href={this.props.workshop.workshop.fileLink} target="_blank">
                <FaRegFilePowerpoint color="white" fontSize="1.75em" />
              </a>
            </Button>

            <Button className="bg-transparent border-0">
              <BsCalendar color="white" fontSize="1.5em" />
            </Button>

            <Button className="bg-transparent border-0">
              <CgProfile color="white" fontSize="1.7em" />
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default KeynoteCard;
