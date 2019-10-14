import React from "react";
import { Link } from "react-router-dom";

class EditExperience extends React.Component {
  state = {
    companyName: "",
    description: ""
  };
  onCompanyChange = e => {
    this.setState({
      companyName: e.target.value
    });
  };
  onDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };
  onHandleSubmit = () => {
    console.log("Submit clicked");
  };
  render() {
    return (
      <div className="columns" style={{ marginTop: "10px" }}>
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="field">
                  <label className="label">Company Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Company Name"
                      value={this.state.companyName}
                      onChange={this.onCompanyChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Go on brag about yourself"
                      value={this.state.description}
                      onChange={this.onDescriptionChange}
                    ></textarea>
                  </div>
                </div>
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <Link
                      className="button is-primary"
                      onClick={this.onHandleSubmit}
                    >
                      Submit
                    </Link>
                  </p>
                  <p className="control">
                    <Link to="/resume" className="button is-light">
                      Cancel
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditExperience;
