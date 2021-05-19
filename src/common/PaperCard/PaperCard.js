import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { FaRegFileWord } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";





export default function PaperCard() {
    return (
        <div>

            <Card style={{ borderRadius: "20px",backgroundColor:"#21012B",margin:"20px"}}>
                <CardBody>
                    <CardTitle tag="h5" style={{color:"white"}}>Introduction to flutter</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">2021-5-18</CardSubtitle>

                    <CardText style={{color:"white"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>

                    <Button className="bg-transparent border-0">
                        <FaRegFileWord color="white" fontSize="1.75em" />
                    </Button>

                    <Button className="bg-transparent border-0">
                        <CgProfile color="white" fontSize="1.7em" />
                    </Button>

                </CardBody>

            </Card>
        </div>
    )
}