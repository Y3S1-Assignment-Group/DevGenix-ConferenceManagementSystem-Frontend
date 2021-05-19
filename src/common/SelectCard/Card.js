import React from 'react'
import {Button, Card, CardBody} from 'reactstrap';
import { Alert } from 'reactstrap';
import {AiFillCheckCircle} from "react-icons/ai";
import {IoIosRemoveCircle} from "react-icons/io";





export default function SelectCard() {
    return (
        <div>

            <Card style={{ borderRadius: "20px",backgroundColor:"#21012B",margin:"20px"}}>
                <CardBody style={{ padding:"75px"}}>

                    <Alert color="danger">
                        <Button className="bg-transparent border-0" >
                            <AiFillCheckCircle color="green" fontSize="1.7em" />
                        </Button>
                        <Button className="bg-transparent border-0" >
                            <IoIosRemoveCircle color="red" fontSize="1.7em" />
                        </Button>

                        <b className="ml-5">
                            Basic introduction to the flutter environment
                        </b>
                    </Alert>

                    <Alert color="danger">
                        <Button className="bg-transparent border-0" >
                            <AiFillCheckCircle color="green" fontSize="1.7em" />
                        </Button>
                        <Button className="bg-transparent border-0" >
                            <IoIosRemoveCircle color="red" fontSize="1.7em" />
                        </Button>

                        <b className="ml-5">
                            Basic introduction to the flutter environment
                        </b>
                    </Alert>
                    <Alert color="danger">
                        <Button className="bg-transparent border-0" >
                            <AiFillCheckCircle color="green" fontSize="1.7em" />
                        </Button>
                        <Button className="bg-transparent border-0" >
                            <IoIosRemoveCircle color="red" fontSize="1.7em" />
                        </Button>

                        <b className="ml-5">
                            Basic introduction to the flutter environment
                        </b>
                    </Alert>
                    <Alert color="danger">
                        <Button className="bg-transparent border-0" >
                            <AiFillCheckCircle color="green" fontSize="1.7em" />
                        </Button>
                        <Button className="bg-transparent border-0" >
                            <IoIosRemoveCircle color="red" fontSize="1.7em" />
                        </Button>

                        <b className="ml-5">
                            Basic introduction to the flutter environment
                        </b>
                    </Alert>
                    <Alert color="danger">
                        <Button className="bg-transparent border-0" >
                            <AiFillCheckCircle color="green" fontSize="1.7em" />
                        </Button>
                        <Button className="bg-transparent border-0" >
                            <IoIosRemoveCircle color="red" fontSize="1.7em" />
                        </Button>

                        <b className="ml-5">
                            Basic introduction to the flutter environment
                        </b>
                    </Alert>
                    <Alert color="danger">
                        <Button className="bg-transparent border-0" >
                            <AiFillCheckCircle color="green" fontSize="1.7em" />
                        </Button>
                        <Button className="bg-transparent border-0" >
                            <IoIosRemoveCircle color="red" fontSize="1.7em" />
                        </Button>

                        <b className="ml-5">
                            Basic introduction to the flutter environment
                        </b>
                    </Alert><Alert color="danger">
                    <Button className="bg-transparent border-0" >
                        <AiFillCheckCircle color="green" fontSize="1.7em" />
                    </Button>
                    <Button className="bg-transparent border-0" >
                        <IoIosRemoveCircle color="red" fontSize="1.7em" />
                    </Button>

                    <b className="ml-5">
                        Basic introduction to the flutter environment
                    </b>
                </Alert>


                </CardBody>
            </Card>
        </div>
    )
}