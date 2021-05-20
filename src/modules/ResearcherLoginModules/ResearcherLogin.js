import React, { Component } from 'react';
import {
  Container,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import regImg from 'url:../../assets/regImg.svg';

export class ResearcherLogin extends Component {
  render() {
    return (
      <div>
        <Container className='mt-5'>
          <Card>
            <CardBody className='p-5'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 container'>
                  <img src={regImg} alt='regImg' className='img-fluid' />
                </div>
                <div className='col-lg-6 col-md-6 container'>
                  <h3 className='mb-2 mt-5 font-weight-bold'>
                    RESEACHER LOGIN
                  </h3>
                  <hr />
                  <Form>
                    <FormGroup row>
                      <Label for='email' sm={12}>
                        Email
                      </Label>
                      <Col sm={10}>
                        <Input
                          type='email'
                          name='email'
                          id='email'
                          placeholder='Enter email'
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for='password' sm={12}>
                        Password
                      </Label>
                      <Col sm={10}>
                        <Input
                          type='password'
                          name='password'
                          id='password'
                          placeholder='Enter password'
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col sm={12}>
                        <Button className='btn btn-warning'>Submit</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default ResearcherLogin;
