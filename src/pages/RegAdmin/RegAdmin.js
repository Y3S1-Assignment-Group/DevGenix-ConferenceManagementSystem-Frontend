import React, { Component } from 'react';
import { Container,Card,CardBody,Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navbar from "../../common/Navbar/Navbar";
import StripeCheckout from "../../common/StripePayment/StripeCheckout";
import Footer from "../../common/Footer/Footer";

class RegAdmin extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container className="mt-5">
                    <Card>
                        <CardBody className="p-5">
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

                                </FormGroup>

                                <br/>

                            </Form>

                            <Col sm={10}>
                                <StripeCheckout/>
                            </Col>
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

export default RegAdmin;