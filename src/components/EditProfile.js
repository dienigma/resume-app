import React from "react";
import { Link } from "react-router-dom";

class EditProfile extends React.Component {
  state = {
    overview: ""
  };
  onOverviewChange = e => {
    this.setState({
      overview: e.target.value
    });
  };
  onHandleSubmit = () => {
    console.log("Submit called");
  };

  render() {
    return (
      <div className="columns" style={{ marginTop: "10px" }}>
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="field">
                  <label className="label">Profile Overview</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Tell us about yourself."
                      value={this.state.overview}
                      onChange={this.onOverviewChange}
                    ></textarea>
                  </div>
                </div>
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <a
                      className="button is-primary"
                      onClick={this.onHandleSubmit}
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

export default EditProfile;
