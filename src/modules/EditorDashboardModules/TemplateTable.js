import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/templateActions";

class TemplateTable extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.viewTemplate();
  }

  render() {
    return (
      <div>
        <div className="container">
        <div className="row mt-5">
        {this.props.templates && this.props.templates.map((singleTemplate) => {
          return (
            <div className="col-lg-6 p-4">
            <p className="mt-2">
              <span className="templateTitle">
                {singleTemplate.templateName}
                <button className="btn btn-sm btn-danger font-weight-bolder m-2">
                  X
                </button>
              </span>
            </p>

            <iframe
              height="500px"
              width="100%"
              src={singleTemplate.fileLink}
              // src="https://docs.google.com/presentation/d/1VYtsz71Lx5DVJhudqMWBzmWc1AfA4TAXTIwHccPY4cM/edit?usp=sharing"
            ></iframe>
            <br />
          </div>
          )
          })}
        </div>
      </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  templates: state.templateReducer.templates,
})

const mapActionToProps = {
  viewTemplate: actions.viewTemplate,
};

export default connect(mapStateToProps, mapActionToProps)(TemplateTable);

