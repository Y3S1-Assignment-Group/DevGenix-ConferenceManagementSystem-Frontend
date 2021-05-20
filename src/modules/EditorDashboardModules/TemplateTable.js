import React, { Component } from "react";

export class TemplateTable extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6 p-4">
              <p className="mt-2">
                <span className="templateTitle">Presenter Template</span>
              </p>

              <iframe
                height="500px"
                width="100%"
                src="https://docs.google.com/presentation/d/1VYtsz71Lx5DVJhudqMWBzmWc1AfA4TAXTIwHccPY4cM/edit?usp=sharing"
              ></iframe>
              <br />
            </div>
            <div className="col-lg-6 p-4">
              <p className="mt-2">
                <span className="templateTitle">Presenter Template</span>
              </p>

              <iframe
                height="500px"
                width="100%"
                src="https://docs.google.com/document/d/1jEFkcByggqlKe18UkKR_HTwulTSolh3bf81ypuBY6a4/edit?usp=sharing"
              ></iframe>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateTable;
