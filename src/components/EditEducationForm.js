import React from "react";

class EditEducationForm extends React.Component {
  state = {};
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
                  <select>
                    {months.map(month => (
                      <option>{month}</option>
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
                ></input>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default EditEducationForm;
