import React, {Component} from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import {FaRegFilePowerpoint, FaRegFileWord} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


export class PaperCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Card style={{ borderRadius: "20px",backgroundColor:"#21012B",margin:"20px"}}>
                    <CardBody>
                        <CardTitle tag="h5" style={{color:"white"}}>
                            {this.props.reasearchPaper.researchPaper.paperTitle}
                        </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {this.props.reasearchPaper.researchPaper.submittedDate}
                        </CardSubtitle>

                        <CardText style={{color:"white"}}>
                            {this.props.reasearchPaper.researchPaper.description}
                        </CardText>

                        <Button className="bg-transparent border-0">
                            <a href={this.props.reasearchPaper.researchPaper.paperLink} target="_blank">
                            <FaRegFileWord color="white" fontSize="1.75em" />
                            </a>
                        </Button>

                        <Button className="bg-transparent border-0">
                            <CgProfile color="white" fontSize="1.7em" />
                        </Button>

                    </CardBody>

                </Card>
            </div>
        )
    }
}