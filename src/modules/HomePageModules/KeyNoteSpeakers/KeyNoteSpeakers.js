import React, { Component } from "react";
import {CardColumns, Container} from "reactstrap";
import KeynoteCard from "../../../common/KeynoteCard/KeynoteCard";
import NavigationCard from "../../NavigationCard/NavigationCard";


export class KeyNoteSpeakers extends Component {
  render() {
    return (

        <Container className="mt-5">
            <h1 className="text-white text-center">KEYNOTES</h1>
            <CardColumns >
                <KeynoteCard/>
                <KeynoteCard/>
                <NavigationCard/>
                <NavigationCard/>
            </CardColumns>
        </Container>
    );
  }
}

export default KeyNoteSpeakers;
