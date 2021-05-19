import React, { Component } from "react";
import { Table, Card, CardBody, Button } from "reactstrap";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
export class PendingEditorContent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center text-white mt-5 mb-5 display-3">
            PENDING EDITOR CONTENT
          </h3>
          <Card>
            <CardBody className="p-3">
              <div
                style={{
                  maxHeight: "390px",
                  overflowY: "auto",
                }}
              >
                <Table hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                      <th>Approve</th>
                      <th>Decline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneLike color="green" fontSize="1.7em" />
                        </Button>
                      </td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneDislike color="red" fontSize="1.7em" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneLike color="green" fontSize="1.7em" />
                        </Button>
                      </td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneDislike color="red" fontSize="1.7em" />
                        </Button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneLike color="green" fontSize="1.7em" />
                        </Button>
                      </td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneDislike color="red" fontSize="1.7em" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneLike color="green" fontSize="1.7em" />
                        </Button>
                      </td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneDislike color="red" fontSize="1.7em" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneLike color="green" fontSize="1.7em" />
                        </Button>
                      </td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneDislike color="red" fontSize="1.7em" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneLike color="green" fontSize="1.7em" />
                        </Button>
                      </td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneDislike color="red" fontSize="1.7em" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneLike color="green" fontSize="1.7em" />
                        </Button>
                      </td>
                      <td>
                        <Button className="bg-transparent border-0">
                          <AiTwotoneDislike color="red" fontSize="1.7em" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default PendingEditorContent;
