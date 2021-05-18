import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { FaRegFilePowerpoint } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";





export default function KeynoteCard() {
    return (
        <div>

            <Card style={{ borderRadius: "20px",backgroundColor:"#21012B",margin:"20px"}}>
                <CardImg top width="100%" src= "https://drive.google.com/thumbnail?id=1cGn-0DWfRj_IsbglfA0wFZywphw3fsId" alt="Card image cap" style={{ borderRadius: "20px" }}/>
                <CardBody>
                    <CardTitle tag="h5" style={{color:"white"}}>Introduction to flutter</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">2021-5-18</CardSubtitle>
                    <CardText style={{color:"white"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>

                    <Button className="bg-transparent border-0">
                        <FaRegFilePowerpoint color="white" fontSize="1.75em" />
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
    )
}