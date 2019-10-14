import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class EditCertifications extends Component {
  state = {
    title: "",
    description: ""
  };
  onChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };
  onChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  onhandleSubmit = () => {
    console.log(`Handle clicked.`);
  };
  render() {
    return (
      <div className="columns" style={{ marginTop: "10px" }}>
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Name of the award or certification"
                      id="title"
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Go on brag about yourself"
                      id="description"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                    ></textarea>
                  </div>
                </div>
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <a
                      className="button is-primary"
                      onClick={this.onhandleSubmit}
                    >
                      Submit
                    </a>
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
