import React from "react";
import { Link } from "react-router-dom";
class EditEducationForm extends React.Component {
  state = {
    instituteName: "",
    degree: "",
    year: "",
    month: ""
  };
  onInstituteNameChange = e => {
    this.setState({
      instituteName: e.target.value
    });
  };
  onDegreeChange = e => {
    this.setState({
      degree: e.target.value
    });
  };
  onYearChange = e => {
    this.setState({
      year: e.target.value
    });
  };
  onMonthChange = e => {
    this.setState({
      month: e.target.value
    });
  };
  onHandleSubmit = () => {
    console.log("Submit Clicked");
  };
  render() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
    return (
      <div className="columns is-mobile is-centered has-background-light">
        <div className="column is-half">
          <h1 className="title">Education</h1>
          <section className="section has-background-white">
            <div className="field">
              <p className="subtitle">Institution Name</p>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Please enter your college name"
                  value={this.state.instituteName}
                  onChange={this.onInstituteNameChange}
                ></input>
              </div>
            </div>
          </section>
          <section
            className="section has-background-white"
            style={{ marginTop: "10px" }}
          >
            <div className="field">
              <p className="subtitle">Degree</p>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Please enter your college name"
                  value={this.state.degree}
                  onChange={this.onDegreeChange}
                ></input>
              </div>
            </div>
          </section>
          <section
            className="section has-background-white"
            style={{ marginTop: "10px" }}
          >
            <div className="field">
              <p className="subtitle">Year</p>
              <div className="control">
                <div className="select">
                  <select onChange={this.onMonthChange}>
                    {months.map(month => (
                      <option value={month}>{month}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="please enter the year"
                  value={this.state.year}
                  onChange={this.onYearChange}
                ></input>
              </div>
            </div>
            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <a className="button is-primary" onClick={this.onHandleSubmit}>
                  Submit
                </a>
              </p>
              <p className="control">
                <Link to="/resume" className="button is-light">
                  Cancel
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default EditEducationForm;
