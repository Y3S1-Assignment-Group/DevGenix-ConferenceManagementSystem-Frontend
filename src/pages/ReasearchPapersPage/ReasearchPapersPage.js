import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import { CardColumns, Container } from "reactstrap";
import PaperCard from "../../common/PaperCard/PaperCard";
import Footer from "../../common/Footer/Footer";

class ReasearchPapersPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="mt-5">
          <CardColumns>
            <PaperCard />
            <PaperCard />
            <PaperCard />
            <PaperCard />
            <PaperCard />
          </CardColumns>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default ReasearchPapersPage;
