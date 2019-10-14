import React from "react";

const EditExperience = () => {
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
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Go on brag about yourself"
                  ></textarea>
                </div>
              </div>
              <div className="field is-grouped is-grouped-centered">
                <p className="control">
                  <a className="button is-primary">Submit</a>
                </p>
                <p className="control">
                  <a className="button is-light">Cancel</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditExperience;
