import React, {Component} from 'react';
import { Container,Card,CardBody,Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";

class RegRearseacher extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container className="mt-5">
                    <Card>
                        <CardBody className="p-5" >
                            <Form>
                                <FormGroup row>
                                    <Label for="First Name" sm={2}>First Name</Label>
                                    <Col sm={5}>
                                        <Input type="text" name="firstName" id="firstName" placeholder="Enter first name" />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="Last Name " sm={2}>Last Name</Label>
                                    <Col sm={5}>
                                        <Input type="text" name="lastName" id="lastName" placeholder="Enter last name" />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="Last Name " sm={2}>Contact number</Label>
                                    <Col sm={5}>
                                        <Input type="tel" name="telephone" id="telephone" placeholder="Enter the telephone number" />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="email" sm={2}>Email</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="email" placeholder="Enter email" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={2}>Password</Label>
                                    <Col sm={10}>
                                        <Input type="password" name="password" id="password" placeholder="Enter password" />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="jobstatus" sm={2}>Job Status</Label>
                                    <Col sm={10}>
                                        <Input type="select" name="jobstatus" id="jobstatus">
                                            <option>Professional</option>
                                            <option>Student</option>
                                            <option>Industry expert</option>
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleFile" sm={2}>Profile picture</Label>
                                    <Col sm={10}>
                                        <Input type="file" name="file" id="exampleFile" />
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            It's a bit lighter and easily wraps to a new line.
                                        </FormText>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="universityWorkplace" sm={2}>University/Workplace</Label>
                                    <Col sm={5}>
                                        <Input type="text" name="universityWorkplace" id="universityWorkplace" placeholder="Enter the university or the workplace" />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label for="exampleText" sm={2}>Statement of Interests</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="checkbox2" sm={2}>Select if you are attending </Label>
                                    <Col sm={{ size: 10 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" id="checkbox2" />{' '}
                                                Introduction to flutter
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" id="checkbox2" />{' '}
                                                Github 101
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" id="checkbox2" />{' '}
                                                React Dev tool
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>


                            </Form>
                        </CardBody>
                    </Card>
                </Container>



                <Container className="mt-5">
                    <Card>
                        <CardBody className="p-5">
                            <Form>
                                <FormGroup row>
                                    <Label for="PaperTitle" sm={2}>Paper Title</Label>
                                    <Col sm={5}>
                                        <Input type="text" name="paperTitle" id="paperTitle" placeholder="Enter the paper title" />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label for="exampleFile" sm={2}>Wordfile</Label>
                                    <Col sm={10}>
                                        <Input type="file" name="file" id="exampleFile" />
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            It's a bit lighter and easily wraps to a new line.
                                        </FormText>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleText" sm={2}>Description</Label>
                                    <Col sm={10}>
                                        <Input type="textare" name="workshopDescription" id="workshopDescription" />
                                    </Col>
                                </FormGroup>

                                <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                        <Button>Submit</Button>
                                    </Col>
                                </FormGroup>


                            </Form>
                        </CardBody>
                    </Card>
                </Container>


                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
        );
    }
}

export default RegRearseacher;