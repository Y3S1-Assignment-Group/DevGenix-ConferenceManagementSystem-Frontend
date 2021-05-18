import React, {Component} from 'react';
import Navbar from "../../common/Navbar/Navbar";
import KeynoteCard from "../../common/KeynoteCard/KeynoteCard";
import {CardColumns, Container} from 'reactstrap';

class KeynoteSpeakerPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container className="mt-5">
                    <CardColumns >
                        <KeynoteCard/>
                        <KeynoteCard/>
                        <KeynoteCard/>
                        <KeynoteCard/>
                        <KeynoteCard/>
                        <KeynoteCard/>
                    </CardColumns>
                </Container>
            </div>
        );
    }
}

export default KeynoteSpeakerPage;